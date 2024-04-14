import AWS from "aws-sdk";

//========================= Function to upload files to AWS S3 Bucket =====================
export const uploadToS3 = async (file: File) => {

    //====================== Configuring AWS S3 =====================
    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY ,
            secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY ,
        });

        const s3 = new AWS.S3({
            params: {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME, 
            },
            region: 'eu-north-1'
        });

    // ============ Creating File key by adding folder location, and unique values =============
        const file_key = 'uploads/' + Date.now().toString() + file.name.replace(' ', '-');

        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
            Key: file_key,
            Body: file
        }

   //================= Function to monitor file uploading to S3 ================
        const upload = s3.putObject(params).on('httpUploadProgress', evt => {
            console.log("Uploading...", parseInt(( (evt.loaded*100) / evt.total ).toString()) + "%" )
        }).promise()

        await upload.then(data => {
            console.log("Successfully uploaded to S3", file_key);
        })

        return Promise.resolve({
            file_key,
            file_name: file.name,
        })

    } catch (error) {
        console.log("Error while uploading to S3", error);
    }
}

//==================== Function to format s3 Url after file uploading ==================
export const getS3Url = (file_key: string) => {
    const url = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.eu-north-1.amazonaws.com/${file_key}` ;
    return url;
}