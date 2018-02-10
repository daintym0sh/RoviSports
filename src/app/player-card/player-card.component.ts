import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent {

  @Input() playerPosition: string;

  @Input() containerName: string;

  @Input() bag: string;

  @Input() contentSize: string;

  @Output() playerSelection = new EventEmitter<Player[]>();

  public selectedPlayers: Player[];

  constructor(private dragulaService: DragulaService) {

    this.selectedPlayers = new Array<Player>();

    dragulaService.dropModel.subscribe((value) => {
      this.playerSelection.emit(this.selectedPlayers);
      this.onDropModel(value.slice(1));
    });

  }

  public getContentSize(): string{
    return this.contentSize + 'px';
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    this.playerSelection.emit(this.selectedPlayers);
  }

}
