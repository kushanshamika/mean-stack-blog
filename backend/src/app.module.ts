import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotesModule } from './modules/votes/votes.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://user:4313Samadhi@cluster0-jqb4b.mongodb.net/blog?retryWrites=true&w=majority'), VotesModule, CommentsModule],
})
export class AppModule {}
