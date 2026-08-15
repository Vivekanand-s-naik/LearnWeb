import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import fs from "node:fs/promises";

/*
    File Storing Mechanisms
    1. fetch and store the file temporarily from frontend to server storage
    2. get the local file path and send to cloudinary
    3. upload the file to cloudinary and delete it. 
*/

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadToCloudinary = async (fileLocalPath) => {
    try {
        if (!fileLocalPath) return null;
        const res = await cloudinary.uploader.upload(fileLocalPath, {
            resource_type: "auto",
            overwrite: true,
            // notification_url: "https://mysite.example.com/notify_endpoint"
        });
        console.log("File Saved Successfully\n", res);
        return res;
    }catch(error){
        console.log("Error Uploading File...\n", error.message);
        
        return null;
    }finally{
        try {
            await fs.unlink(fileLocalPath);
        } catch (error) {
            console.log("Skipping the file deletion...\n(filepath may be invalid or file is already Deleted)");
        }
    }
}

