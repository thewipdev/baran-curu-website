import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <Layout>
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg mb-16">
            Düşünceler, deneyimler ve altı çizilen satırlar.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-0">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} className="group block">
                <article className="py-8 border-b border-border flex flex-col md:flex-row md:items-start gap-4">
                  <time className="text-sm text-muted-foreground min-w-[120px] pt-1">
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <div className="flex-1">
                    <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2 flex items-center gap-2">
                      {post.title}
                      <ArrowRight
                        size={16}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-3 mt-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[11px] tracking-wider uppercase text-accent font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
