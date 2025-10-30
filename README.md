# 📱 Portfolio React - Mobile Portfolio App

Aplikasi portofolio pribadi yang dikembangkan menggunakan React Native (Expo) untuk menampilkan profil, keterampilan (skills), dan daftar proyek (projects) secara interaktif pada perangkat mobile.

## 🎓 Kontributor

| Keterangan | Detail |
| :--- | :--- |
| **Nama** | Aurel Septia |
| **NPM** | NPM |

***

## 💡 Fungsi Utama Aplikasi

Proyek ini berfungsi sebagai **kartu nama digital** dan **etalase profesional** dalam format aplikasi mobile. Fungsi utamanya meliputi:

1.  **Profil & Bio (`AboutScreen.jsx`):** Menampilkan informasi dasar mengenai diri Anda, termasuk foto profil, ringkasan biografi, dan daftar keterampilan teknis (misalnya: JavaScript, React, Python, HTML, CSS).
2.  **Daftar Proyek (`ProjectScreen.jsx`):** Menyajikan daftar proyek yang pernah dikerjakan, lengkap dengan gambar pendukung dan deskripsi singkat.
3.  **Informasi Kontak (`ContactScreen.jsx`):** Menyediakan tautan cepat ke platform profesional dan sosial media Anda (GitHub, LinkedIn, Email, dll.).

***

## 🛠️ Teknologi yang Digunakan

Aplikasi ini dibangun di atas ekosistem pengembangan aplikasi mobile berbasis JavaScript:

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Kerangka Utama** | **React Native** | Library utama untuk membangun antarmuka pengguna (UI) mobile. |
| **Platform** | **Expo** | Toolchain untuk memudahkan pengembangan, build, dan deploy aplikasi React Native. |
| **Navigasi** | **React Navigation** | Digunakan untuk mengelola perpindahan antar halaman/screens (About, Projects, Contact). |
| **Bahasa** | **JavaScript (ES6+)** | Bahasa pemrograman utama yang digunakan. |
| **Styling** | **React Native Styling** | Menggunakan stylesheet bawaan React Native (mungkin dikombinasikan dengan NativeWind/Tailwind jika dilihat dari aset ikon). |

***

## 📸 Tampilan Utama Aplikasi

Sertakan minimal 3 screenshot dari halaman utama aplikasi (misalnya: About, Projects, dan Contact) di bawah ini.

### 1. Halaman About
![WhatsApp Image 2025-10-30 at 02 34 34_1342397e](https://github.com/user-attachments/assets/081ab66d-22c5-4004-86ff-1d4483d1e090)

### 2. Halaman Projects
![WhatsApp Image 2025-10-30 at 02 34 36_d9c3ed24](https://github.com/user-attachments/assets/778efd47-32d8-4002-9ba2-c028c530339b)

### 3. Halaman Contact
![WhatsApp Image 2025-10-30 at 02 34 36_ff4235b6](https://github.com/user-attachments/assets/10d7e853-bd29-441c-8be9-c3b1da3eb26b)

***

## ⚙️ Cara Menjalankan Proyek

Ikuti langkah-langkah singkat berikut untuk menjalankan proyek ini di lingkungan pengembangan lokal Anda:

### Prasyarat

Pastikan Anda telah menginstal:
* Node.js dan npm/yarn
* Expo CLI (`npm install -g expo-cli`)

### Langkah-langkah

1.  **Clone Repositori:**
    ```bash
    git clone https://github.com/aurelseptia/myPortfolioApp.git
    cd myPortfolioApp
    ```

2.  **Instal Dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Jalankan Proyek:**
    Gunakan Expo untuk menjalankan aplikasi.
    ```bash
    npx expo start
    ```

4.  **Akses Aplikasi:**
    * Setelah perintah `expo start`, pindai QR code yang muncul menggunakan aplikasi **Expo Go** di perangkat mobile (Android/iOS) Anda.
    * Atau, tekan `w` untuk menjalankannya sebagai aplikasi web.
