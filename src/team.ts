import Player from './player';

export default class Team {
  private players: Player[];
  private playerIndex = 0;

  constructor (...players: Player[]) {
    this.players = players;
  }

  isDead() {
    return this.players.every(player => player.isDead());
  }

  requestCommand() {
    return this.currentPlayer.requestCommand();
  }

  private get currentPlayer() {
    return this.players[this.playerIndex];
  }

  switchToNextPlayer() {
    this.playerIndex++;
    this.playerIndex %= this.players.length;
  }

  surrenderCurrentPlayer() {
    this.currentPlayer.surrender();
  }
}