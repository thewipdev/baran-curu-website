import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Yazı bulunamadı</h1>
          <Link to="/blog" className="text-accent hover:underline">
            Blog'a dön
          </Link>
        </div>
      </Layout>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith("## "))
        return (
          <h2 key={i} className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
      if (trimmed.startsWith("### "))
        return (
          <h3 key={i} className="font-serif text-xl font-semibold text-foreground mt-8 mb-3">
            {trimmed.slice(4)}
          </h3>
        );
      if (trimmed.startsWith("> "))
        return (
          <blockquote key={i} className="border-l-2 border-accent pl-4 my-4 italic text-muted-foreground">
            {trimmed.slice(2)}
          </blockquote>
        );
      if (trimmed.startsWith("---"))
        return <hr key={i} className="my-8 border-border" />;
      if (trimmed.match(/^\d+\.\s/))
        return (
          <p key={i} className="text-foreground/80 leading-relaxed ml-4 mb-1">
            {trimmed}
          </p>
        );
      if (trimmed.startsWith("- "))
        return (
          <p key={i} className="text-foreground/80 leading-relaxed ml-4 mb-1">
            • {trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, "$1")}
          </p>
        );
      return (
        <p key={i} className="text-foreground/80 leading-relaxed mb-4">
          {trimmed.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      );
    });
  };

  return (
    <Layout>
      <article className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft size={14} />
              Tüm yazılar
            </Link>

            <div className="flex flex-wrap gap-3 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[11px] tracking-wider uppercase text-accent font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <time className="text-sm text-muted-foreground block mb-12">
              {new Date(post.date).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            <div className="prose-custom">{renderContent(post.content)}</div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
