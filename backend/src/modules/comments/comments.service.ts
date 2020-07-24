import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './interfaces/comment.interface';
import { CreateCommentDto } from './dtos/comment-create.dto';

@Injectable()
export class CommentsService {
    constructor (@InjectModel('Comment') private readonly commentModel:Model<Comment>) {}

    async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
        const newComment = new this.commentModel(createCommentDto);
        return await newComment.save();
    }

    async getComments(name: string): Promise<Comment[]> {
        return await this.commentModel.find({name:name})
    }


}
