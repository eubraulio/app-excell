import { setCell, getCellValue } from '../adapters/hyperformulaAdapter.js';

export function processInput(address, input) {
  setCell(address, input);
  return getCellValue(address);
}