import Player from './player';

export default class Team {
  private players: Player[];

  constructor (...players: Player[]) {
    this.players = players;
  }
}