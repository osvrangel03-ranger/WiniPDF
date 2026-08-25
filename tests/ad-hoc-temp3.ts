import { launchSumatra, waitForFrame, sendCommand, killAndWait } from "./win-automation.ts";
import { captureWindowDCToPng } from "./winapi.ts";
import { cmdId } from "./util.ts";

const exe = process.env.SUMATRA_TEST_EXE;

const proc = launchSumatra([]);
const hwnd = await waitForFrame(proc.pid, 15000);
await Bun.sleep(1200);
sendCommand(hwnd, cmdId("CmdCloseAllTabs"));
await Bun.sleep(1200);
const ok = captureWindowDCToPng(hwnd, "C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-home-historial.png");
console.log(ok ? "captura home+historial ok" : "fallo");
await killAndWait(proc);
