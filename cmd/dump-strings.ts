import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const translationPattern = /\b_TR[ANW]?\("(.*?)"\)/g;
const roots = ["src"];
const out = new Set<string>();

function walk(dir: string) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === "obj" || name.startsWith("ext") || name === "out") continue;
      walk(p);
    } else if (name.endsWith(".cpp") || name.endsWith(".h")) {
      const src = readFileSync(p, "utf-8");
      for (const m of src.matchAll(translationPattern)) {
        out.add(m[1]);
      }
    }
  }
}

walk("src");
const extra = ["File", "View", "Go To", "Zoom", "Selection", "Read Aloud", "Favorites", "Settings", "Help"];
for (const e of extra) out.add(e);
const arr = [...out].sort();
console.log("total strings: " + arr.length);
console.log(arr.join("\n"));
