import { setCell } from '../adapters/hyperformulaAdapter.js';

export function processInput(address, input) {
  return setCell(address, input);
}