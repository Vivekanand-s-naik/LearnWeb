import RTE from "./editor/RTE";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Input } from "./index"
import databaseService from '../appwrite/DatabaseService';
import { useSelector } from "react-redux";

//Title
//Image
//Slug
//Content



function PostForm() {
	const [serverError, SetServerError] = useState("");
	const useStoreData = useSelector(state => state.auth.userData);
	const {
		handleSubmit,
		formState: { errors },
		control,
		register,
		clearErrors
	} = useForm({
		defaultValues: {
			postContent: "Hey Describe The Dish",
			postImage: "",
			postTitle: "",
			availability: null
		}
	})

	const validationError = errors?.postImage?.message
		||
		errors?.postImage?.message
		||
		errors?.postTitle?.message
		||
		errors?.availability?.message
	"";

	const SaveData = async (data) => {
		try {

			console.log(data);

			console.log("UserData : ", useStoreData);
			const filePost = await databaseService.dumpImage(data.postImage[0]);
			console.log(filePost);
			const fileUrl = await databaseService.getImageView(filePost.$id);
			console.log("fileUrl : ", fileUrl);
			const savePost = await databaseService.createPost({
				postImage: fileUrl,
				postTitle: data.postTitle,
				postUserId: useStoreData.$id,
				postContent: data.postContent,
				availability: data.availability
			})
			console.log("Save Post Status : ", savePost);
			clearErrors();
		} catch (error) {
			SetServerError(error.message);
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit(SaveData)}>
				{validationError && <h1>{validationError}</h1>}
				{serverError && (
					<p className="text-red-500 text-center font-medium">
						{serverError}
					</p>
				)}

				<Controller
					name="postContent"
					control={control}
					render={({ field }) => {
						return <RTE onChange={field.onChange} value={field.value} defaultValue={field.value} />
					}
					}
				/>
				<Controller
					name="postTitle"
					control={control}
					rules={{
						required: "Enter Dish Name"
					}}
					render={({ field }) => {
						return < Input onChange={field.onChange} value={field.value} />
					}

					}
				/>
				<input type="file" {...register("postImage", {
					required: "Select Dish Image",
					validate: {
						sizeCheck: (value) => {
							const maxSize = (1024 * 1024) * 5 //5 Mb
							const res = (value[0].size < maxSize) ? true : "File Size Exceeds"
							console.log(res);
							return res;
						},
						typeCheck: (value) => {
							const allowedTypes = [
								"image/jpeg",
								"image/png",
								"image/webp"
							];
							const res = allowedTypes.includes(value[0].type) || "Enter Valid Image File";
							console.log(res);
							return res;
						},
					}
				})} />
				<input
					type="number"
					step={1}
					{...register('availability', {
						required: "Mention Availability...",
						valueAsNumber: true,
						min: {
							value: 0,
							message: "No Negatives"
						},
						max: {
							value: 1000,
							message: "Max Limit Reached"
						}
					})} />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default PostForm