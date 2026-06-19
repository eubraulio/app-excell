import { getActiveSheet } from "./sheetService.js";

export function addressToCoords(address) {
    const colLetter = address.match(/[A-Z]+/)[0];
    const rowNumber = parseInt(address.match(/\d+/)[0], 10);

    const col = colLetter.charCodeAt(0) - 65;
    const row = rowNumber - 1;

    return { row, col };
}

export function setCell(address, data) {
    const sheet = getActiveSheet();
    sheet.cells[address] = data;
}

export function getCell(address) {
    const sheet = getActiveSheet();
    return sheet.cells[address] || {raw: "", value: ""};
}