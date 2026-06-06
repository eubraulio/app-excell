import { setCell } from "../services/gridService.js";
import { processInput } from "../services/formulaService.js";
import { state } from "../state/store.js";

function toAddress(row, col) {
    const colLetter = String.fromCharCode(65 + col);
    return colLetter + (row + 1);
}

export function handleCellChange(changes) {
    if(!changes) return;

    changes.forEach(([row, col, oldVal, newVal]) => {
        const address = toAdress(row, col);

        const value = processInput(address, newVal);

        setCell(state, row, col, {
            raw: newVal,
            value
        });
    });
}