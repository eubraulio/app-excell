import { state } from "../state/store.js";
import { updateFormulaBar } from "../components/formula-bar/FormulaBar.js";

export function createGrid(container, data, onChange) {
    const hot = new Handsontable(container, {
        data,
        rowHeaders: true,
        colHeaders: true,
        licenseKey: 'non-commercial-and-evaluation',
        afterChange: (changes, source) => {
            if(source === 'internal') return;
            onChange(changes);
        },
        afterSelection: (row, col) => {
            const colLetter = String.fromCharCode(65 + col);
            const address = colLetter + (row + 1);
            state.selection = address;

            console.log("SELECTED:", address);
           
            updateFormulaBar();
        }
        // afterBeginEditing: (row, col) => {
        //     console.log("Editando: ", row, col);
        // }
    });

    hot.addHook('afterBeginEditing', () => {
        setTimeout(() => {
            const editor = hot.getActiveEditor();
            if(!editor) return;

            const textarea = editor.TEXTAREA;

            if(!textarea) return;

            textarea.addEventListener('input', () => {
                const formulaInput = document.getElementById('formula-input');


                formulaInput.value = textarea.value;
            });

        }, 0);
    });
    return hot;
}