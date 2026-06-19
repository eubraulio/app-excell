export function addressToCoords(address) {
    const colLetter = address.match(/[A-Z]+/)[0];
    const rowNumber = parseInt(address.match(/\d+/)[0], 10);

    const col = colLetter.charCodeAt(0) - 65;
    const row = rowNumber - 1;

    return { row, col };
}

export function setCell(state, address, data) {
    state.sheet.cells[address] = data;
}

export function getCell(state, address) {
    return state.sheet.cells[address] || { raw: "", value: ""};
}