import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { GameRepository } from '../repositories/game.repository';
import { Game } from '../entities/game.entity';

describe('GamesService', () => {
  let service: GamesService;
  let gameRepository: GameRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        { provide: GameRepository, useValue: { create: jest.fn(() => {}) } },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
    gameRepository = module.get<GameRepository>(GameRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call gameRepository.create with gameData and return the result', async () => {
    const gameData: Partial<Game> = { name: 'Test Game' };
    const createdGame = { id: 1, name: 'Test Game' } as unknown as Game;
    (gameRepository.create as jest.Mock).mockResolvedValue(createdGame);

    const result = await service.createGame(gameData);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(gameRepository.create as jest.Mock).toHaveBeenCalledWith(gameData);
    expect(result).toBe(createdGame);
  });
});
