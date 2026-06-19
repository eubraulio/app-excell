import { state } from "../state/store.js";

const STORAGE_KEY = 'excel-app';

export function saveWorkbook() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadWorkbook() {
    const data = localStorage.getItem(STORAGE_KEY);

    if(!data) return null;

    return JSON.parse(data);
}

export function restoreWorkbook() {
    const saved = loadWorkbook();

    if(!saved) return;

    Object.assign(state, saved);
}