// Invent a Word We Need — entry program.
// Writes one coined word plus its one-line definition to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word is the twist: ellipsis + sigh. The setup is someone typing;
// the punch lands in the last words, when the dots just disappear and
// no message ever arrives. "A full minute" names the wait the reader has
// felt. No trailing newline: the gate counts every character, and the
// entry must stay 1-140 chars.
const LINE =
  "ellipsigh — the sigh when someone types for a full minute and the dots just disappear.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
