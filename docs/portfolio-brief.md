# Portfolio brief and action plan

Dokumen ini mencatat konteks dari percakapan dengan pemilik website. Copy yang akan dilihat pengunjung ada di [portfolio-content.md](portfolio-content.md). Istilah proyek ada di [CONTEXT.md](../CONTEXT.md).

Identitas dan riwayat profesional dari materi LinkedIn yang diberikan pemilik dicatat di [profile-facts.md](profile-facts.md). Dokumen tersebut adalah acuan fakta untuk copy publik.

## Tujuan

Memperkenalkan diri dan membangun personal branding untuk audiens internasional. Pengunjung perlu memahami siapa pemilik website, apa yang dikerjakannya, dan apa yang menarik baginya. Peluang kolaborasi boleh muncul sebagai hasil perkenalan; isi website berpusat pada orangnya.

## Keputusan dari pemilik website

| Aspek                 | Keputusan                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Identitas profesional | Web developer lintas industri                                                                   |
| Bahasa publik         | Bahasa Inggris                                                                                  |
| Karakter              | Playful dan eksperimental                                                                       |
| Inspirasi visual      | Pixel art seperti game Nintendo lama                                                            |
| Minat                 | Perkembangan teknologi, khususnya AI dan agentic development                                    |
| Pengalaman            | Frontend, full-stack, Odoo ERP, data engineering, serta aplikasi game teambuilding berbasis web |
| Konteks game          | Kolaborasi antarpemain, tujuan bersama, dan puzzle fisik seperti boardgame                      |
| Kontribusi pribadi    | Pengembangan aplikasi gamenya                                                                   |
| Daftar proyek         | SaifuLog sebagai proyek utama, lalu Polator, Helden Board, dan Helden PER CMS                   |
| Tautan publik         | LinkedIn: https://www.linkedin.com/in/gopla/                                                    |

Target dua minggu dan kapasitas kerja per minggu bukan persyaratan rilis. Pembahasan berikutnya mengoreksi arah sebelumnya menjadi website untuk perkenalan pribadi.

## Dasar fakta dan batas copy

- Pengalaman, minat, tujuan, bahasa, dan gaya berasal dari pernyataan pemilik dalam percakapan dan materi LinkedIn yang ditempelkan langsung olehnya.
- Nama pribadi pada perkenalan, About, footer, dan identitas SEO memakai **Naufal Yudhistira**, sesuai koreksi terbaru pemilik. Branding/logo teks dan favicon tetap **Gopla**; lokasi tetap Malang, Indonesia.
- Pemilik mengonfirmasi **Helden Inc dan Exp Inc. adalah perusahaan yang sama**. Experience publik menggabungkannya menjadi satu entri Frontend Developer, **October 2023–Present**, dengan deskripsi web-based games, microlearning modules, dan popup escape rooms.
- Akses langsung ke LinkedIn gagal, tetapi materi yang diberikan pemilik dapat dipakai sebagai sumber. Riwayat peran, pendidikan, dan batas interpretasinya dicatat di profile-facts.md.
- Label backend, student, dan daydreamer berasal dari website lama. Copy baru memakai identitas web developer yang dinyatakan dalam percakapan sekarang.
- AI dan agentic development adalah minat yang dinyatakan. Klaim keahlian, pemakaian profesional, dan produk AI memerlukan fakta tambahan.
- Deskripsi pengalaman game tetap umum. Pengalaman frontend pada microlearning dan popup escape rooms disebut dalam materi LinkedIn; nama produk/klien, screenshot, teknologi produk, dan angka dampak belum tersedia untuk publikasi.
- GitHub ditemukan dalam portofolio lama. Pemilik kini meminta tautan GitHub https://github.com/gopla di Connect, berdampingan dengan LinkedIn.

## Usulan struktur

Satu halaman dengan navigasi **Start / About / Experience / Projects / Now / Connect**. Projects mengikuti urutan yang ditentukan pemilik, dengan SaifuLog paling menonjol. Experience merangkum peran profesional yang sudah tersedia.

| Bagian     | Peran                                                                                   |
| ---------- | --------------------------------------------------------------------------------------- |
| Start      | Menampilkan nama, identitas web developer, dan intro singkat                            |
| About      | Menceritakan pekerjaan serta konteks pengalaman game teambuilding                       |
| Experience | Menampilkan peran profesional terbaru dan merangkum pengalaman sebelumnya               |
| Projects   | Menampilkan SaifuLog, Polator, Helden Board, dan Helden PER CMS sesuai urutan prioritas |
| Now        | Menampilkan ketertarikan pada perkembangan teknologi, AI, dan agentic development       |
| Connect    | Menghubungkan pengunjung ke profil LinkedIn dan GitHub                                  |

Pemilik kini meminta section Projects di bawah Education. Deskripsi dan stack SaifuLog serta Polator mengacu pada README dan package manifest repo lokal; deskripsi Helden Board mengacu pada domain glossary repo-nya dan Helden PER CMS pada domain glossary serta panduan pengelolaan konten. Link demo SaifuLog dan Polator diberikan langsung oleh pemilik. Tidak ada screenshot, hasil terukur, atau fitur Helden yang diasumsikan. Section memakai panel pixel, palet siang/malam, dan titik singgah karakter yang sama dengan bagian lain.

## Usulan visual dan interaksi

