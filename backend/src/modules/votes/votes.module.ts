import { Module } from '@nestjs/common';
import { VotesController } from './votes.controller';
import { VotesService } from './votes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VoteSchema } from './schemas/votes.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:'Vote', schema: VoteSchema}])],
  controllers: [VotesController],
  providers: [VotesService]
})
export class VotesModule {}
