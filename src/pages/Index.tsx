import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";

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
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Merhaba, ben
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
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed font-serif italic"
          >
            Değer zincirlerinin peşinde, neşeyle, akış halinde.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-12"
        >
          <ArrowDown size={20} className="text-muted-foreground animate-bounce-subtle" />
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
              Dijital dönüşüm, süreç optimizasyonu ve değer zinciri yönetimi alanlarında çalışıyorum. 
              Teknoloji ve iş stratejisinin kesişim noktasında, organizasyonların daha verimli ve 
              sürdürülebilir çalışmasına katkı sağlamayı hedefliyorum.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Yazılarımda sistemsel düşünce, üretkenlik ve kişisel gelişim üzerine deneyimlerimi paylaşıyorum.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Yazılar
              </h2>
              <Link
                to="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
              >
                Tümünü gör
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-card border border-border rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] tracking-wider uppercase text-accent font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <time className="text-xs text-muted-foreground mt-4 block">
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
