import { addressToCoords } from '../utils/cellUtils.js';
import { state } from '../state/store.js';

const hf = HyperFormula.buildEmpty({ licenseKey: 'gpl-v3' });

const sheetName = 'Sheet1';
hf.addSheet(sheetName);
const sheetId = hf.getSheetId(sheetName);

export function getSheetId() {
    return sheetId;
}

export function setCell(address, input) {
    const {row, col} = addressToCoords(address);

    const changes = hf.setCellContents(
        { sheet: sheetId, row, col},
        input
    );

    return changes;
}

export function getCellValue(address) {
    const { row, col } = addressToCoords(address);

    return hf.getCellValue({
        sheet: sheetId,
        row, 
        col
    });
}

export function restoreEngine() {
    state.sheets.forEach(sheet => {
        Object.entries(sheet.cells).forEach(([address, cell]) => {
            if(!cell.raw) return;
            setCell(address, cell.raw);
        });
    });
}