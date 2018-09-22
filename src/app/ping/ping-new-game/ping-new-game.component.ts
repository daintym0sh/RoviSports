import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../../player';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-ping-new-game',
  templateUrl: './ping-new-game.component.html',
  styleUrls: ['./ping-new-game.component.css']
})
export class PingNewGameComponent implements OnDestroy {

  public playerSize: string;
  public bagName: string;
  public selectionOne = new Array<Player>();
  public selectionTwo = new Array<Player>();
  public scoreSize = new Array<number>(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  public scoreTeamOne: number;
  public scoreTeamTwo: number;

  constructor(private dragulaService: DragulaService) {

    this.playerSize = '100';
    this.bagName = 'ping';
    this.scoreTeamOne = null;
    this.scoreTeamTwo = null;

    this.dragulaService.createGroup(this.bagName, {
      revertOnSpill: true,
      accepts: (el, target, source, sibling) => {
        let t = target as HTMLElement;
        if (t.title === 'selectionOne' && this.selectionOne.length > 0){
          return false;
        } else if (t.title === 'selectionTwo' && this.selectionTwo.length > 0){
          return false;
        }
        else{
          return true;
        }
      }
    });
  }

  public userInputIncomplete(): boolean{
    return  !(this.selectionOne.length > 0 &&
            this.selectionTwo.length > 0 &&
            this.scoreTeamOne != null &&
            this.scoreTeamTwo != null);
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy(this.bagName);
  }

  public setSelectionOne(playerList: Player[]): void{
    this.selectionOne = playerList;
  }
  public setSelectionTwo(playerList: Player[]): void{
    this.selectionTwo = playerList;
  }

}
