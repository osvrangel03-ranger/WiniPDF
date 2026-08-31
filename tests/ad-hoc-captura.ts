import { launchSumatra, waitForFrame, captureWindowToPng, killAndWait } from "./win-automation.ts";

const outPath = process.argv[2] ?? "C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-app.png";
const openFile = process.argv[3];

const args = openFile ? [openFile] : [];
const proc = launchSumatra(args);
const hwnd = await waitForFrame(proc.pid, 15000);
if (!hwnd) {
  console.error("no se encontro la ventana");
  process.exit(1);
}
await Bun.sleep(1200);
const ok = captureWindowToPng(hwnd, outPath);
console.log(ok ? `captura: ${outPath}` : "captura fallo");
await killAndWait(proc);
