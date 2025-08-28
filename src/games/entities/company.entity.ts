import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Company {
  @PrimaryColumn('varchar')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Game, (games) => games.companies)
  games: Game[];
}
