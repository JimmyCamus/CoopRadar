import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from '../entities/game.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GameRepository {
  constructor(
    @InjectRepository(Game)
    private readonly repository: Repository<Game>,
  ) {}

  async findById(id: string): Promise<Game | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findMany(): Promise<Game[]> {
    return this.repository.find();
  }

  async create(gameData: Partial<Game>): Promise<Game> {
    const game = this.repository.create(gameData);
    return this.repository.save(game);
  }

  async update(id: string, gameData: Partial<Game>): Promise<Game | null> {
    await this.repository.update(id, gameData);
    return this.findById(id);
  }
}
