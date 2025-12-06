# Dokploy Deployment Ayarları

Bu proje statik bir HTML sitesidir. Dokploy'da deploy etmek için iki yöntem var:

## Yöntem 1: Static Build Type (Önerilen - Daha Hızlı)

### Dokploy Ayarları
- **Build Type**: `Static` seçin
- **Publish Directory**: `html` yazın
- **Build Command**: Boş bırakın
- **Install Command**: Boş bırakın

## Yöntem 2: Dockerfile ile (Alternatif)

Eğer Static build type çalışmazsa, Dockerfile kullanılabilir:
- **Build Type**: `Dockerfile` seçin
- Dockerfile otomatik olarak algılanacak

### 2. Provider Ayarları
- Repository'nizi seçin
- Branch'i seçin (genellikle `main` veya `master`)
- Build Path: `/` (root)

### 3. Build Ayarları
- **Autodeploy**: Açık (isteğe bağlı)
- **Clean Cache**: Açık (önerilir)

### 4. Önemli Notlar
- Bu site herhangi bir build komutu gerektirmez
- Tüm HTML dosyaları `html/` klasöründe
- CSS dosyaları `css/` klasöründe
- JavaScript dosyaları `js/` klasöründe
- Resimler `images/` ve `data/images/` klasörlerinde

## Dosya Yapısı

```
taksi_website/
├── html/          # Tüm HTML dosyaları (publish directory)
├── css/           # CSS dosyaları
├── js/            # JavaScript dosyaları
├── data/          # JSON veri dosyaları
└── images/        # Resimler
```

## Deployment Sonrası

Deploy edildikten sonra:
- Ana sayfa: `https://yourdomain.com/index.html` veya `https://yourdomain.com/`
- Diğer sayfalar: `https://yourdomain.com/hakkimizda.html`, vb.

