import { waitForFrame } from "./win-automation.ts";
import { captureWindowDCToPng, postMessage } from "./winapi.ts";

const exe = process.env.SUMATRA_TEST_EXE;

async function gracefulClose(pid: number, hwnd: number) {
    postMessage(hwnd, 0x0010, 0, 0);
    for (let i = 0; i < 40; i++) {
        await Bun.sleep(250);
        const p = Bun.spawnSync(["powershell", "-NoProfile", "-Command", `if (Get-Process -Id ${pid} -ErrorAction SilentlyContinue) { 'alive' } else { 'gone' }`]);
        if (p.stdout.toString().trim() === "gone") return;
    }
}

const proc = Bun.spawn([exe, "C:\\Users\\osvra\\Downloads\\LOTERIA 54 MEDIANOS.pdf"]);
const hwnd = await waitForFrame(proc.pid, 15000);
await Bun.sleep(2500);
await gracefulClose(proc.pid, hwnd);
console.log("paso 1 listo (historial guardado)");

const proc2 = Bun.spawn([exe]);
const hwnd2 = await waitForFrame(proc2.pid, 15000);
await Bun.sleep(1500);
const ok = captureWindowDCToPng(hwnd2, "C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-historial2.png");
console.log(ok ? "captura con historial ok" : "fallo captura");
await gracefulClose(proc2.pid, hwnd2);
