import { Player } from '../player';
import { Component, Input } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent {

  @Input() bag: string;

  @Input() contentSize: string;

  public players: Player[];

  constructor(private playerService: PlayerService) {
    this.players = playerService.getPlayers();
  }

  public getContentSize(): string{
    return this.contentSize + 'px';
  }

  public getContentBarWidth(): number{
    return (+this.contentSize * 10) + 30;
  }

  public getContentBarHeight(): number{
    return +this.contentSize + 15;
  }

}
