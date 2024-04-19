import mongoose, { Document, Schema, model } from "mongoose";

//================ Interface for Schema ==============
export interface IFile extends Document {
    fileName: string;
    fileUrl: string;
    userId: string;
    uploadedAt: Date;
}

//============= Defining Schema =============
const fileSchema: Schema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    fileUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    },
})


//============= Creating the model based on the schema ============
// const File = mongoose.model<IFile>("File", fileSchema);
const File = mongoose.models.File || mongoose.model("File", fileSchema);

export default File;

