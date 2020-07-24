import { Document } from "mongoose"

export interface Comment extends Document {
    readonly name: string;
    readonly comment: string;
    readonly username: string;
}