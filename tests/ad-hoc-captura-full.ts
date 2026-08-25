import { launchSumatra, waitForFrame, killAndWait } from "./win-automation.ts";
import { captureWindowDCToPng } from "./winapi.ts";

const outPath = process.argv[2] ?? "C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-full.png";

const proc = launchSumatra([]);
const hwnd = await waitForFrame(proc.pid, 15000);
if (!hwnd) {
  console.error("no se encontro la ventana");
  process.exit(1);
}
await Bun.sleep(1500);
const ok = captureWindowDCToPng(hwnd, outPath);
console.log(ok ? `captura full: ${outPath}` : "captura fallo");
await killAndWait(proc);
