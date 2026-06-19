import { state } from "../../state/store.js";
import { getCell } from "../../services/gridService.js";
import { getGridInstance } from "../grid/Grid.js";

export function updateFormulaBar() {
    const input = document.getElementById("formula-input");
    const addressBox = document.getElementById("cell-address");

    const cell = getCell(state, state.selection);

    addressBox.textContent = state.selection;
    input.value = cell?.raw ?? "";
}

export function initFormulaBar() {
    const input = document.getElementById("formula-input");

    input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            const grid = getGridInstance();
            
            const match = state.selection.match(/([A-Z]+)(\d+)/);
            const col = match[1].charCodeAt(0) - 65;
            const row = parseInt(match[2], 10) - 1;
            grid.setDataAtCell(row, col, input.value);
        }
    });
}