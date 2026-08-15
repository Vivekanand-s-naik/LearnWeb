import { v2 as cloudinary } from "cloudinary";
import multer from "multer";


/*
    File Storing Mechanisms
    1. fetch and store the file temporarily from frontend to server storage
    2. get the local file path and send to cloudinary
    3. upload the file to cloudinary and delete it. 
*/

cloudinary.config({ 
  cloud_name: 'my_cloud_name', 
  api_key: 'my_key', 
  api_secret: 'my_secret'
});