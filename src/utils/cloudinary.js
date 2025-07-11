import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY 
});

const uploadOnClodinary  = async(localFilePath)=>{
     try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(
            localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully
        // console.log("file is uploaded on cloudinary successfully",
        // response.url)

        // console.log(response)

        fs.unlinkSync(localFilePath)

        // for user 
        return response
     } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally saved tempoary file as the upload operation got failed
        return null
     }
}

export { uploadOnClodinary }