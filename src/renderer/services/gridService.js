export function setCell(state, row, col, value) {
    if(!state.sheet.cells[row]) {
        state.sheet.cells[row] = {}
    }
    state.sheet.cells[row][col] = value;
}