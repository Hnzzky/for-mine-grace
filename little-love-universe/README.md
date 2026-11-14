# A Little Love Universe — For Honey ♡

Website hadiah romantis sederhana untuk Honey. Dibuat menggunakan HTML, CSS, dan JavaScript tanpa framework atau database.

## 1. Menjalankan website di Windows

1. Ekstrak ZIP ini.
2. Buka folder `little-love-universe`.
3. Klik dua kali `index.html` untuk melihat website di browser.
4. Untuk pengalaman pengembangan yang lebih nyaman, buka folder ini di Visual Studio Code dan gunakan ekstensi **Live Server** (klik kanan `index.html` → Open with Live Server).

## 2. Personalisasi foto

Masukkan tiga foto kalian ke folder `assets/photos/` dengan nama persis:
- `memory-1.jpg`
- `memory-2.jpg`
- `memory-3.jpg`

Jika foto kamu berekstensi PNG, ubah nama file pada `index.html` dari `.jpg` menjadi `.png`. Kamu juga bisa mengganti teks judul dan keterangan foto langsung di bagian `Our memories` pada `index.html`.

Gunakan foto yang memang boleh dibagikan dan pastikan ukuran file tidak terlalu besar (idealnya di bawah 1–2 MB per foto).

## 3. Menambahkan musik

1. Siapkan file audio MP3 yang kamu punya hak untuk menggunakannya.
2. Simpan di `assets/music/` dengan nama `our-song.mp3`.
3. Tombol **Play our song** akan memutar dan menjeda musik. Browser biasanya mensyaratkan klik pengguna sebelum audio boleh diputar.

Jika nama file berbeda, ubah atribut `src` pada elemen `<audio>` di `index.html`.

## 4. Mengubah isi surat dan timeline

- Surat: cari bagian `id="letterContent"` di `index.html`, lalu ubah paragrafnya dengan kata-katamu sendiri.
- Timeline: cari bagian `id="timeline"` dan edit tanggal, judul, serta deskripsi.
- Tanggal jadian: tanggal penghitung hari berada di `script.js`, pada baris `new Date(2026, 10, 12)`. Urutan parameternya adalah tahun, bulan (0 = Januari), tanggal. Untuk 12 November 2026, angka `10` berarti November.

## 5. Publikasi gratis dengan GitHub Pages

1. Buat repository baru di GitHub, misalnya `little-love-universe`.
2. Unggah seluruh isi folder ini (pastikan `index.html` berada di root repository, bukan di dalam folder tambahan).
3. Di repository GitHub, buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses deployment selesai. GitHub akan menampilkan alamat website di halaman Pages.

Website dapat dibuka melalui tautan GitHub Pages tersebut. Repository publik berarti file HTML, foto, dan audio dapat diakses orang lain; jangan masukkan informasi pribadi atau foto yang tidak ingin dibagikan.

## Struktur folder

```text
little-love-universe/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── photos/
    │   ├── memory-1.jpg
    │   ├── memory-2.jpg
    │   └── memory-3.jpg
    └── music/
        └── our-song.mp3
```

Folder foto dan musik disiapkan sebagai tempat file milikmu. Gambar dan audio tidak disertakan dalam paket.


## 6. Mengubah password halaman pembuka

Password saat ini adalah password yang kamu tentukan. Untuk menggantinya, buka `script.js` dan ubah nilai `SITE_PASSWORD` di bagian paling atas.

**Catatan privasi:** password ini hanya gerbang pembuka di sisi browser (client-side), bukan sistem keamanan sungguhan. Orang yang memahami kode website dapat melihat password di JavaScript. Jangan gunakan untuk melindungi data pribadi atau informasi sensitif.
