const hf = HyperFormula.buildEmpty();

export function setFormula(address, formula) {
    hf.setCellContents(address, formula);
}

export function getValue(address) {
    return hf.getCellValue(address);
}