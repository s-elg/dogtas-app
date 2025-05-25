# React Native Mobilya Ürünleri Uygulaması

Bu proje, Expo ve React Native kullanılarak geliştirilmiş bir mobilya ürünleri uygulamasıdır. Kullanıcılar uygulamaya giriş yapabilir, kayıt olabilir ve ürün kategorileri arasında gezinebilirler.

---

## Özellikler

- Kullanıcı Girişi (Login) ve Kayıt (Sign Up) sayfaları
- Ürün kategorileri için alt sekmeler (Koltuklar, Köşe Takımları, Berjerler)
- Tab navigasyon ve stack navigasyon entegrasyonu
- Uygulama her açıldığında kullanıcı verilerini tutan JSON dosyasının sıfırlanması

---

## Kullanılan Teknolojiler

- React Native
- Expo
- React Navigation (Bottom Tabs ve Native Stack)
- react-native-vector-icons (Material Icons)
- expo-file-system (Dosya işlemleri için)

---

## Kurulum ve Çalıştırma

1. Depoyu klonlayın veya indirin:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Gerekli paketleri yükleyin:

    ```bash
   npm install
   ```
   

4. Expo uygulamasını başlatın:

   ```bash
   expo start
   ```

5. Uygulamayı fiziksel cihazda çalıştırın.

---

## Dosya Yapısı

- `/pages`
  - `/products`
    - `Bergere.js` — Berjer ürünleri sayfası
    - `CornerSeat.js` — Köşe takımları sayfası
    - `Sofa.js` — Koltuklar sayfası
  - `Login.js` — Giriş ekranı
  - `SignUp.js` — Kayıt ekranı
  - `MemberInfo.js` — Üye bilgileri ekranı

---

## Açıklamalar

- Uygulama açıldığında `user_data.json` dosyası sıfırlanır (`clearJsonFile` fonksiyonu ile).
- Navigasyon yapısı `Stack Navigator` ve `Bottom Tab Navigator` birleşiminden oluşmaktadır.
- Tab bar ikonları Material Icons üzerinden sağlanmaktadır.

---

## İletişim

Herhangi bir sorun veya öneri için lütfen iletişime geçin.

---

**Not:** Bu proje Expo CLI ile geliştirilmiştir.
