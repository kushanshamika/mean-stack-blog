import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Comment extends Document {
    @Prop({required:true})
    name: string;

    @Prop({required:true})
    comment: string;

    @Prop({required:true})
    username: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);