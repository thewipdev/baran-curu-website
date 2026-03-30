import { motion } from "framer-motion";
import { ArrowDown, CalendarDays, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const experience = [
  { year: "2024 — Güncel", role: "Bilgi Güvenliği Yönetimi Uzmanı", company: "Türkiye Emlak Katılım Bankası" },
  { year: "2022 — 2024", role: "Kıdemli Siber Güvenlik & GRC Uzmanı", company: "YEDAŞ" },
  { year: "2019 — 2022", role: "Bilgi Güvenliği Uzmanı", company: "Eksim Holding" },
];

const Index = () => {
  return (
    <Layout>
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed font-serif italic mb-10"
          >
            Değer zincirlerinin peşinde, neşeyle, akış halinde.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/takvim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              <CalendarDays size={16} />
              Takvimden Randevu Al
            </Link>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <Mail size={16} />
              İletişime Geç
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="absolute bottom-12"
        >
          <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Hakkımda
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Bankacılık ve enerji sektörlerinde bilgi güvenliği, GRC ve siber güvenlik alanlarında
              5 yılı aşkın deneyime sahibim. ISO 27001 Lead Auditor ve Lead Implementer olarak
              kurumsal güvenlik mimarilerini tasarlıyor, risk yönetimi süreçlerini yönetiyorum.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Şu anda Türkiye Emlak Katılım Bankası'nda Bilgi Güvenliği Yönetimi Uzmanı olarak görev yapıyorum.
              Yeni projeler, iş birlikleri ve fikir alışverişine her zaman açığım — tanışmak isterseniz takvimden kolayca randevu alabilirsiniz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/30">
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
                    <div className="w-3 h-3 rounded-full bg-accent border-2 border-accent group-hover:scale-125 transition-transform duration-300" />
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
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                <CalendarDays size={16} />
                Randevu Al
              </Link>
              <a
                href="mailto:barancuru@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors duration-300"
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
