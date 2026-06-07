import { addressToCoords } from '../utils/cellUtils.js';

const hf = HyperFormula.buildEmpty({ licenseKey: 'gpl-v3' });

const sheetName = 'Sheet1';
hf.addSheet(sheetName);
const sheetId = hf.getSheetId(sheetName);

export function getSheetId() {
    return sheetId;
}

export function setCell(address, input) {
    const {row, col} = addressToCoords(address);

    hf.setCellContents(
        { sheet: sheetId, row, col},
        input
    );
}

export function getCellValue(address) {
    const { row, col } = addressToCoords(address);

    return hf.getCellValue({
        sheet: sheetId,
        row, 
        col
    });
}