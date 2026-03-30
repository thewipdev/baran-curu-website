

# Baran Curu — Premium Minimalist Kişisel Site Yeniden Tasarım

## Kişi Profili (CV & LinkedIn'den)
- **Bilgi Güvenliği Profesyoneli**, ISO 27001 Lead Auditor/Implementer
- Türkiye Emlak Katılım Bankası'nda Bilgi Güvenliği Yönetimi Uzmanı (güncel)
- TEVED Derneği Kurucu Başkanı, GDG Samsun Organizatör
- YEDAŞ'ta Kıdemli Siber Güvenlik & GRC Uzmanı (önceki)
- Eksim Holding'de Bilgi Güvenliği Uzmanı (3+ yıl)
- Dicle Üniversitesi Lisans, Anadolu Üniversitesi Yüksek Lisans
- Red Bull Student Brand Manager, McKinsey Forward, Aspire Leaders Alumni
- İlgi: Psikoloji, Gezi, Bisiklet, Satranç, Sinema

## Tasarım Değişiklikleri

### 1. Navbar — Sosyal medya linkleri öncelikli
- Navbar'a sosyal medya ikonlarını ekle (YouTube, LinkedIn, Twitter, Instagram, Medium)
- Sağ tarafta nav linkleri + sosyal ikonlar yan yana
- Navbardan "Ana Sayfa" kaldır, logo zaten yönlendiriyor
- Nav: Blog | Takvim | İletişim + sosyal ikonlar

### 2. Ana Sayfa — Etkileyici ama minimalist
- **Hero bölümü yeniden tasarım:**
  - İsim + unvan: "Bilgi Güvenliği Profesyoneli" alt başlık
  - Motto kalıyor: "Değer zincirlerinin peşinde, neşeyle, akış halinde."
  - Sosyal medya ikonları hero içinde belirgin şekilde
  - CTA butonları: "Takvimden Randevu Al" + "İletişime Geç"
  
- **Hakkımda bölümü — CV'den zenginleştirilmiş:**
  - Kısa profesyonel özet (GRC, SOC, ISO 27001, enerji/bankacılık sektörleri)
  - Uzmanlık alanları kartları (GRC & Compliance, SOC & Incident Response, Risk Management vb.)
  - Deneyim highlights: Türkiye Emlak Katılım, YEDAŞ, Eksim Holding — minimal timeline
  - Sertifikalar: ISO 27001 LA/LI badge'leri
  - Gönüllülük: TEVED, GDG Samsun, Aspire Leaders
  
- **Blog yazıları bölümü KALDIRILACAK** ana sayfadan — sadece navbar'dan erişilebilir

- **Takvim embed veya CTA** — ana sayfanın altına Calendly embed veya belirgin "Görüşme Planla" bölümü

### 3. Footer — Sosyal medya daha belirgin
- Sosyal ikonlar daha büyük, hover efektli
- E-posta linki belirgin
- Motto + copyright

### 4. Blog, Takvim, İletişim sayfaları
- Mevcut yapıları korunacak, sadece küçük stil iyileştirmeleri

## Teknik Detaylar

| Dosya | Değişiklik |
|-------|-----------|
| `src/components/Navbar.tsx` | Sosyal medya ikonları ekleme, nav yapısı güncelleme |
| `src/pages/Index.tsx` | Hero yeniden tasarım, hakkımda bölümünü CV ile zenginleştirme, blog preview kaldırma, CTA butonları ekleme |
| `src/components/Footer.tsx` | Sosyal ikonları büyütme, e-posta belirginleştirme |
| `src/index.css` | Animasyon ve stagger efektleri güçlendirme |

Blog yazıları ve diğer sayfalar mevcut halleriyle kalacak.

