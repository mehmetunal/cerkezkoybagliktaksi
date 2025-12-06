# Çerkezköy Taksi Web Sitesi

Çerkezköy ve Kapaklı bölgelerinde hizmet veren taksi firması için SEO uyumlu static HTML web sitesi.

## 📁 Proje Yapısı

```
taksi_website/
├── html/              # HTML sayfaları
│   ├── index.html
│   ├── hakkimizda.html
│   ├── hizmetlerimiz.html
│   ├── fiyat-listesi.html
│   ├── rezervasyon.html
│   ├── iletisim.html
│   ├── blog.html
│   ├── sss.html
│   ├── gizlilik-politikasi.html
│   ├── kullanim-kosullari.html
│   ├── sitemap.xml
│   └── robots.txt
├── css/               # CSS dosyaları
│   └── style.css
├── js/                # JavaScript dosyaları
│   └── main.js
├── data/              # Veri dosyaları (.md formatında)
│   ├── hizmetler.md
│   ├── fiyatlar.md
│   ├── blog.md
│   ├── sss.md
│   ├── iletisim.md
│   └── hakkimizda.md
└── images/            # Görseller (boş - görseller eklenecek)
```

## 🚀 Özellikler

### SEO Optimizasyonları
- ✅ Meta etiketleri (Title, Description, Keywords)
- ✅ Open Graph etiketleri
- ✅ Schema markup (LocalBusiness, Service, FAQPage)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ SEO dostu URL yapısı
- ✅ Breadcrumb navigasyon
- ✅ Semantic HTML5

### Tasarım
- ✅ Bootstrap 5 framework
- ✅ Responsive tasarım (Mobile-First)
- ✅ Modern ve kullanıcı dostu arayüz
- ✅ Custom CSS ile özelleştirilmiş stiller

### Fonksiyonellik
- ✅ Rezervasyon formu
- ✅ İletişim formu
- ✅ Fiyat hesaplayıcı
- ✅ WhatsApp entegrasyonu
- ✅ Telefon entegrasyonu
- ✅ Floating action buttons
- ✅ Smooth scroll
- ✅ Form validasyonu

## 📄 Sayfalar

1. **Ana Sayfa** (`index.html`) - Hero section, hizmetler, rezervasyon formu
2. **Hakkımızda** (`hakkimizda.html`) - Şirket bilgileri, misyon, vizyon
3. **Hizmetlerimiz** (`hizmetlerimiz.html`) - Tüm hizmetlerin detayları
4. **Fiyat Listesi** (`fiyat-listesi.html`) - Güncel fiyatlar ve hesaplayıcı
5. **Rezervasyon** (`rezervasyon.html`) - Online rezervasyon formu
6. **İletişim** (`iletisim.html`) - İletişim bilgileri ve form
7. **Blog** (`blog.html`) - Blog yazıları listesi
8. **SSS** (`sss.html`) - Sık sorulan sorular
9. **Gizlilik Politikası** (`gizlilik-politikasi.html`) - KVKK uyumlu politika
10. **Kullanım Koşulları** (`kullanim-kosullari.html`) - Hizmet şartları

## 🔧 Kullanım

### Yerel Geliştirme
1. HTML dosyalarını bir web sunucusunda açın
2. Veya basit bir HTTP sunucusu kullanın:
   ```bash
   # Python ile
   python -m http.server 8000
   
   # Node.js ile
   npx http-server
   ```

### Veri Güncelleme
Veriler `.md` formatında `data/` klasöründe tutulmaktadır. Bu dosyaları düzenleyerek içerikleri güncelleyebilirsiniz.

## 📝 Notlar

- Tüm telefon numaraları ve e-posta adresleri örnek olarak verilmiştir, gerçek bilgilerle değiştirilmelidir.
- Google Maps entegrasyonu için API anahtarı gerekebilir.
- Görseller `images/` klasörüne eklenmelidir.
- Sitemap.xml'deki URL'ler gerçek domain ile değiştirilmelidir.

## 🎨 Renkler

- Ana Renk: `#FFC107` (Taksi sarısı)
- İkincil Renk: `#212529` (Koyu gri)
- Başarı: `#28a745` (Yeşil)

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px

## 📞 İletişim Bilgileri (Örnek)

- Telefon: +90 282 123 45 67
- WhatsApp: +90 532 123 45 67
- E-posta: info@cerkezkoytaksi.com
- Adres: Fevzipaşa Mahallesi, Hayri Batur Caddesi No:76, 59500 Çerkezköy/Tekirdağ

## 📄 Lisans

Bu proje özel bir projedir. Tüm hakları saklıdır.

