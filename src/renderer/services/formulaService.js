import * as hf from '../adapters/hyperformulaAdapter.js';

export function processInput(address, input) {
    if(input.startWith('=')) {
        hf.setFormula(address, input);
        return hf.getValue(address);
    }

    return input;
}