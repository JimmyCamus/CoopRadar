import { Module } from '@nestjs/common';
import { GamesService } from './services/games.service';
import { GameRepository } from './repositories/game.repository';

@Module({
  providers: [GamesService, GameRepository],
})
export class GamesModule {}
