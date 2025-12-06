# Çerkezköy & Kapaklı Taksi Web Sitesi - SEO Uyumlu Tasarım Planı

## 📋 GENEL ÖZELLİKLER

### SEO Optimizasyonları
- ✅ **Hızlı Yükleme**: Sayfa hızı optimizasyonu (lazy loading, image optimization)
- ✅ **Mobil Uyumluluk**: Responsive tasarım (Mobile-First yaklaşım)
- ✅ **Yerel SEO**: Çerkezköy ve Kapaklı için optimize edilmiş içerik
- ✅ **Schema Markup**: LocalBusiness, Service, FAQPage, BreadcrumbList schema'ları
- ✅ **Meta Etiketleri**: Title, Description, Keywords, Open Graph, Twitter Cards
- ✅ **Sitemap.xml**: Tüm sayfalar için XML sitemap
- ✅ **Robots.txt**: Arama motoru botları için yönlendirme
- ✅ **Canonical URL**: Duplicate content önleme
- ✅ **Alt Text**: Tüm görseller için açıklayıcı alt text
- ✅ **Semantic HTML5**: SEO dostu HTML yapısı
- ✅ **Breadcrumb Navigation**: Kullanıcı ve SEO için navigasyon
- ✅ **URL Yapısı**: SEO dostu URL'ler (örn: /cerkezkoy-taksi, /kapakli-taksi)

### Teknik Özellikler
- ✅ **ASP.NET Core 8**: Backend framework
- ✅ **Bootstrap 5**: Frontend framework (sadece Bootstrap, Tailwind yok)
- ✅ **Clean Architecture**: Domain, Application, Infrastructure, API katmanları
- ✅ **MediatR (CQRS)**: Command/Query ayrımı
- ✅ **FluentValidation**: DTO validasyonları
- ✅ **Microsoft SQL Server**: Veritabanı
- ✅ **Identity**: Kullanıcı yönetimi
- ✅ **Caching**: Performans optimizasyonu
- ✅ **Logging**: Serilog ile loglama
- ✅ **Swagger**: API dokümantasyonu

---

## 📄 SAYFALAR VE ÖZELLİKLERİ

### 1. 🏠 ANA SAYFA (Home/Index)
**URL:** `/` veya `/anasayfa`

**Özellikler:**
- Hero Section: Büyük, dikkat çekici başlık ve CTA butonu
- Hızlı Rezervasyon Formu: Ana sayfada öne çıkan form
- Hizmet Özeti: Kısa hizmet açıklamaları (kartlar halinde)
- Neden Bizi Seçmelisiniz: Avantajlar (7/24 hizmet, güvenilir, uygun fiyat)
- Çalışma Bölgeleri: Çerkezköy ve Kapaklı harita görünümü
- Müşteri Yorumları: Testimonials bölümü
- İstatistikler: Yıllık yolcu sayısı, memnuniyet oranı vb.
- Son Blog Yazıları: SEO için içerik (3-4 yazı önizleme)
- İletişim Bilgileri: Telefon, WhatsApp, adres

**SEO:**
- Title: "Çerkezköy Taksi | 7/24 Taksi Hizmeti | Kapaklı Taksi"
- Description: "Çerkezköy ve Kapaklı bölgesinde 7/24 güvenilir taksi hizmeti. Havalimanı transferi, şehir içi ve şehirler arası ulaşım. Hemen rezervasyon yapın!"
- Schema: LocalBusiness, Service

---

### 2. 📖 HAKKIMIZDA (About)
**URL:** `/hakkimizda`

**Özellikler:**
- Şirket Hikayesi: Ne zaman kuruldu, misyon, vizyon
- Ekibimiz: Taksi şoförleri ve personel (opsiyonel)
- Değerlerimiz: Güvenilirlik, hız, müşteri memnuniyeti
- Sertifikalar ve Belgeler: Ruhsat, sigorta bilgileri
- Yılların Deneyimi: Timeline görünümü

**SEO:**
- Title: "Hakkımızda | Çerkezköy Taksi - Güvenilir Ulaşım Çözümleri"
- İçerik: Çerkezköy ve Kapaklı bölgesi hakkında bilgiler içermeli

---

### 3. 🚕 HİZMETLERİMİZ (Services)
**URL:** `/hizmetlerimiz`

