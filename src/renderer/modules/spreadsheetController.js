import { processInput } from "../services/formulaService.js";
import { setCell } from "../services/gridService.js";
import { getGridInstance } from "../components/grid/Grid.js";
import { updateFormulaBar } from "../components/formula-bar/FormulaBar.js";
import { saveWorkbook } from "../services/storageService.js";
import { getActiveSheet } from "../services/sheetService.js";

function toAddress(row, col) {
    const colLetter = String.fromCharCode(65 + col);
    return colLetter + (row + 1);
}

export function handleCellChange(changes) {
    if(!changes) return;

    const grid = getGridInstance();

    changes.forEach(([row, col, oldVal, newVal]) => {
        const address = toAddress(row, col);

        setCell(address, {
            raw: newVal,
            value: null
        });

        updateFormulaBar();

        const engineChanges = processInput(address, newVal);

        engineChanges.forEach(change => {
            console.log(change);

            const { row, col } = change.address;
            const value = change.newValue;

            const addr = toAddress(row, col);

            const sheet = getActiveSheet();

            const existing = sheet.cells[addr] || {raw: ""};

            setCell(addr, {
                raw: existing.raw,
                value
            });
            grid.setDataAtCell(row, col, value, 'internal');
        });
    });
    updateFormulaBar();
    saveWorkbook();
}