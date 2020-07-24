import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Vote extends Document {
    @Prop({required:true})
    name: string;

    @Prop({required:true})
    votes: number;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);