Rincian di bawah adalah rekomendasi implementasi, bukan preferensi tambahan yang sudah dinyatakan pemilik.

- Pixel art orisinal dengan arah 8-bit: avatar atau karakter sederhana, komputer, dan detail lingkungan kecil. Inspirasi konsol lama diterjemahkan menjadi bahasa visual sendiri.
- Palet awal: latar gelap, teks krem, aksen cyan dan oranye. Finalisasi lewat contoh layar.
- Font pixel untuk judul dan aksen; paragraf memakai font yang mudah dibaca.
- Navigasi menggunakan indikator pilihan seperti menu game. Nama bagian tetap jelas dan bisa dibaca sebagai navigasi biasa.
- Animasi idle kecil dan respons hover/focus memberi karakter. Sesuai permintaan terbaru pemilik, load awal memiliki intro game pixel sekitar 4,4 detik: karakter bergerak dan melompat melewati tiga koin dalam satu scene, pengambilan koin sinkron dengan progress, jeda Player ready, lalu transisi halus ke hero. Gerakan memakai easing/linear tanpa steps; bentuk aset tetap pixel. Panel dan tombol Skip berada dalam satu layout responsif agar tidak bertumpuk pada layar pendek. Intro tampil setiap refresh, termasuk refresh pada URL dengan anchor atau posisi scroll yang dipulihkan, bisa dilewati lewat Skip intro/Escape/Tab/scroll, dan dinonaktifkan untuk reduced motion serta kunjungan awal lewat tautan langsung ke bagian halaman. Refresh URL ber-anchor tetap memutar intro; scroll restoration otomatis tidak membatalkannya. Konten dirender langsung sebagai HTML dan tersedia tanpa JavaScript.
- Tampilan mobile, navigasi keyboard, focus yang terlihat, dan reduced motion menjadi bagian dari pemeriksaan desain.

## Action plan

| Urutan | Tindakan                                     | Selesai ketika                                                                                         |
| ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1      | Review copy di portfolio-content.md          | Intro, About, Experience, Now, dan LinkedIn akurat serta terasa mewakili pemilik                       |
| 2      | Buat contoh layar Start dan satu panel About | Palet, font, bentuk panel, serta arah pixel art dapat dinilai dalam satu tampilan                      |
| 3      | Bangun lima bagian halaman                   | Seluruh copy tampil, navigasi menuju bagian yang benar, dan LinkedIn memakai URL yang diberikan        |
| 4      | Tambahkan aset dan interaksi retro           | Aset konsisten, interaksi berfungsi untuk pointer dan keyboard, dan animasi menghormati reduced motion |
| 5      | Periksa hasil                                | Layout mobile/desktop terbaca, link berfungsi, serta build dan lint lulus                              |
| 6      | Siapkan publikasi                            | Domain dipilih, metadata/favicon/preview tersedia, dan alur deploy telah diperiksa                     |

Domain `gopla.me` ditemukan dalam konfigurasi historis; domain untuk rilis baru masih perlu ditentukan. Aset avatar dan tautan tambahan dapat dilengkapi saat mengerjakan tahap yang terkait. Penghargaan LKS dan publikasi kontak tambahan menunggu detail yang cukup; keduanya tidak menghalangi versi pertama.

## Kriteria keberhasilan

Pemilik menyetujui karakter workspace mengikuti scroll melalui About, jalur Experience yang terlihat, Now, dan Connect. Implementasi menggunakan GSAP ScrollTrigger dengan scrub halus dan SVG karakter bersama untuk pose duduk/berdiri. Titik singgah menyediakan ruang sendiri; posisi dihitung ulang ketika Show more/less, font, atau viewport mengubah layout. Mobile memakai karakter lebih kecil. Reduced motion dan fallback tanpa JavaScript mempertahankan ilustrasi statis.

Pengunjung dapat memahami identitas web developer dan minat pemilik dari layar pembuka, menemukan konteks pengalaman melalui About, merasakan karakter playful melalui visual, dan membuka LinkedIn dari Connect. Website tetap nyaman dijelajahi ketika animasi dinonaktifkan.

## Implementasi

Pemilik mengizinkan pembangunan website dan meminta stack yang SEO friendly. Implementasi memakai Astro dengan static rendering: konten tersedia sebagai HTML saat build, dilengkapi canonical URL, metadata sosial, structured data, sitemap, serta robots.txt. Keputusan ini menggantikan starter React/Vite sebelumnya.

Gaya visual diterapkan sebagai pixel art SVG orisinal, font pixel pada aksen dan hero, serta font yang mudah dibaca pada paragraf. Mode siang/malam dan bintang curiosity menjadi interaksi ringan. Experience memakai timeline perusahaan, dengan tiga perusahaan terbaru terlihat dan sisanya dibuka lewat Show more / Show less. Beberapa jabatan di perusahaan yang sama tampil sebagai riwayat jabatan di bawah satu perusahaan, masing-masing dengan tanggalnya. McEasy mencakup Odoo Developer dan Data Engineer. Education memiliki timeline tersendiri yang selalu terlihat. Semua riwayat dirender dalam HTML; tanpa JavaScript, seluruh pengalaman tetap terbaca.

Cara menjalankan, mengubah konten, memeriksa hasil, dan menyiapkan GitHub Pages ada di [README.md](../README.md). Canonical URL sementara memakai alamat repository https://gopla.github.io; domain custom dapat diatur saat publikasi.
