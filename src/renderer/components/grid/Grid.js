import { createGrid } from "../../adapters/handsontableAdapter.js";
import { handleCellChange } from "../../modules/spreadsheetController.js";

let hotInstance = null;

export function initGrid() {
    const container = document.getElementById('grid');

    const data = Array.from({length: 20}, () =>
        Array.from({length: 10}, () => '')
    );
    hotInstance = createGrid(container, data, handleCellChange);
}

export function getGridInstance() {
    return hotInstance;
}