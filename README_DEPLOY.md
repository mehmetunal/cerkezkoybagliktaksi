# Dokploy Deployment Ayarları

Bu proje statik bir HTML sitesidir. Dokploy'da deploy etmek için iki yöntem var:

## ⚠️ ÖNEMLİ: Static Build Type Kullanın!

Bu site için **Dockerfile'a GEREK YOK**. Dokploy'da mutlaka **Static** build type seçin.

### Dokploy Ayarları (ZORUNLU)

1. **Build Type**: `Static` seçin (Dockerfile DEĞİL!)
2. **Publish Directory**: `html` yazın
3. **Build Command**: Boş bırakın
4. **Install Command**: Boş bırakın
5. **Autodeploy**: İsteğe bağlı
6. **Clean Cache**: Açık (önerilir)

### Neden Static?

- ✅ Build gerektirmez (sadece HTML, CSS, JS)
- ✅ Çok daha hızlı deploy
- ✅ Network timeout sorunu yok
- ✅ Docker registry'ye bağlanmaya gerek yok

### Eğer Dockerfile Hatası Alırsanız

Dockerfile otomatik algılanırsa, Dokploy'da **Build Type**'ı manuel olarak **Static** olarak değiştirin.

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

