export class Player {

  constructor($PlayerID: number, $FirstName: string, $LastName: string, $ShortName: string, $StartDate: Date, $ELOScore: number, $ELOScoreScrappy: number) {
    this.PlayerID = $PlayerID;
    this.FirstName = $FirstName;
    this.LastName = $LastName;
    this.ShortName = $ShortName;
    this.StartDate = $StartDate;
    this.ELOScore = $ELOScore;
    this.ELOScoreScrappy = $ELOScoreScrappy;
  }

  private PlayerID: number;
  private FirstName: string;
  private LastName: string;
  private ShortName: string;
  private StartDate: Date;
  private ELOScore: number;
  private ELOScoreScrappy: number;


	public get $PlayerID(): number {
		return this.PlayerID;
	}

	public get $FirstName(): string {
		return this.FirstName;
	}

	public get $LastName(): string {
		return this.LastName;
	}

	public get $ShortName(): string {
		return this.ShortName;
	}

	public get $StartDate(): Date {
		return this.StartDate;
	}

	public get $ELOScore(): number {
		return this.ELOScore;
	}

	public get $ELOScoreScrappy(): number {
		return this.ELOScoreScrappy;
	}
	
	public getImageSrc(): string{
		return 'https://rovisys.roving-office.com/user/photo/' + this.$PlayerID + '?size=500';
	}
  
}
