import Player from './player';

export default class Team {
  private players: Player[];

  constructor (...players: Player[]) {
    this.players = players;
  }

  isDead() {
    return this.players.every(player => player.isDead());
  }

  requestCommand() {
    return this.players[0].requestCommand();
  }

  surrenderCurrentPlayer() {
    this.players[0].surrender();
  }
}