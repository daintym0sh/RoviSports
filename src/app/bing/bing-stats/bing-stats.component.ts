import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bing-stats',
  templateUrl: './bing-stats.component.html',
  styleUrls: ['./bing-stats.component.css'],
  providers: [PlayerService]
})
export class BingStatsComponent {

  private players: Player[];
  
  columns: string[];
  dataSource: MatTableDataSource<Player>;
  
  constructor(private playerService: PlayerService){
    this.players = playerService.getPlayers();
    this.dataSource = new MatTableDataSource<Player>(this.players);
    this.columns = ['PlayerID', 'FirstName', 'LastName', 'ShortName', 'StartDate', 'ELOScore', 'ELOScoreScrappy'];
  }

}
