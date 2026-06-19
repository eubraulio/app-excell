import { state } from "../state/store.js";

export function getActiveSheet() {
    return state.sheets[state.activeSheet];
}