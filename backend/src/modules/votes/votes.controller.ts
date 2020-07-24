import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dtos/vote-create.dto';
import { Vote } from './schemas/votes.schema';

@Controller('api/v1/votes')
export class VotesController {

    constructor(private readonly voteService:VotesService){}

    @Post()
    async createVote(@Body() createVoteDto: CreateVoteDto): Promise<Vote>{
        return this.voteService.createVote(createVoteDto);
    }

    @Post(':name')
    async upVote(@Param('name') name): Promise<Vote> {
        return this.voteService.upVote(name);
    }

    @Get(':name')
    async getVote(@Param('name') name): Promise<Vote> {
        return this.voteService.getVote(name);
    }
}
