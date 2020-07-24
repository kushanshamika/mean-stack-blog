import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './interfaces/comment.interface';
import { CreateCommentDto } from './dtos/comment-create.dto';

@Controller('api/v1/comments')
export class CommentsController {

    constructor(private readonly commentService:CommentsService){}

    @Post()
    async createComment(@Body() createCommentDto: CreateCommentDto): Promise<Comment>{
        return this.commentService.createComment(createCommentDto);
    }

    @Get(':name')
    async getComments(@Param('name') name): Promise<Comment[]> {
        return this.commentService.getComments(name);
    }
}