**Ana Hizmetler:**
- **Şehir İçi Taksi:** `/hizmetlerimiz/sehir-ici-taksi`
- **Havalimanı Transferi:** `/hizmetlerimiz/havalimani-transferi`
  - İstanbul Havalimanı (IST)
  - Sabiha Gökçen (SAW)
  - Çorlu Havalimanı
- **Şehirler Arası Taksi:** `/hizmetlerimiz/sehirler-arasi-taksi`
- **VIP Taksi Hizmeti:** `/hizmetlerimiz/vip-taksi`
- **Günlük Kiralama:** `/hizmetlerimiz/gunluk-kiralama`
- **Gece Taksi:** `/hizmetlerimiz/gece-taksi`
- **Çerkezköy Taksi:** `/hizmetlerimiz/cerkezkoy-taksi`
- **Kapaklı Taksi:** `/hizmetlerimiz/kapakli-taksi`

**Her Hizmet Sayfası İçin:**
- Detaylı açıklama
- Fiyat bilgisi (genel)
- Hizmet alanları
- Rezervasyon butonu
- İlgili görseller

**SEO:**
- Her hizmet için ayrı title ve description
- Service schema markup
- İç linkleme (internal linking)

---

### 4. 💰 FİYAT LİSTESİ (Pricing)
**URL:** `/fiyat-listesi`

**Özellikler:**
- Bölge bazlı fiyat tablosu
- Mesafe bazlı ücretlendirme
- Havalimanı transfer fiyatları
- Şehirler arası sabit fiyatlar
- Gece tarifesi bilgisi
- Özel günler (bayram, yılbaşı) fiyatları
- Hesaplama aracı: Mesafe ve bölgeye göre tahmini fiyat

**SEO:**
- Title: "Fiyat Listesi | Çerkezköy Taksi Ücretleri 2024"
- Table schema markup

---

### 5. 📅 REZERVASYON (Booking/Reservation)
**URL:** `/rezervasyon`

**Rezervasyon Formu Alanları:**
- Ad Soyad
- Telefon (zorunlu)
- E-posta
- Rezervasyon Tarihi
- Rezervasyon Saati
- Kalkış Noktası (adres seçimi veya yazma)
- Varış Noktası (adres seçimi veya yazma)
- Hizmet Tipi (şehir içi, havalimanı, şehirler arası)
- Yolcu Sayısı
- Özel İstekler (notlar)
- KVKK Onayı checkbox
- Rezervasyon Yap butonu

