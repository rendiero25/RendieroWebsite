# Background Kartu Foto Profil — Home

## Keputusan

- **Opsi:** B — solid slate sedikit lebih terang dari halaman
- **Pendekatan:** 1 — token desain global, tanpa border/gradient
- **Warna:** `#2F3442` sebagai `--color-elevated`

## Alasan

- Kontras lembut dengan `--color-background` (`#282C38`) tanpa terasa “kotak hitam”
- Konsisten dengan sistem token di `src/index.css`
- Foto `pic.png` tetap fokus utama; background hanya membingkai

## Perubahan

| File | Perubahan |
|------|-----------|
| `src/index.css` | Tambah `--color-elevated: #2F3442` |
| `src/pages/Index.jsx` | Kartu foto profil: `bg-black` → `bg-elevated` |

## Di luar scope

- Border, gradient, atau overlay pada foto
- Perubahan background kartu di halaman lain
