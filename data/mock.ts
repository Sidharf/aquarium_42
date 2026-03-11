/**
 * Mock data for aquarium_42 — localhost only, no backend.
 */

export const MOCK_TANK = {
  width: 12,
  height: 8,
  depth: 6,
  waterLevel: 6.5,
};

export const MOCK_FILTER = {
  isOn: false,
  scumAccumulationSeconds: 10,
};

export const MOCK_ORANGE_FISH = {
  count: 1,
  position: { x: 4, y: -2, z: 2 },
  swimSpeed: 0.5,
};

export const MOCK_BLUE_FISH = {
  position: { x: 0, y: 0, z: 0 },
  clickWriggleDuration: 3,
  eyesWiden: true,
};

export const MOCK_SHIPWRECK = {
  title: 'seabench',
  position: { x: -4, y: -3, z: -1 },
  scale: 1.2,
};

export const MOCK_WATER = {
  shimmerSpeed: 1.2,
  bubbleCount: 80,
  waveAmplitude: 0.1,
};

export const MOCK_PEBBLES = {
  count: 25,
  color: '#c4a574',
  spread: { x: 10, z: 4 },
};

export const MOCK_PLANT = {
  position: { x: 4, y: -2.8, z: 2.5 },
  swaySpeed: 0.8,
  elasticSwing: true,
};
