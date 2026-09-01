// Banco de pruebas visual WiniPDF: lanza la app en cada tema, captura y
// analiza pixeles para detectar las cajas blancas (carbon) y negras (amber).
// Uso: bun tests/banco-pruebas.ts
import { waitForFrame, killAndWait } from "./win-automation.ts";
import { captureWindowDCToPng } from "./winapi.ts";

const exe = process.env.SUMATRA_TEST_EXE;
if (!exe) {
  console.error("define SUMATRA_TEST_EXE");
  process.exit(1);
}

const temas = [
  { nombre: "WiniCarbon (Tema Oscuro)", esperado: "oscuro" },
  { nombre: "WiniAmber (Tema Claro)", esperado: "claro" },
];

const resultados: string[] = [];
let fallos = 0;

for (const t of temas) {
  const cfg = "out\\rel64\\SumatraPDF-settings.txt";
  const ps = Bun.spawnSync([
    "powershell", "-NoProfile", "-Command",
    `$c=[IO.File]::ReadAllText('${cfg}',[Text.Encoding]::UTF8); $c2=$c -replace '(?m)^Theme = .*', 'Theme = ${t.nombre}'; [IO.File]::WriteAllText('${cfg}',$c2,[Text.Encoding]::UTF8); echo ok`,
  ]);
  if (ps.exitCode !== 0) {
    console.error("no se pudo parchar settings (existe " + cfg + "?)");
    process.exit(1);
  }

  const proc = Bun.spawn([exe]);
  const hwnd = await waitForFrame(proc.pid, 15000);
  if (!hwnd) {
    console.error(`[${t.nombre}] ventana no aparecio`);
    fallos++;
    resultados.push(`FAIL ${t.nombre}: sin ventana`);
    continue;
  }
  await Bun.sleep(1800);
  const png = "C:\\Users\\osvra\\Documents\\Osvaldo Docs\\Proyectos\\WiniPDF\\WiniPDF\\WiniPDF\\capturas\\banco-" + (t.esperado === "oscuro" ? "carbon" : "amber") + ".png";
  captureWindowDCToPng(hwnd, png);
  await killAndWait(proc);

  const analisis = Bun.spawnSync([
    "powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File",
    "C:\\Users\\osvra\\Documents\\Osvaldo Docs\\Proyectos\\WiniPDF\\herramientas\\analizar-captura.ps1", "-Ruta", png,
  ]);
  const salida = analisis.stdout.toString().trim();
  console.log(`[${t.nombre}] esperado=${t.esperado}`);
  console.log(salida);
  if (salida.includes("FALLO")) fallos++;
  resultados.push(`${salida.includes("FALLO") ? "FAIL" : "PASS"} ${t.nombre}`);
}

console.log("=== RESUMEN ===");
for (const r of resultados) console.log(r);
process.exit(fallos > 0 ? 1 : 0);
