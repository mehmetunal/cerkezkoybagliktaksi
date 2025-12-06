# Dokploy Deployment Ayarları

Bu proje statik bir HTML sitesidir. Dokploy'da deploy etmek için iki yöntem var:

## ⚠️ ÖNEMLİ: Static Build Type Kullanın!

Bu site için **Dockerfile'a GEREK YOK**. Dokploy'da mutlaka **Static** build type seçin.

### ❌ Dockerfile Sorunu Çözümü

Eğer hala Dockerfile hatası alıyorsanız:

1. **Repository'de Dockerfile varsa silin:**
   ```bash
   git rm Dockerfile
   git commit -m "Remove Dockerfile, using static build"
   git push
   ```

2. **Dokploy'da Clean Cache yapın:**
   - "Clean Cache" toggle'ını açın
   - "Save" yapın
   - Tekrar "Deploy" edin

3. **Dokploy arayüzünde Build Type'ı kontrol edin:**
   - "Static" seçili olduğundan emin olun
   - "SPA" checkbox'ı kapalı olsun
   - "Save" yapın

### Dokploy Ayarları (ZORUNLU)

**ÖNEMLİ:** `.dokploy.json` dosyası zaten projede mevcut ve doğru yapılandırılmış. Dokploy bu dosyayı otomatik olarak okuyacak.

#### Adım 1: Build Type'ı Static Yapın
1. **Build Type** bölümünde **"Static"** radio button'unu seçin
2. **"Save"** butonuna tıklayın (Build Type bölümünün altında)

#### Adım 2: SPA Checkbox'ını Kapatın
- **"Single Page Application (SPA)"** checkbox'ını **KAPATIN** (işareti kaldırın)
- Bu site SPA değil, normal static HTML sitesi

#### Adım 3: Publish Directory Ayarlayın
**"Static" seçtikten ve "Save" yaptıktan sonra:**

- Eğer **"Publish Directory"** alanı görünürse → `html` yazın
- Eğer **"Publish Directory"** alanı görünmüyorsa → ENDİŞELENMEYİN!
  - `.dokploy.json` dosyası zaten `publishDirectory: "html"` olarak ayarlı
  - Dokploy bu dosyayı otomatik okuyacak

#### Adım 3: Diğer Ayarlar
- **Build Command**: Boş bırakın (varsa)
- **Install Command**: Boş bırakın (varsa)
- **Autodeploy**: İsteğe bağlı
- **Clean Cache**: Açık (önerilir)

#### Adım 4: Deploy
1. Tekrar **"Save"** butonuna tıklayın (eğer değişiklik yaptıysanız)
2. **"Deploy"** butonuna tıklayın (üstteki mavi "Deploy" butonu)

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

