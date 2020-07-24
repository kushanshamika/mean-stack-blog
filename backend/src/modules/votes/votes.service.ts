import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vote } from './schemas/votes.schema';
import { CreateVoteDto } from './dtos/vote-create.dto';

@Injectable()
export class VotesService {
    constructor (@InjectModel('Vote') private readonly voteModel:Model<Vote>) {}

    async createVote(createVoteDto: CreateVoteDto): Promise<Vote> {
        const newVote = new this.voteModel(createVoteDto);
        return await newVote.save();
    }

    async upVote(name: string): Promise<Vote> {
        return await this.voteModel.findOneAndUpdate({name:name}, {$inc: {votes:1}}, {useFindAndModify: false});
    }

    async getVote(name: string): Promise<Vote> {
        return await this.voteModel.findOne({name:name});
    }
}
