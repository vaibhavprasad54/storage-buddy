import File from "@/app/models/file";
import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    
    connectDB();
    if(req.method == 'POST'){
        const { userId } = await req.json();   
        
        try {
            const files = await File.find({ userId });
            return NextResponse.json(files, {
                status: 200,
            })
        } catch (error) {
            return NextResponse.json({
                message: "Unable to fetch files from DB!"
            })
        }
        
    }
}