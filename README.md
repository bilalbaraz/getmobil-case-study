# GetMobil Mobil Uygulama

## Proje Hakkında

GetMobil, kullanıcıların elektronik cihazları (özellikle cep telefonları) inceleyebileceği, karşılaştırabileceği ve satın alabileceği bir mobil uygulamadır.

## Teknoloji Yığını

- **React Native (0.78.0)**: Çapraz platform mobil uygulama geliştirme için kullanılmıştır.
- **React (19.0.0)**: UI bileşenlerinin yönetimi için kullanılmıştır.
- **React Navigation**: Uygulama içi navigasyon için kullanılmıştır.
- **React Native Paper**: Material Design tabanlı UI bileşenleri için kullanılmıştır.
- **React Native Fast Image**: Performans odaklı resim yükleme için kullanılmıştır.
- **Firebase**: Backend servisleri için kullanılmıştır.

## Mimari

Proje, Clean Architecture prensiplerine uygun olarak tasarlanmıştır ve şu katmanları içerir:

- **Presentation**: UI bileşenleri, ekranlar ve görsel elementler
- **Data**: Veri erişimi, API çağrıları ve yerel depolama
- **Domain**: İş mantığı ve varlıklar

## Özellikler

- Ürün listesi görüntüleme
- Kampanyaları görüntüleme
- Ürün detaylarını inceleme
- Arama yapma
- Kategori bazlı filtreleme

## Kurulum

### Gereksinimler

- Node.js (>= 18.0.0)
- npm veya yarn
- React Native CLI
- Android Studio (Android geliştirme için)
- Xcode (iOS geliştirme için, sadece macOS)

### Adımlar

1. Projeyi klonlayın:
   ```
   git clone https://github.com/bilalbaraz/getmobil-case-study.git
   cd getmobil-case-study
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   # veya
   yarn install
   ```

3. iOS için (sadece macOS):
   ```
   cd ios && pod install && cd ..
   ```

4. Uygulamayı çalıştırın:
   ```
   # Android için
   npm run android
   # veya
   yarn android

   # iOS için
   npm run ios
   # veya
   yarn ios
   ```

## Geliştirme

### Kod Stili

Proje, ESLint ve Prettier ile kod stilini korumaktadır. Kodunuzu formatlamak için:

```
npm run lint
# veya
yarn lint
```

### Klasör Yapısı

```
src/
  ├── assets/         # Resimler, fontlar ve diğer statik dosyalar
  ├── constants/      # Sabitler ve yapılandırma dosyaları
  ├── data/           # Veri katmanı
  │   ├── models/     # Veri modelleri
  │   └── repositories/ # Repository implementasyonları
  ├── presentation/   # Sunum katmanı
  │   ├── components/ # Yeniden kullanılabilir UI bileşenleri
  │   ├── screens/    # Ekranlar
  │   └── types/      # TypeScript tipleri ve arayüzleri
  └── App.tsx         # Ana uygulama bileşeni
```

## Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## İletişim

Proje Sahibi: [Bilal Baraz](mailto:bilalbaraz@windowslive.com)

Proje Linki: [https://github.com/bilalbaraz/getmobil-case-study](https://github.com/bilalbaraz/getmobil-case-study)