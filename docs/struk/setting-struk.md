---
sidebar_position: 2
---

# Pengaturan Struk

Sebelum menggunakan fitur Cetak Struk di Web Report TigaPutri, administrator perlu mengatur pembacaan dari teks sehingga bisa ditampilkan dalam format struk.

Dalam pengaturan struk, data yang digunakan adalah data dari kolom `Keterangan` di halaman transaksi di Software TigaPutri.

Langkah-langkah untuk setting struk sebagai berikut:

1. Login sebagai administrator

2. Buka menu `Struk`

3. Klik tombol `Tambah` maka halaman `Struk Builder` akan terbuka.

   ![Halaman struk builder](/img/ug/struk-builder-1.png)

4. Kemudian, pilih produk. Maka di samping kanan akan muncul daftar katakunci yang tersedia. Setiap produk memiliki katakunci yang berbeda-beda. Misalnya produk yang dipilih adalah `PLN Token`.

   ![Pilih produk struk](/img/ug/struk-builder-2.png)

5. Selanjutnya, buka halaman Transaksi di software TigaPutri. Pilih salah satu transaksi sukses sebagai sampel dan copy nilai di kolom keterangan pada transaksi tersebut kemudian paste ke **Sample Keterangan Transaksi** di Struk Builder tadi. **CATATAN**: Pastikan saat menyetting penangkapan jawaban Sukses dari supplier, juga menangkap kata kunci `keterangan`

6. Lakukan penangkapan katakunci di **Format Parsing Struk**, caranya seperti saat menangkap jawaban supplier menggunakan regex di software TigaPutri. Contohnya:
Sample keterangan:

    TOKEN:2032-0893-4238-6493-8966/NAMA:YOSIAS-SERMUMES/S1:R1/DAYA:1300/KWH:13.5
Format parsing struk:

    TOKEN:[token]NAMA:[nama]S1:[tarif]DAYA:[daya]KWH:[kwh]

7. Jika formatnya benar, maka akan tampil di **Parameter yang berhasil ditangkap:**

   ![Contoh hasil pembacaan](/img/ug/struk-builder-3.png)

8. Setting prioritasnya, jika sudah kemudian klik tombol `Simpan`

9. Lakukan hal yang sama untuk produk struk lainnya. Setiap produk struk boleh memiliki lebih dari satu pengaturan.
