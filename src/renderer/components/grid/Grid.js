import { createGrid } from "../../adapters/handsontableAdapter.js";
import { handleCellChange } from "../../modules/spreadsheetController.js";
import { state } from "../../state/store.js";
import { getActiveSheet } from "../../services/sheetService.js";

let hotInstance = null;

export function initGrid() {
    const container = document.getElementById('grid');
    const sheet = getActiveSheet();

    const data = Array.from({length: 100}, () => Array.from({length: 100}, () => ""));

    Object.entries(sheet.cells).forEach(([address, cell]) => {
        const colLetter = address.match(/[A-Z]+/)[0];
        const rowNumber = parseInt(address.match(/\d+/)[0], 10);

        const row = rowNumber - 1;
        const col = colLetter.charCodeAt(0) - 65;

        data[row][col] = cell.value;
    });

    hotInstance = createGrid(container, data, handleCellChange);
}

export function getGridInstance() {
    return hotInstance;
}