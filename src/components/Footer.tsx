import { Youtube, Linkedin, Twitter, Instagram, BookOpen } from "lucide-react";

const socials = [
  { icon: Youtube, href: "https://www.youtube.com/@barancuru", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/barancuru/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/ABaranCuru", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/bfrancuru", label: "Instagram" },
  { icon: BookOpen, href: "https://medium.com/@barancuru", label: "Medium" },
];

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground font-serif italic">
        "Değer zincirlerinin peşinde, neşeyle, akış halinde."
      </p>
      <div className="flex items-center gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <s.icon size={18} strokeWidth={1.5} />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Baran Curu
      </p>
    </div>
  </footer>
);

export default Footer;
