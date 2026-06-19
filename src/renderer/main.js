import { initGrid } from "./components/grid/Grid.js";
import { initFormulaBar } from "./components/formula-bar/FormulaBar.js";
import { restoreWorkbook } from "./services/storageService.js";
import { restoreEngine } from "./adapters/hyperformulaAdapter.js";

restoreWorkbook();
restoreEngine();
initGrid();
initFormulaBar();