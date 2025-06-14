import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-background border-t border-border theme-transition">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-glow">Dusk AI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Revolutionizing business automation with cutting-edge AI technology. Intelligent solutions for exponential
              growth.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:element-glow-effect p-2 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:element-glow-effect p-2 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:element-glow-effect p-2 rounded-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Services</h3>
            <div className="space-y-2">
              {["Process Automation", "AI Integration", "Data Analytics", "Custom Solutions", "Consulting"].map(
                (service) => (
                  <Link
                    key={service}
                    href="/services"
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                  >
                    {service}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Phone size={16} className="text-primary group-hover:element-glow-effect transition-all duration-300" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail size={16} className="text-primary group-hover:element-glow-effect transition-all duration-300" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  hello@duskai.com
                </span>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin
                  size={16}
                  className="text-primary mt-1 group-hover:element-glow-effect transition-all duration-300"
                />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  123 Innovation Drive
                  <br />
                  Tech Valley, CA 94000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center theme-transition">
          <p className="text-muted-foreground">
            © 2024 Dusk AI. All rights reserved. |
            <Link href="#" className="hover:text-primary transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-primary transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
