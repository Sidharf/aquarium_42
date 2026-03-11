/**
 * Mock/static data for aquarium features (localhost benchmark — no backend).
 */

export const MOCK_TANK = {
  title: "Aquarium",
  waterLevel: 1,
} as const;

export const MOCK_FILTER = {
  label: "Filter",
  scumAccumulationSeconds: 10,
} as const;

export const MOCK_FISH = [
  { id: "blue", name: "Blue Fish", color: "#1e3a5f", finColor: "#f1c40f" },
  { id: "orange", name: "Clownfish", color: "#e67e22", stripeColor: "#fff" },
] as const;

export const MOCK_SHIPWRECK = {
  title: "seabench",
  position: [ -2, -1.2, 0 ] as [ number, number, number ],
} as const;

export const MOCK_PEBBLES = {
  count: 24,
  colors: [ "#d4a574", "#c4956a", "#b88660", "#e8b88a" ],
} as const;

export const MOCK_PLANT = {
  leafCount: 12,
  swaySpeed: 0.8,
} as const;
