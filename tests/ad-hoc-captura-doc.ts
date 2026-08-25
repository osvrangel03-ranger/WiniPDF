import { launchSumatra, waitForFrame, killAndWait } from './win-automation.ts';
import { captureWindowDCToPng } from './winapi.ts';
const proc = launchSumatra(['C:\\Users\\osvra\\Downloads\\LOTERIA 54 MEDIANOS.pdf']);
const hwnd = await waitForFrame(proc.pid, 15000);
await Bun.sleep(2500);
const ok = captureWindowDCToPng(hwnd, 'C:\\Users\\osvra\\Documents\\Default Project\\winipdf\\diseno\\captura-con-doc.png');
console.log(ok ? 'captura con doc ok' : 'fallo');
await killAndWait(proc);
