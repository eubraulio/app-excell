export function createGrid(container, data, onChange) {
    return new Handsontable(container, {
        data,
        rowHeaders: true,
        colHeaders: true,
        licenseKey: 'non-commercial-and-evaluation',
        afterChange: (changes, source) => {
            if(source === 'internal') return;
            onChange(changes);
        }
    });
}