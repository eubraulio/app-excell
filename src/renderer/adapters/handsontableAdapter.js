export function createGrid(container, data, onChange) {
    return new Handsontable(container, {
        data,
        rowHeaders: true,
        colHeaders: true,
        licenseKey: 'non-commercial-and-evaluation',
        afterChange: onChange
    })

}