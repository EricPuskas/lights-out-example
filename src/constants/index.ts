/**
 * Defines the default chance of a cell being lit
 */
export const LIT_CHANCE = 0.25;

/**
 * Defines the default grid size
 */
export const DEFAULT_GRID_SIZE = 5;

/**
 * Defines the 3x3 solution pattern
 */
export const PATTERN_3X3 = {
  "011": "010",
  101: "100",
  110: "001"
};

/**
 * Defines the 5x5 solution pattern
 */
export const PATTERN_5X5 = {
  "00111": "00010",
  "01010": "01001",
  "01101": "10000",
  10001: "00011",
  10110: "00001",
  11011: "00100",
  11100: "01000"
};

/**
 * Defines the 9x9 solution pattern
 */
export const PATTERN_9X9 = {
  "000000000": "011111110",
  101010101: "100000000"
};
