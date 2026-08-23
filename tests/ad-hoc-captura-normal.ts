import { waitForFrame, captureWindowToPng } from "./win-automation.ts";

const outPath = process.argv[2] ?? "C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-app.png";
const exe = process.env.SUMATRA_TEST_EXE!;
const proc = Bun.spawn([exe]);
const hwnd = await waitForFrame(proc.pid, 15000);
if (!hwnd) {
  console.error("no se encontro la ventana");
  process.exit(1);
}
await Bun.sleep(1500);
const ok = captureWindowToPng(hwnd, outPath);
console.log(ok ? `captura: ${outPath}` : "captura fallo");
proc.kill();
