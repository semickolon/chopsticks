import Game from './game';
import Team from './team';
import Player from './player';

test('instantly ends with one team', async () => {
  const player = new Player();
  const team = new Team(player);
  const game = new Game(team);

  const winner = await game.start();

  expect(winner).toBe(0);
});