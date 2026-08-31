import { launchSumatra, waitForFrame, sendCommand, killAndWait } from "./win-automation.ts";
import { captureWindowDCToPng, postMessage } from "./winapi.ts";
import { cmdId } from "./util.ts";

const exe = process.env.SUMATRA_TEST_EXE;

const proc = Bun.spawn([exe]);
const hwnd = await waitForFrame(proc.pid, 15000);
await Bun.sleep(2000);
sendCommand(hwnd, cmdId("CmdToggleMenuBar"));
await Bun.sleep(800);
captureWindowDCToPng(hwnd, "C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-menu-es.png");
sendCommand(hwnd, cmdId("CmdToggleMenuBar"));
sendCommand(hwnd, cmdId("CmdCloseAllTabs"));
await Bun.sleep(1200);
captureWindowDCToPng(hwnd, "C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-home-final.png");
console.log("capturas listas");
postMessage(hwnd, 0x0010, 0, 0);
