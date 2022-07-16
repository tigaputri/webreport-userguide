---
sidebar_position: 1
---

# Membuat Script Harga

Untuk membuat/mengubah/menghapus halaman list harga produk, bisa dilakukan dengan membuka menu `Pengaturan` → `Script Harga`.

Langkah-langkah untuk membuat halaman list harga produk adalah sebagai berikut:

- Di halaman **Script Harga** klik tombol `Buat Script`

- Akan muncul dialog **Buat Script Baru**.

![Halaman Buat Script Baru](/img/ug/buat-script-harga.png)

Keterangan:

1. Jika dipilih **YA** maka list harga produk akan ditampilkan berdasarkan **Kategori** sesuai pengaturan di menu `Pengaturan` → `Kategori` (**Wajib** melakukan pengaturan Kategori dulu). Jika **TIDAK**, maka list produk akan otomatis ditampilkan berdasarkan tipe produk (`Prepaid`, `Pospaid`, `Unit`, dan `Voucher`) dan dikelompokkan berdasarkan `Provider`-nya.

2. Pilih Jenis Harga yang akan ditampilkan. Pilihanya: `Harga Kelompok` dan `Harga Reseller`

3. Pilih Kelompok/Reseller. List harga produk akan menampilkan harga dari Kelompok/Reseller yang dipilih

4. List harga produk akan ditampilkan dalam bentuk Menu atau Tabel

5. Jika pilih `AKTIF`, maka halaman list harga produk tersebut bisa dibuka. Jika pilih `NON AKTIF`, maka saat halaman list harga produk dibuka akan muncul error `404 Not found`.

- Jika sudah, klik tombol `Generate` untuk membuat halaman list harga produk. Setelah di generate, maka script akan tampil di tabel Script Harga

- Untuk melihat hasil tampilan halaman list harga produk, klik tombol `Lihat halaman` di tabel

![Halaman Buat Script Baru](/img/ug/lihat-halaman-harga.png)

- Untuk menampilkan halaman list harga produk ke web sebagai `iframe`, maka tinggal mengkopi script di kolom `iframe` yang ada di tabel

![Halaman Buat Script Baru](/img/ug/copy-iframe.png)
