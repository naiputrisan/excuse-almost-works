// The Excuse That Almost Works — entry for
// u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// Writes the single excuse line to /output/entry.txt.
// Gate: UTF-8 text, 1-140 chars, at most 20 words.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Council dug up my street this morning and cut the broadband, hotspot keeps dropping every few minutes.";

const words = EXCUSE.split(/\s+/).filter(Boolean).length;
if (EXCUSE.length < 1 || EXCUSE.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${EXCUSE.length}`);
}
if (EXCUSE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (words > 20) {
  throw new Error(`entry must be at most 20 words, got ${words}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`wrote /output/entry.txt (${EXCUSE.length} chars, ${words} words)`);
