import { Link } from "wouter";
import { Instagram, Facebook, MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import logoImg from "@assets/image_1773667179411.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center group w-fit">
              <img
                src={logoImg}
                alt="Mix Culture Pizzeria"
                className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-background/60 max-w-sm leading-relaxed">
              Mumbai's hidden gem for pizza lovers. Handcrafted, slow-fermented, 
              and boldly flavored pizzas blending Italian, Mexican &amp; Indian inspirations.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-pink-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918850717019"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-green-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-background">Explore</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Our Menu" },
                { href: "/about", label: "Our Story" },
                { href: "/gallery", label: "Gallery" },
                { href: "/visit", label: "Visit Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-background/60 hover:text-secondary transition-colors duration-200 flex items-center gap-1 group w-fit"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-background">Get in Touch</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=19.0979137,72.845762"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/60 hover:text-secondary transition-colors duration-200 group"
                >
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span>
                    Shop 4, Anand Building,<br />
                    Near RBL Bank, Navpada Road,<br />
                    Vile Parle East, Mumbai 400057
                    <ExternalLink className="w-3 h-3 inline ml-1 opacity-50" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918850717019"
                  className="flex items-center gap-3 text-background/60 hover:text-secondary transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 text-secondary shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>+91 88507 17019</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918850717019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/60 hover:text-green-400 transition-colors duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 text-secondary shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-background">Opening Hours</h3>
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-background font-medium">Every Day</p>
                <p className="text-background/60">12:00 Noon – 12:00 Midnight</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1.5 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Open 7 days a week
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://www.zomato.com/mumbai/mix-culture-pizzeria-vile-parle-east/order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/60 hover:text-[#E23744] transition-colors duration-200 group"
              >
                <span className="w-2 h-2 rounded-full bg-[#E23744] shrink-0" />
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">Order on Zomato</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
              <a
                href="https://www.swiggy.com/restaurants/mix-culture-pizzeria-vile-parle-east-mumbai-1152906/dineout"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/60 hover:text-[#FC8019] transition-colors duration-200 group"
              >
                <span className="w-2 h-2 rounded-full bg-[#FC8019] shrink-0" />
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">Order on Swiggy</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-background/10 text-background/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} The Mix Culture Pizzeria. All rights reserved.</p>
          <p>Handcrafted with ❤️ in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
