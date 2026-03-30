import { useState, FormEvent } from "react";
import { Mail, Youtube, Linkedin, Twitter, Instagram, BookOpen, Send } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Youtube, href: "https://www.youtube.com/@barancuru", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/barancuru/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/ABaranCuru", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/bfrancuru", label: "Instagram" },
  { icon: BookOpen, href: "https://medium.com/@barancuru", label: "Medium" },
];

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({
        title: "Mesajınız alındı",
        description: "En kısa sürede dönüş yapacağım. Teşekkürler!",
      });
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              İletişim
            </h1>
            <p className="text-muted-foreground text-lg mb-16">
              Bir soru, öneri veya iş birliği teklifi için ulaşabilirsiniz.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Bağlantılar
                </h2>
                <a
                  href="mailto:baran@barancuru.com.tr"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <Mail size={16} />
                  baran@barancuru.com.tr
                </a>

                <div className="flex flex-col gap-4 mt-6">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      <s.icon size={16} strokeWidth={1.5} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input placeholder="Adınız" required className="bg-background" />
                <Input type="email" placeholder="E-posta adresiniz" required className="bg-background" />
                <Textarea placeholder="Mesajınız" required rows={5} className="bg-background resize-none" />
                <Button type="submit" disabled={sending} className="self-start gap-2">
                  <Send size={14} />
                  {sending ? "Gönderiliyor..." : "Gönder"}
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
