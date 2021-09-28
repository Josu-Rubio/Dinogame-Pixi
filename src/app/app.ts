import PIXI = require('pixi.js');

export class GameApp {
  private app: PIXI.Application;

  static GameOver: boolean = false;
  static PressedSpace: boolean = false;
  static Score: number = 0;

  constructor(parent: HTMLElement, width: number, height: number) {
    this.app = new PIXI.Application({
      width,
      height,
      backgroundColor: 0xffffff,
      antialias: false,
      resolution: 3,
    });

    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    // init Pixi loader
    let loader = new PIXI.Loader();

    // Add user player assets
    console.log('Player to load', playerFrames);
    Object.keys(playerFrames).forEach((key) => {
      loader.add(playerFrames[key]);
    });

    // Load assets
    loader.load(this.onAssetsLoaded.bind(this));

    window.onkeydown = (ev: KeyboardEvent): any => {
        GameApp.PressedSpace = ev.key == " ";
      };
  
    Game.SetupGame();

    // Ticker that runs once per frame
    this.app.ticker.add((delta) => {
      Game.Update(delta);
    });
      
    static SetupGame() {
          // Initial setup of the game state
    }

    static Update(delta: number) {
        // simulate game, update entities and world
        
        // frame ending, PressedSpace back to false
        GameApp.PressedSpace = flase;
        
    }
  }
}
