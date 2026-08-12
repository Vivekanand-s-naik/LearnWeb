import { useCallback, useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form"
import Input from "../Input";
import { useSelector } from "react-redux";
import { useId } from "react";
import RTE from "../editor/RTE";
import databaseService from "../../appwrite/DatabaseService";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { updatePost } from "../../features/postsSlice";

function RoomForm(post = null) {
    console.log("Room : ", post)
    const userData = useSelector(state => state.auth.userData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, control, setValue, getValues, reset } = useForm({
        defaultValues: {
            postImage: post.postImage || "https://img.magnific.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid&w=740&q=80",
            postTitle: post.postTitle || "",
            postContent: post.postContent || "Describe the Room",
            availability: post.availability || 0
        }
    });
    const fileInputLabelId = useId();
    const [fileUrl, setFileUrl] = useState(null);
    const [fileName, setFileName] = useState(getValues('postTitle'));

    const title = useWatch({ name: 'postTitle', control });
    const fileList = useWatch({ name: 'postImage', control });

    //a function to check for empty object
    const isObjEmpty = useCallback((obj) => {
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                return false
            }
        }
        return true;
    }, []);

    console.log(getValues());
    useEffect(() => {
        console.log("Invoking Rest")
        if (post) {
            console.log("Post Updates...")
            reset({
                postImage: post.postImage,
                postTitle: post.postTitle,
                postContent: post.postContent,
                availability: post.availability
            });
        }
    }, [post])


    useEffect(() => {
        if (typeof fileList === 'string') {
            console.log("Setting The file url instead of local image...");
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFileUrl(fileList);
            return;
        }
        if (fileList instanceof File) {
            console.log("Settiong File")
            setFileUrl(URL.createObjectURL(fileList));
            setFileName(fileList.name);
            return;
        }
    }, [title, setValue, fileList, post])

    const submitData = async (data) => {
        console.log("data, userData : ", data, userData, userData.$id);
        // if (typeof data.postImage === 'string')

        if (!isObjEmpty(post)) {
            //update
            console.log("Updating Post : ", post);
            //Check If a file is string (url instead of actual fils)=> then update using the same : else delete the prev image then dump the image to db and set the image
            if (typeof data.postImage === 'string') {
                const res = await databaseService.updatePost({
                    postId: post.$id,
                    postImageId: post.postImageId,
                    postTitle: data.postTitle,
                    postContent: data.postContent,
                    postUserId: userData.$id,
                    availability: Number.parseInt(data.availability),
                    postImage: data.postImage,

                });
                const newPost = {
                    postId: post.$id,
                    postImageId: post.postImageId,
                    postTitle: data.postTitle,
                    postContent: data.postContent,
                    postUserId: userData.$id,
                    availability: Number.parseInt(data.availability),
                    postImage: data.postImage,
                }
                dispatch(updatePost(newPost));
                console.log("Post Updated Successfully : ", res)
            } else {
                //Update the image with local image

                //Todo for a sec delete prev image later 
                await databaseService.deleteImage(post.postImageId);
                console.log("Image Deleted Successfully...");
                const imageData = await databaseService.dumpImage(data.postImage);
                console.log("Image Data : ", imageData)
                const imageUrl = await databaseService.getImageView(imageData.$id)
                const res = await databaseService.updatePost({
                    postId: post.$id,
                    postImage: imageUrl,
                    postImageId: imageData.$id,
                    postUserId: userData.$id,
                    postContent: data.postContent,
                    postTitle: data.postTitle,
                    availability: Number.parseInt(data.availability)
                });
                const newPost = {
                    postId: post.$id,
                    postImage: imageUrl,
                    postImageId: imageData.$id,
                    postUserId: userData.$id,
                    postContent: data.postContent,
                    postTitle: data.postTitle,
                    availability: Number.parseInt(data.availability)
                }
                dispatch(updatePost(newPost))
                console.log("data Submitted : ", res);
            }
        } else {
            //create
            const imageData = await databaseService.dumpImage(data.postImage);
            console.log("Image Data : ", imageData)
            const imageUrl = await databaseService.getImageView(imageData.$id)
            console.log("Creating Post")
            console.log("imageUrl : ", imageUrl);
            console.log("Availabilty : ", data.availability, typeof data.availability);
            const res = await databaseService.createPost({
                availability: Number.parseInt(data.availability),
                postImageId: imageData.$id,
                postImage: imageUrl,
                postTitle: data.postTitle,
                postContent: data.postContent,
                postUserId: userData.$id
            });
            console.log("data Submitted : ", res);
        }
        navigate("/");
    }

    if (errors) {
        console.error(errors);
    }
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">

            <form
                onSubmit={handleSubmit(submitData)}
                className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8"
            >

                <div className="flex gap-5 flex-wrap">
                    {/* Title and availability */}
                    <div className="w-1/2">
                        {/* Title */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                                Post Title
                            </label>

                            <Controller
                                name="postTitle"
                                control={control}
                                render={({ field: { onChange, ...otherProps } }) => (
                                    <Input
                                        type="text"
                                        onChange={(e) => {
                                            const inputVal = e.target.value;
                                            const formattedValue = inputVal
                                                .toLowerCase()
                                                .replace(/\s+/g, '-');
                                            onChange(formattedValue);
                                        }}
                                        {...otherProps}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
                                    />
                                )}
                                rules={{
                                    required: "Cannot Be Empty",
                                }}
                            />
                        </div>

                        {/* Availability */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                                Availability
                            </label>

                            <input
                                {...register("availability", {
                                    required: "Cannot Be Empty",
                                    min: 0,
                                })}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
                            />
                        </div>
                        {errors.availability && (
                            <p className="text-sm text-red-500">
                                {errors.availability.message}
                            </p>
                        )}

                    </div>
                    {/* Image Section */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="space-y-3">
                            <label className="block text-sm font-semibold text-gray-700">
                                Image Preview
                            </label>

                            <div className="w-80 h-80 rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={fileUrl}
                                    alt="Upload preview"
                                    className="w-full h-full object-cover"
                                    onLoad={() => URL.revokeObjectURL(fileUrl)}
                                />
                            </div>
                        </div>

                        {/* Upload */}
                        <div className="space-y-3 flex flex-col">
                            <label className="block text-sm font-semibold text-gray-700 text-center">
                                {fileName}
                            </label>

                            <Controller
                                name="postImage"
                                id={fileInputLabelId}
                                control={control}
                                rules={{
                                    required: !post,
                                }}
                                // eslint-disable-next-line no-unused-vars
                                render={({ field: { value, onChange, ...restProps } }) => {

                                    return (
                                        <div className="flex justify-center">
                                            <label className="cursor-pointer text-center flex items-center gap-2 bg-amber-500 text-white px-5 py-3 rounded-lg hover:bg-amber-600 max-w-40">
                                                {fileName ? "Click To Update" : "CLick to Upload Image"}
                                                <Input
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/png, image/jpg, image/jpeg, image/gif"
                                                    onChange={(e) => {
                                                        const targetFiles = e.target.files;
                                                        onChange(targetFiles[0]);
                                                    }}
                                                    {...restProps}
                                                />
                                            </label>
                                        </div>


                                    );
                                }}
                            />

                            {errors.postImage && (
                                <p className="text-sm text-red-500">
                                    {errors.featuredImage.message}
                                </p>
                            )}
                        </div>
                    </div>

                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                        Post Content
                    </label>

                    <div className="rounded-xl overflow-hidden border border-gray-300">
                        <Controller
                            name="postContent"
                            control={control}
                            render={({ field }) => {
                                return <RTE {...field} />;
                            }}
                        />
                    </div>
                </div>


                {/* Submit */}
                <div className="flex justify-center pt-4">
                    <button
                        type="submit"
                        className="cursor-pointer px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl shadow-lg transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RoomForm