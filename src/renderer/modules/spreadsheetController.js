import { processInput } from "../services/formulaService.js";
import { getGridInstance } from "../components/grid/Grid.js";

function toAddress(row, col) {
    const colLetter = String.fromCharCode(65 + col);
    return colLetter + (row + 1);
}

export function handleCellChange(changes) {
    if(!changes) return;

    const grid = getGridInstance();

    changes.forEach(([row, col, oldVal, newVal]) => {
        const address = toAddress(row, col);

        const engineChanges = processInput(address, newVal);

        engineChanges.forEach(change => {
            const { row, col } = change.address;
            const value = change.value;

            grid.setDataAtCell(row, col, value, 'internal');
        });
    });
}