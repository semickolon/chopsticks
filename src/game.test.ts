import Game from './game';
import Team from './team';
import Player from './player';

test('instantly ends with one team, only team wins', async () => {
  const game = new Game(createAliveTeam());

  const winner = await game.start();

  expect(winner).toBe(0);
});

test('instantly ends with one dead team and one alive team, alive team wins', async () => {
  const game = new Game(createDeadTeam(), createAliveTeam());

  const winner = await game.start();

  expect(winner).toBe(1);
});

test('instantly ends with three dead teams and one alive team, alive team wins', async () => {
  const game = new Game(createDeadTeam(), createDeadTeam(), createAliveTeam(), createDeadTeam());

  const winner = await game.start();

  expect(winner).toBe(2);
});

// Helper Methods and Tests

function createAliveTeam() {
  return new Team(Player.alive());
}

function createDeadTeam() {
  return new Team(Player.dead());
}

test('ensure helper method `createAliveTeam` is correct', async () => {
  const aliveTeam = createAliveTeam();
  expect(aliveTeam.isDead()).toBe(false);
});

test('ensure helper method `createDeadTeam` is correct', async () => {
  const deadTeam = createDeadTeam();
  expect(deadTeam.isDead()).toBe(true);
});