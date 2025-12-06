# Dockerfile Sorunu Çözümü

Dokploy hala Dockerfile kullanmaya çalışıyor. Repository'de Dockerfile olup olmadığını kontrol edin ve silin.

## Adımlar:

1. **Repository'de Dockerfile var mı kontrol edin:**
   ```bash
   git ls-files | grep Dockerfile
   ```

2. **Eğer Dockerfile varsa, silin:**
   ```bash
   git rm Dockerfile
   git commit -m "Remove Dockerfile, using static build"
   git push
   ```

3. **Dokploy'da:**
   - "Clean Cache" toggle'ını AÇIN
   - "Save" yapın
   - Build Type'ın "Static" olduğundan emin olun
   - "SPA" checkbox'ını KAPATIN
   - "Save" yapın
   - "Deploy" edin

## Alternatif: Dokploy Arayüzünde Zorla Static Yapın

Eğer repository'de Dockerfile yoksa ama Dokploy hala Dockerfile kullanıyorsa:

1. Dokploy arayüzünde "Environment" sekmesine gidin
2. Yeni bir environment variable ekleyin:
   - Key: `BUILD_TYPE`
   - Value: `static`
3. "Save" yapın
4. "Deploy" edin

