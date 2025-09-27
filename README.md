# Keyboard‑Language Fixer (Heb ⇄ Eng)

**Fix text typed on the wrong keyboard layout — Hebrew ⇄ English — with auto‑detection and mixed‑text support.**

---

## ✨ Features

* **Auto detection** of input: English → Hebrew, Hebrew → English, or **Mixed** (per‑word majority logic)
* **Per‑word majority mapping** so punctuation like `' , . ; /` is interpreted correctly inside words (`kve,` → `להקת`)
* **Mixed text** conversion in a single pass (e.g., `"'יקרק ... zv ahr ..."` → `"'here ... זה ..."`)
* **Quick examples** chips + **Clear** button for the input
* **Clean UI** with Material UI (light, calm palette)

---

## 🖼️ Demo

<img width="988" height="660" alt="image" src="https://github.com/user-attachments/assets/26e8127a-64c5-4caf-89db-55c76cd7487b" />


---

## 🚀 Quick start

```bash
# 1) Create the project (Vite React + TS)
npm create vite@latest wrong-layout-fixer -- --template react-ts
cd wrong-layout-fixer

# 2) Install UI deps
npm i @mui/material @mui/icons-material @emotion/react @emotion/styled

# 3) Replace src/ with the files from this repo (see structure below), then run:
npm run dev
```

---


## 🧠 How it works

* **Mapping tables:** `src/lib/mappings.ts` defines a US‑EN ⇄ Hebrew keyboard layout map.
* **Auto mode:** `autoConvert(text)` counts Hebrew/English letters. If both exist → **mixed**.
* **Mixed logic (per‑word):** `convertMixed(text)` splits by whitespace, for each token:

  * More **Latin** letters? Map the **entire word** EN→HE (punctuation like `' , . ; /` is included in mapping context).
  * More **Hebrew** letters? Map the **entire word** HE→EN.

---

## 🔤 Examples

* `AKUO` → `שלום`
* `ישפפט` → `happy`
* Mixed:

  * Input:  `"ן ךםהק נוןךגןמע שפפד  crhtey uyhhpxerhpy!"`
  * Output: `"i love building apps  בריאקט וטייפסקריפט!"`

---

## 🛠️ Customization

### Edit keyboard mapping

Update `src/lib/mappings.ts` to fit your exact keyboard variant (e.g., map additional symbols like `=` if needed).

```ts
export const enToHe: Record<string, string> = {
  // ...
  ",": "ת",
  ".": "ץ",
  ";": "ף",
  "/": ".",
  "'": "׳",
  // add/adjust here
};
```

> `heToEn` is generated as the inverse of `enToHe`.

### Tuning detection

* Prefer per‑word majority (default). You can switch to per‑run logic by replacing `convertMixed` with a run‑based version (kept in comments if you want to experiment).

---

## ♿ Accessibility

* Labels for inputs/buttons
* Keyboard focusable actions
* High‑contrast friendly palette; adjust via `theme.ts` if needed

---

## 📦 Scripts

* `npm run dev` – start Vite dev server
* `npm run build` – production build
* `npm run preview` – preview production build

---

## ☁️ Deploy

### GitHub Pages (static)

1. Add homepage to `package.json` (or deploy via Actions)
2. Use a GH Action like `peaceiris/actions-gh-pages` to publish `dist/`

### Netlify / Vercel

* Connect repo, select build: `npm run build`, output dir: `dist`

> Want a ready‑made **GitHub Action**? Open an issue/ask and we’ll add one.

---

## 🤝 Contributing

PRs are welcome! Ideas: improve mappings for more keyboard variants, add settings UI for mapping overrides, unit tests for edge cases.

---

## 🐞 Known edge cases

* Non‑US English layouts may require mapping tweaks.
* Mixed numerals/emojis are passed through unchanged.

---

## 📄 License

MIT © 2025
