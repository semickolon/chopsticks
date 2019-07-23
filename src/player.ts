import Command, { GameCommand } from './command';

export default class Player {
  constructor (private dead: boolean) {

  }

  static alive() {
    return new Player(false);
  }

  static dead() {
    return new Player(true);
  }

  isDead() {
    return this.dead;
  }

  async requestCommand(): Promise<GameCommand> {
    return Command.none();
  }

  surrender() {
    this.dead = true;
  }
}