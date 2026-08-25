import { launchSumatra, waitForFrame, sendCommand, killAndWait } from "./win-automation.ts";
import { captureWindowDCToPng } from "./winapi.ts";
import { cmdId } from "./util.ts";

const outPath = process.argv[2] ?? "C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-menubar.png";

const proc = launchSumatra([]);
const hwnd = await waitForFrame(proc.pid, 15000);
if (!hwnd) {
  console.error("no se encontro la ventana");
  process.exit(1);
}
await Bun.sleep(1000);
sendCommand(hwnd, cmdId("CmdToggleMenuBar"));
await Bun.sleep(800);
const ok = captureWindowDCToPng(hwnd, outPath);
console.log(ok ? `captura: ${outPath}` : "captura fallo");
await killAndWait(proc);
