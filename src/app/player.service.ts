import { Player } from './player';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

  private players: Player[];

  constructor() {

  }

  public getPlayers(): Player[] {

    this.players = [
      new Player( 2911, 'John', 'Mayer', 'JM', new Date('January 1, 2018 12:00:00'), 1, 1),
      new Player( 2695, 'D', 'Gigg', 'DG', new Date('January 2, 2018 12:00:00'), 2, 2),
      new Player( 204, 'Josh', 'Masek', 'JM', new Date('January 3, 2018 12:00:00'), 3, 3),
      new Player( 2716, 'Ryan', 'Owens', '', new Date('January 4, 2018 12:00:00'), 4, 4),
      new Player( 2911, 'John', 'Mayer', 'JM', new Date('January 1, 2018 12:00:00'), 1, 1),
      new Player( 2695, 'D', 'Gigg', 'DG', new Date('January 2, 2018 12:00:00'), 2, 2),
      new Player( 204, 'Josh', 'Masek', 'JM', new Date('January 3, 2018 12:00:00'), 3, 3),
      new Player( 2716, 'Ryan', 'Owens', '', new Date('January 4, 2018 12:00:00'), 4, 4),
      new Player( 2911, 'John', 'Mayer', 'JM', new Date('January 1, 2018 12:00:00'), 1, 1),
      new Player( 2695, 'D', 'Gigg', 'DG', new Date('January 2, 2018 12:00:00'), 2, 2),
      new Player( 204, 'Josh', 'Masek', 'JM', new Date('January 3, 2018 12:00:00'), 3, 3),
      new Player( 2716, 'Ryan', 'Owens', '', new Date('January 4, 2018 12:00:00'), 4, 4),
      new Player( 2911, 'John', 'Mayer', 'JM', new Date('January 1, 2018 12:00:00'), 1, 1),
      new Player( 2695, 'D', 'Gigg', 'DG', new Date('January 2, 2018 12:00:00'), 2, 2),
      new Player( 204, 'Josh', 'Masek', 'JM', new Date('January 3, 2018 12:00:00'), 3, 3),
      new Player( 2716, 'Ryan', 'Owens', '', new Date('January 4, 2018 12:00:00'), 4, 4)
    ];

    return this.players;
  }

}