**Rezervasyon Sonrası:**
- Onay sayfası
- SMS/Email bildirimi (backend'de)
- Rezervasyon takip numarası

**SEO:**
- Title: "Online Rezervasyon | Çerkezköy Taksi Rezervasyon Sistemi"
- Form validation için FluentValidation

---

### 6. 📞 İLETİŞİM (Contact)
**URL:** `/iletisim`

**Özellikler:**
- İletişim Formu:
  - Ad Soyad
  - Telefon
  - E-posta
  - Konu
  - Mesaj
- İletişim Bilgileri:
  - Telefon: Ana numara
  - WhatsApp: Direkt mesaj butonu
  - E-posta
  - Adres: Çerkezköy ve Kapaklı ofis adresleri
  - Çalışma Saatleri: 7/24
- Google Maps Entegrasyonu: İki lokasyon gösterimi
- Sosyal Medya Linkleri (varsa)

**SEO:**
- Title: "İletişim | Çerkezköy Taksi - Bize Ulaşın"
- LocalBusiness schema ile adres bilgileri

---

### 7. 📰 BLOG/HABERLER (Blog/News)
**URL:** `/blog` veya `/haberler`

**Özellikler:**
- Blog yazıları listesi (kategoriler, etiketler)
- Blog detay sayfası
- Kategoriler:
  - Genel
  - Çerkezköy Haberleri
  - Kapaklı Haberleri
  - Ulaşım İpuçları
  - Havalimanı Rehberi
- Arama özelliği
- Yorum sistemi (opsiyonel)

**SEO İçin Blog Konuları:**
- "Çerkezköy'den İstanbul Havalimanı'na Nasıl Gidilir?"
- "Kapaklı'da Taksi Bulma Rehberi"
- "Havalimanı Transferinde Dikkat Edilmesi Gerekenler"
- "Çerkezköy ve Kapaklı Bölgesi Hakkında Bilgiler"

**SEO:**
- Her blog için ayrı title ve description
- Article schema markup
- Breadcrumb navigation

---

### 8. ❓ SIK SORULAN SORULAR (FAQ)
**URL:** `/sss` veya `/sik-sorulan-sorular`

**Özellikler:**
- Accordion yapısında sorular
- Kategorilere ayrılmış:
  - Genel Sorular
  - Rezervasyon
  - Fiyatlandırma
  - Hizmetler
  - Ödeme

**Örnek Sorular:**
- "Çerkezköy'den İstanbul Havalimanı'na ne kadar sürer?"
- "Gece tarifesi ne zaman başlar?"
- "Rezervasyon yapmak zorunlu mu?"
- "Kredi kartı ile ödeme yapabilir miyim?"

**SEO:**
- Title: "SSS | Çerkezköy Taksi Sık Sorulan Sorular"
- FAQPage schema markup

---

### 9. 🔒 GİZLİLİK POLİTİKASI (Privacy Policy)
**URL:** `/gizlilik-politikasi`

**Özellikler:**
- KVKK uyumlu gizlilik politikası
- Kişisel verilerin korunması
- Çerez politikası
- Veri toplama amaçları

---

### 10. 📜 KULLANIM KOŞULLARI (Terms of Service)
**URL:** `/kullanim-kosullari`

**Özellikler:**
- Hizmet şartları
- Kullanıcı sorumlulukları
- İptal ve iade politikası

---

## 🎨 TASARIM ÖZELLİKLERİ

### Renk Paleti
- Ana Renk: Taksi sarısı (#FFC107 veya benzeri) veya mavi tonları
- İkincil Renk: Koyu gri (#212529)
- Vurgu Renkleri: Yeşil (başarı), Kırmızı (dikkat)

### Bileşenler
- **Navbar:** Sticky navbar, mobil hamburger menü
- **Hero Section:** Büyük görsel, CTA butonu
- **Cards:** Hizmet kartları, blog kartları
- **Forms:** Bootstrap form bileşenleri
- **Buttons:** Primary, secondary, outline stilleri
- **Modals:** Rezervasyon onayı, bilgilendirme
- **Tables:** Fiyat listesi tabloları
- **Accordion:** FAQ bölümü
- **Carousel:** Müşteri yorumları, öne çıkan içerikler

### Responsive Breakpoints
- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px

---

## 🔍 SEO TEKNİK DETAYLAR

### Meta Etiketleri (Her Sayfa İçin)
```html
<title>Sayfa Başlığı | Çerkezköy Taksi</title>
<meta name="description" content="Sayfa açıklaması">
<meta name="keywords" content="çerkezköy taksi, kapaklı taksi, havalimanı transferi">
<meta name="author" content="Çerkezköy Taksi">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.example.com/sayfa-url">
```

### Open Graph (Sosyal Medya Paylaşımları)
```html
<meta property="og:title" content="Sayfa Başlığı">
<meta property="og:description" content="Açıklama">
<meta property="og:image" content="Görsel URL">
<meta property="og:url" content="Sayfa URL">
<meta property="og:type" content="website">
```

### Schema Markup Örnekleri
- **LocalBusiness:** İşletme bilgileri
- **Service:** Hizmet açıklamaları
- **FAQPage:** SSS sayfası
- **BreadcrumbList:** Navigasyon
- **Article:** Blog yazıları

### URL Yapısı
- SEO dostu: `/cerkezkoy-taksi` (Türkçe karakterler URL encoded)
- Kısa ve açıklayıcı
- Kategori bazlı: `/hizmetlerimiz/sehir-ici-taksi`

---

## 📱 EK ÖZELLİKLER

### WhatsApp Entegrasyonu
- Direkt WhatsApp mesaj butonu
- Rezervasyon bilgilerini WhatsApp'a gönderme

### Telefon Entegrasyonu
- Tıklanabilir telefon numaraları (tel: link)

### Google Maps
- İletişim sayfasında harita
- Rezervasyon formunda adres seçimi

### Hızlı Erişim
- Floating action button (telefon, WhatsApp)
- Sticky rezervasyon butonu

---

## 🚀 PERFORMANS OPTİMİZASYONLARI

- Görsel optimizasyonu (WebP format, lazy loading)
- CSS/JS minification
- CDN kullanımı (opsiyonel)
- Browser caching
- Gzip compression
- Database query optimization

---

## 📊 ANALİTİK VE TAKİP

- Google Analytics entegrasyonu
- Google Search Console
- Yerel SEO için Google My Business
- Conversion tracking (rezervasyon takibi)

---

Bu plana göre projeyi geliştirmeye başlayabiliriz. Hangi sayfadan başlamak istersiniz?

