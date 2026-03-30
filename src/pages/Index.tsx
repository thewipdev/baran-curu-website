import { motion } from "framer-motion";
import { ArrowDown, Youtube, Linkedin, Twitter, Instagram, BookOpen, Shield, FileCheck, AlertTriangle, Server, CalendarDays, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/barancuru/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@barancuru", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/ABaranCuru", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/bfrancuru", label: "Instagram" },
  { icon: BookOpen, href: "https://medium.com/@barancuru", label: "Medium" },
];

const expertise = [
  { icon: Shield, title: "GRC & Compliance", desc: "ISO 27001, KVKK, COBIT çerçevelerinde uyumluluk yönetimi" },
  { icon: AlertTriangle, title: "Risk Yönetimi", desc: "Bilgi güvenliği risk değerlendirme ve azaltma stratejileri" },
  { icon: Server, title: "SOC & Olay Müdahale", desc: "Güvenlik operasyonları merkezi ve olay yönetimi" },
  { icon: FileCheck, title: "Denetim & Sertifikasyon", desc: "ISO 27001 Lead Auditor / Lead Implementer" },
];

const experience = [
  { year: "2024 — Güncel", role: "Bilgi Güvenliği Yönetimi Uzmanı", company: "Türkiye Emlak Katılım Bankası" },
  { year: "2022 — 2024", role: "Kıdemli Siber Güvenlik & GRC Uzmanı", company: "YEDAŞ" },
  { year: "2019 — 2022", role: "Bilgi Güvenliği Uzmanı", company: "Eksim Holding" },
];

const highlights = [
  "TEVED Derneği Kurucu Başkanı",
  "GDG Samsun Organizatör",
  "McKinsey Forward Alumni",
  "Aspire Leaders Alumni",
  "Red Bull Student Brand Manager",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Bilgi Güvenliği Profesyoneli
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground tracking-tight leading-[1.1]"
          >
            Baran Curu
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-16 h-[1.5px] bg-accent mx-auto my-8 origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed font-serif italic mb-8"
          >
            Değer zincirlerinin peşinde, neşeyle, akış halinde.
          </motion.p>

          {/* Social icons in hero */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex items-center justify-center gap-5 mb-10"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <s.icon size={22} strokeWidth={1.5} />
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/takvim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <CalendarDays size={16} />
              Takvimden Randevu Al
            </Link>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              <Mail size={16} />
              İletişime Geç
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="absolute bottom-12"
        >
          <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      {/* About */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Hakkımda
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Bankacılık ve enerji sektörlerinde bilgi güvenliği, GRC (Governance, Risk & Compliance) ve 
              siber güvenlik alanlarında 5+ yıl deneyime sahibim. ISO 27001 Lead Auditor ve Lead Implementer 
              sertifikalarıyla kurumsal güvenlik süreçlerini tasarlıyor ve yönetiyorum.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Türkiye Emlak Katılım Bankası'nda Bilgi Güvenliği Yönetimi Uzmanı olarak görev yapıyorum. 
              Aynı zamanda TEVED Derneği'nin kurucu başkanlığını yürütüyor, GDG Samsun'da organizatörlük yapıyorum.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
              Uzmanlık Alanları
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <item.icon size={28} strokeWidth={1.5} className="text-accent mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12">
              Deneyim
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.1}>
                <div className="flex gap-6 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent border-2 border-accent group-hover:scale-125 transition-transform" />
                    {i < experience.length - 1 && <div className="w-px h-16 bg-border mt-2" />}
                  </div>
                  <div className="-mt-1">
                    <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">{exp.year}</p>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Topluluk & Gönüllülük
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {highlights.map((h, i) => (
              <ScrollReveal key={h} delay={i * 0.05}>
                <span className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground font-medium hover:border-accent transition-colors">
                  {h}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Calendar */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Görüşelim
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              İş birliği, danışmanlık veya sadece tanışmak için bir görüşme planlayalım.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/takvim"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <CalendarDays size={16} />
                Randevu Al
              </Link>
              <a
                href="mailto:barancuru@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                <Mail size={16} />
                E-posta Gönder
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
