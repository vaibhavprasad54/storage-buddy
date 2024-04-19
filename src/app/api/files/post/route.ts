import File from "@/app/models/file";
import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {

    connectDB();

    if(req.method == 'POST'){

        const { fileName, fileUrl, userId, userName, uploadedAt } = await req.json();
        console.log("JSON Data:", fileName, fileUrl, userId);

        try {

            const newFile = new File({
                fileName: fileName,
                fileUrl: fileUrl,
                userId: userId,
                userName: userName,
                uploadedAt: uploadedAt,
            });

            await newFile.save();
            return NextResponse.json({
                status: 201,
                message: "File uploaded to DB!",
            })

        } catch (error) {
            console.log("Error:", error);
            return NextResponse.json({
                message: "Failed to upload file to DB!"
            })
        }

    }
}
