import { Player } from '../../player';
import { DragulaService } from 'ng2-dragula';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'bing-new-game',
  templateUrl: './bing-new-game.component.html',
  styleUrls: ['./bing-new-game.component.css']
})
export class BingNewGameComponent implements OnDestroy {

  public playerSize: string;
  public bagName: string;
  public selectionOne = new Array<Player>();
  public selectionTwo = new Array<Player>();
  public selectionThree = new Array<Player>();
  public selectionFour = new Array<Player>();
  public scoreSize = new Array<number>(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  public scoreTeamOne: number;
  public scoreTeamTwo: number;

  constructor(private dragulaService: DragulaService) {

    this.playerSize = '100';
    this.bagName = 'first-bag';
    this.scoreTeamOne = null;
    this.scoreTeamTwo = null;

    this.dragulaService.setOptions(this.bagName, {
      revertOnSpill: true,
      accepts: (el, target, source, sibling) => {
        if (target.title === 'selectionOne' && this.selectionOne.length > 0){
          return false;
        } else if (target.title === 'selectionTwo' && this.selectionTwo.length > 0){
          return false;
        }
        else if (target.title === 'selectionThree' && this.selectionThree.length > 0){
          return false;
        }
        else if (target.title === 'selectionFour' && this.selectionFour.length > 0){
          return false;
        }
        else{
          return true;
        }
      }
    });
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
  public setSelectionThree(playerList: Player[]): void{
    this.selectionThree = playerList;
  }
  public setSelectionFour(playerList: Player[]): void{
    this.selectionFour = playerList;
  }

}
