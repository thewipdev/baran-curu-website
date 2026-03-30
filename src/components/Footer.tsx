import { Youtube, Linkedin, Twitter, Instagram, BookOpen, Mail } from "lucide-react";

const socials = [
  { icon: Youtube, href: "https://www.youtube.com/@barancuru", label: "YouTube" },
  // Sayın Curu LinkedIn linki buraya
  { icon: Linkedin, href: "https://www.linkedin.com/in/barancuru/", label: "LinkedIn" },
  // Sayın Curu Twitter linki buraya
  { icon: Twitter, href: "https://twitter.com/ABaranCuru", label: "Twitter" },
  // Sayın Curu Instagram linki buraya
  { icon: Instagram, href: "https://www.instagram.com/bfrancuru", label: "Instagram" },
  { icon: BookOpen, href: "https://medium.com/@barancuru", label: "Medium" },
];

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
      <div className="flex items-center gap-6">
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
      </div>
      <a
        href="mailto:barancuru@gmail.com"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        <Mail size={14} />
        barancuru@gmail.com
      </a>
      <p className="text-sm text-muted-foreground font-serif italic">
        "Değer zincirlerinin peşinde, neşeyle, akış halinde."
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Baran Curu
      </p>
    </div>
  </footer>
);

export default Footer;
