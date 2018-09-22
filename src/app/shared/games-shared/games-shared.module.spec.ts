import { GamesSharedModule } from './games-shared.module';

describe('GamesSharedModule', () => {
  let gamesSharedModule: GamesSharedModule;

  beforeEach(() => {
    gamesSharedModule = new GamesSharedModule();
  });

  it('should create an instance', () => {
    expect(gamesSharedModule).toBeTruthy();
  });
});
