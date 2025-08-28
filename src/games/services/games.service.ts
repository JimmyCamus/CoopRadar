import { Injectable } from '@nestjs/common';
import { GameRepository } from '../repositories/game.repository';
import { Game } from '../entities/game.entity';

@Injectable()
export class GamesService {
  constructor(private readonly gameRepository: GameRepository) {}

  async createGame(gameData: Partial<Game>): Promise<Game> {
    return this.gameRepository.create(gameData);
  }
}
