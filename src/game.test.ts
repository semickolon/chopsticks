import Game from './game';
import Team from './team';
import Player from './player';
import Command from './command';

beforeEach(() => {
  jest.resetAllMocks();
});

test('instantly ends with one team, only team wins', async () => {
  const game = new Game(makeAliveTeam());

  const winner = await game.start();

  expect(winner).toBe(0);
});

test('instantly ends with one dead team and one alive team, alive team wins', async () => {
  const game = new Game(makeDeadTeam(), makeAliveTeam());

  const winner = await game.start();

  expect(winner).toBe(1);
});

test('instantly ends with three dead teams and one alive team, alive team wins', async () => {
  const game = new Game(makeDeadTeam(), makeDeadTeam(), makeAliveTeam(), makeDeadTeam());

  const winner = await game.start();

  expect(winner).toBe(2);
});

test('ends if only one team is left alive among three initially alive teams', async () => {
  const players = [Player.alive(), Player.alive(), Player.alive()];
  const teams = [new Team(players[0]), new Team(players[1]), new Team(players[2])];
  const game = new Game(...teams);

  jest.spyOn(players[0], 'requestCommand')
    .mockResolvedValueOnce(Command.none())
    .mockResolvedValueOnce(Command.surrender());
  jest.spyOn(players[1], 'requestCommand')
    .mockResolvedValueOnce(Command.none());
  jest.spyOn(players[2], 'requestCommand')
    .mockResolvedValueOnce(Command.surrender());

  const winner = await game.start();

  expect(winner).toBe(1);
});

// Helper Methods and Tests

function makeAliveTeam() {
  return new Team(Player.alive());
}

function makeDeadTeam() {
  return new Team(Player.dead());
}

test('ensure helper method `makeAliveTeam` is correct', async () => {
  const aliveTeam = makeAliveTeam();
  expect(aliveTeam.isDead()).toBe(false);
});

test('ensure helper method `makeDeadTeam` is correct', async () => {
  const deadTeam = makeDeadTeam();
  expect(deadTeam.isDead()).toBe(true);
});