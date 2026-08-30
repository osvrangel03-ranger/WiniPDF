import { launchSumatra, waitForFrame, sendCommand, captureWindowDCToPng, killAndWait } from "./win-automation.ts";
import { cmdId } from "./util.ts";

const exe = process.env.SUMATRA_TEST_EXE!;
const dir = "C:\\Users\\osvra\\Documents\\Ox Alpha\\proyectos\\WiniPDF\\capturas\\ventanas";
const tema = process.argv[2] ?? "carbon";

const capturas: [string, string][] = [
  ["CmdOptions", "opciones"],
  ["CmdAdvancedSettings", "avanzadas"],
  ["CmdChangeTheme", "tema"],
  ["CmdChangeLanguage", "idioma"],
  ["CmdContributeTranslation", "traduccion"],
  ["CmdHelpAbout", "about"],
];

let fallos = 0;
for (const [cmd, nombre] of capturas) {
  const proc = launchSumatra([]);
  const hwnd = await waitForFrame(proc.pid, 15000);
  await Bun.sleep(1200);
  try {
    sendCommand(hwnd, cmdId(cmd));
    await Bun.sleep(900);
    captureWindowDCToPng(hwnd, `${dir}\\${tema}-${nombre}.png`);
  } catch (e) {
    console.error(`${cmd}: ${e}`);
    fallos++;
  }
  await killAndWait(proc);
}
console.log(`banco ventanas ${tema} listo (fallos: ${fallos})`);
