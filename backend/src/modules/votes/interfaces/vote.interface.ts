import { Document } from "mongoose";

export interface Vote extends Document {
    readonly name: string;
    readonly votes: number;
}