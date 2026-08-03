// Mã hoá data.js -> data.enc bằng mật khẩu (AES-GCM + PBKDF2).
// Dùng: PASSWORD='mật-khẩu' node encrypt-data.mjs
// Sinh data.enc = base64(salt).base64(iv).base64(ciphertext).
// Cổng (index.html) giải mã cùng tham số trong trình duyệt.
import { readFileSync, writeFileSync } from "node:fs";

const pw = process.env.PASSWORD;
if (!pw) { console.error("Thiếu PASSWORD. Ví dụ: PASSWORD='mat-khau-cua-ban' node encrypt-data.mjs"); process.exit(1); }

// đọc window.DEMO_DATA từ data.js
const src = readFileSync("data.js", "utf8");
const json = src.slice(src.indexOf("=") + 1).trim().replace(/;\s*$/, "");
const data = JSON.parse(json);
const plaintext = new TextEncoder().encode(JSON.stringify(data));

const subtle = globalThis.crypto.subtle;
const salt = globalThis.crypto.getRandomValues(new Uint8Array(16));
const iv = globalThis.crypto.getRandomValues(new Uint8Array(12));
const km = await subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
const key = await subtle.deriveKey(
  { name: "PBKDF2", salt, iterations: 150000, hash: "SHA-256" },
  km, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
const ct = new Uint8Array(await subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext));

const b64 = (u8) => Buffer.from(u8).toString("base64");
writeFileSync("data.enc", [b64(salt), b64(iv), b64(ct)].join("."));
console.log("Đã ghi data.enc (", ct.length, "bytes mã hoá ) từ", Object.keys(data).length, "khối dữ liệu.");
