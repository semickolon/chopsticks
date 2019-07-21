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
}