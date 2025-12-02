import { motion } from "framer-motion";
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-[#201713] border-t border-border border-[#F7E07D]">
      

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="bg-clip-text text-transparent font-display text-xl font-bold bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">
                Priyanshu Rangari
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground text-[#c6bb9a]">
              Popping with creativity, and much more fun
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-8 text-[#c6bb9a]">
            {["Home", "Projects", "Contact"].map((link) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4 text-[#c6bb9a]">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-8 border-t border-border text-center border-[#c6bb9a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground text-[#c6bb9a]">
            © {currentYear} PopFolio. Made with 🍿 and lots of butter.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
