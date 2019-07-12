import Team from './team';

export default class Game {
  private teams: Team[];

  constructor (...teams: Team[]) {
    this.teams = teams;
  }

  async start() {
    return 0;
  }
}