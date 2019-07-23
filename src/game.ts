import Team from './team';

export default class Game {
  private teams: Team[];
  private teamIndex = 0;

  constructor (...teams: Team[]) {
    this.teams = teams;
  }

  async start() {
    while (this.winner === -1) {
      await this.tick();
      this.switchToNextTeam();
    }

    return this.winner;
  }

  async tick() {
    const team = this.currentTeam;
    const command = await team.requestCommand();

    if (command.type == 'surrender') {
      team.surrenderCurrentPlayer();
    }

    team.switchToNextPlayer();
  }

  private get currentTeam() {
    return this.teams[this.teamIndex];
  }

  private switchToNextTeam() {
    this.teamIndex++;
    this.teamIndex %= this.teams.length;
  }

  private get indicesOfAliveTeams() {
    return this.teams.reduce((acc, team, i) => {
      if (!team.isDead())
        acc.push(i);
      return acc;
    }, [] as number[]);
  }

  private get winner() {
    const aliveTeamIndices = this.indicesOfAliveTeams;
    if (aliveTeamIndices.length == 1)
      return aliveTeamIndices[0];
    else
      return -1;
  }
}