import Player from './player';

test('ensure Player.alive() creates alive player', () => {
  expect(Player.alive().isDead()).toBe(false);
});

test('ensure Player.dead() creates dead player', () => {
  expect(Player.dead().isDead()).toBe(true);
});

test('surrender makes player dead', () => {
  const player = Player.alive();
  player.surrender();
  expect(player.isDead()).toBe(true);
});