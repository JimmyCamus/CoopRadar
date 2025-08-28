import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Company } from './company.entity';

@Entity()
export class Game {
  @PrimaryColumn('varchar')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ default: '' })
  summary: string;

  @Column({ array: true, default: [] })
  genres: string[];

  @Column()
  category: string;

  @ManyToOne(() => Game, (game) => game.dlcs, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  baseGame: Game;

  @OneToMany(() => Game, (game) => game.baseGame)
  dlcs: Game[];

  @Column()
  gameType: string;

  @Column({ type: 'json', array: true, default: [] })
  multiplayerModes: {
    campaigncoop: boolean;
    lancoop: boolean;
    offlinecoop: boolean;
    onlinecoop: boolean;
    splitscreen: boolean;
    splitscreenOnline: boolean;
  }[];

  @Column()
  url: string;

  @Column()
  rating: number;

  @Column({ array: true, default: [] })
  screenshots: string[];

  @OneToMany(() => Game, (game) => game.id)
  similarGames: Game[];

  @ManyToMany(() => Company, (company) => company.games)
  companies: Company[];

  @Column({ type: 'datetime' })
  createdAt: Date;

  @Column({ type: 'datetime' })
  updatedAt: Date;
}
