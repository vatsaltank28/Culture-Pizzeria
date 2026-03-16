import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Phone, ShieldCheck, Heart, Sparkles } from "lucide-react";

// ─── Real Photos ──────────────────────────────────────────────────────────────
const MARQUEE_PHOTOS = [
  { src: "https://b.zmtcdn.com/data/pictures/0/20036620/97186426cbcd471a568082970c97d6e1.jpg", label: "Signature Pizza" },
  { src: "https://b.zmtcdn.com/data/pictures/0/20036620/76f14b85de6b156e20ff63bcb2e85448.jpeg", label: "Chicago Deep Dish" },
  { src: "https://b.zmtcdn.com/data/pictures/chains/0/20036620/55d55cf8d2d69b8dbcee405ee542295f.jpeg", label: "The Restaurant" },
  { src: "https://b.zmtcdn.com/data/pictures/chains/0/20036620/588c411dbe4080d0a1df032cad77b3f0.jpeg", label: "Fresh Pizza" },
  { src: "https://b.zmtcdn.com/data/pictures/chains/0/20036620/46ceb70d6fc86ccbd64411765efb5a9a.jpeg", label: "Restaurant Vibes" },
  { src: "https://lh3.googleusercontent.com/EWHitCxFHQ3-TkB8WAOPOzfdOTz7T67CUgjy28T2l77Iq_-3Ie8VIvwrPHT1fax_Q-wq-LGhhL4PFZm6RwtQTIKMfzY7603tJDar_-Y=w800-rw", label: "Cheesy Goodness" },
  { src: "https://lh3.googleusercontent.com/DmhMQnbhrV-sxr47r8vhF4CkVTZvJ0uxkVG4ELIqRirpKOgadTG8jB8r9B_isL0nwfTgYLRvmf4BCoKDwpCeDiSiUvYGLpQYcC-dcWdp9g=w800-rw", label: "Pizza Close-up" },
  { src: "https://lh3.googleusercontent.com/yeqcabLpUMn_3JRvOfzFJtI_vfN0cJuiHJKeygTBtcL7-LkaUYomYqSzMmwHtSU_BJtAxVSJZyl3J9evFFDAQfq_IKUvJRBo09HJzzHRsw=w800-rw", label: "Kulhad Pizza" },
];

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { stiffness: 350, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 350, damping: 28 });
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 65%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }}
      onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      className={`relative cursor-pointer ${className}`}
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20"
        style={{ background: glare }}
      />
    </motion.div>
  );
}

// ─── Floating 3D Pizza ────────────────────────────────────────────────────────
function FloatingPizza() {
  return (
    <div className="hidden lg:block absolute right-8 xl:right-20 top-1/2 -translate-y-1/2 z-10" style={{ perspective: "900px" }}>
      {/* Main pizza disc */}
      <div className="animate-float-3d relative w-64 h-64 xl:w-80 xl:h-80">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/15 shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_0_2px_rgba(255,255,255,0.05)]">
          <img
            src="https://b.zmtcdn.com/data/pictures/0/20036620/97186426cbcd471a568082970c97d6e1.jpg"
            alt="Signature Pizza"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Ground shadow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/50 rounded-full blur-xl" />

        {/* Floating ingredient badges */}
        {[
          { emoji: "🍅", label: "Fresh Tomatoes", style: "top-0 -left-24", delay: "0s" },
          { emoji: "🧀", label: "Molten Cheese", style: "-bottom-4 -right-24", delay: "1s" },
          { emoji: "🌶️", label: "Spicy Kick", style: "top-1/2 -right-28", delay: "0.5s" },
          { emoji: "🫑", label: "Garden Fresh", style: "top-1/4 -left-28", delay: "1.5s" },
        ].map(({ emoji, label, style, delay }) => (
          <div
            key={label}
            className={`absolute animate-float-badge flex items-center gap-1.5 bg-background/85 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-xl border border-border/30 whitespace-nowrap ${style}`}
            style={{ animationDelay: delay }}
          >
            <span className="text-base">{emoji}</span>
            <span>{label}</span>
          </div>
        ))}

        {/* Rating badge */}
        <div className="absolute -top-6 -right-6 animate-float-badge bg-secondary text-foreground rounded-2xl px-3 py-2 shadow-lg font-bold text-sm flex items-center gap-1" style={{ animationDelay: "0.8s" }}>
          <Star className="w-4 h-4 fill-current" /> 4.5
        </div>
      </div>
    </div>
  );
}

// ─── Stat Counter Card ────────────────────────────────────────────────────────
function StatCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col items-center gap-1 px-6 py-5 bg-background rounded-2xl shadow-sm border border-border/50 cursor-default"
    >
      <span className="text-3xl mb-1">{icon}</span>
      <span className="font-display text-3xl font-bold text-primary">{value}</span>
      <span className="text-muted-foreground text-sm text-center">{label}</span>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Best Pizza in Vile Parle | Chicago Deep Dish & Kulhad Pizza Mumbai | The Mix Culture</title>
        <meta name="description" content="Mumbai's hidden gem for pizza lovers. Handcrafted fusion pizzas, iconic Kulhad Pizza, and the cheesiest Chicago deep dish in Vile Parle East." />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[92vh] min-h-[640px] flex items-center justify-start bg-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
            alt="Wood fired pizza"
            className="w-full h-full object-cover opacity-55 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
        </div>

        {/* 3D floating pizza — right side */}
        <FloatingPizza />

        {/* Text — left side */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-2xl mt-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/25 text-background backdrop-blur-md border border-primary/30 text-sm font-semibold tracking-wide mb-6 uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Vile Parle's Hidden Gem
            </motion.span>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-background leading-tight mb-6">
              Mumbai's<br />
              Destination<br />
              <span className="text-secondary italic">for Pizza Lovers.</span>
            </h1>

            <p className="text-lg md:text-xl text-background/80 mb-10 max-w-lg font-light leading-relaxed">
              Bold fusion flavors, handcrafted slow-fermented crusts, and the cheesiest Chicago deep dish in town — now with our iconic <strong className="text-secondary font-semibold">Kulhad Pizza</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:-translate-y-1 transition-transform">
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg bg-background/10 backdrop-blur-md text-background border-background/30 hover:bg-background/20 hover:-translate-y-1 transition-transform">
                <a href="#order">Order Online</a>
              </Button>
            </div>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: "⭐", text: "4.5 Rated on Zomato" },
                { icon: "🕛", text: "12 Noon – 12 Midnight" },
                { icon: "📍", text: "Vile Parle East" },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-sm text-background/70 bg-background/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-background/15">
                  {icon} {text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section className="py-10 bg-card border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="4.5 ★" label="Zomato Rating" icon="🏆" />
            <StatCard value="374+" label="Happy Reviews" icon="💬" />
            <StatCard value="₹70" label="Kulhad Pizza from" icon="🍕" />
            <StatCard value="12 Hrs" label="Open Every Day" icon="🕛" />
          </div>
        </div>
      </section>

      {/* ── SIGNATURE PIZZAS (3D tilt cards) ─────────────────────────────── */}
      <section className="py-24 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold mb-4">Our Signature Masterpieces</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every slice tells a story. From the streets of Chicago to the heart of Mumbai.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kulhad Pizza",
                price: "₹70",
                desc: "Our iconic signature — pizza served in a traditional clay kulhad. A one-of-a-kind Mumbai experience.",
                tags: ["Veg", "Signature"],
                img: "https://b.zmtcdn.com/data/pictures/0/20036620/97186426cbcd471a568082970c97d6e1.jpg",
                badge: "🔥 Must Try",
                badgeColor: "bg-primary text-primary-foreground",
              },
              {
                title: "Chicago Deep Dish",
                price: "₹650",
                desc: "A thick buttery crust with rich tomato sauce and molten cheese. Baked slow — pure comfort.",
                tags: ["Best Seller"],
                img: "https://b.zmtcdn.com/data/pictures/0/20036620/76f14b85de6b156e20ff63bcb2e85448.jpeg",
                badge: "⭐ Best Seller",
                badgeColor: "bg-secondary text-foreground",
              },
              {
                title: "Paneer Tikka Pizza",
                price: "₹520",
                desc: "Tandoori sauce, marinated paneer, capsicum, onion & mozzarella. Indian-Italian fusion at its boldest.",
                tags: ["Veg", "Spicy"],
                img: "https://b.zmtcdn.com/data/pictures/chains/0/20036620/588c411dbe4080d0a1df032cad77b3f0.jpeg",
                badge: "🌶️ Chef's Pick",
                badgeColor: "bg-accent text-accent-foreground",
              },
            ].map((pizza, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12 }}
              >
                <TiltCard className="h-full">
                  <div className="overflow-hidden border border-border/50 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500 group h-full flex flex-col rounded-2xl">
                    {/* Image with zoom */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={pizza.img}
                        alt={pizza.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {/* Badge */}
                      <span className={`absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full shadow-md ${pizza.badgeColor}`}>
                        {pizza.badge}
                      </span>
                      {/* Price */}
                      <span className="absolute bottom-4 right-4 font-display text-2xl font-bold text-white drop-shadow-lg">
                        {pizza.price}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {pizza.tags.map(tag => (
                          <span key={tag} className="text-xs font-semibold px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pizza.title}
                      </h3>
                      <p className="text-muted-foreground flex-1 leading-relaxed">{pizza.desc}</p>
                      <Link
                        href="/menu"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        See on menu →
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/menu">Explore Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── PHOTO MARQUEE ────────────────────────────────────────────────── */}
      <section className="py-10 overflow-hidden bg-background border-y border-border/30">
        <div className="mb-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">From Our Kitchen & Restaurant</p>
        </div>
        <div className="flex">
          <div className="animate-marquee flex gap-4 items-center">
            {[...MARQUEE_PHOTOS, ...MARQUEE_PHOTOS].map((photo, i) => (
              <div key={i} className="relative w-56 h-40 shrink-0 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LOVE US ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-card border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Our Philosophy</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Where Cultures Meet on a Pizza</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe great pizza isn't just Italian anymore. It belongs to the world. We've taken artisanal slow-fermented techniques and loaded them with the bold, unapologetic flavors that Mumbai loves.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {[
                  { icon: ShieldCheck, title: "Fresh Ingredients", desc: "Sourced daily. No shortcuts, ever." },
                  { icon: FlameIcon, title: "Live Kitchen", desc: "Watch your pizza being made." },
                  { icon: Heart, title: "Local Heart", desc: "A neighborhood spot that loves you back." },
                  { icon: Sparkles, title: "Bold Fusions", desc: "Italian, Mexican & Indian flavors." },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-background/60 transition-colors cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="rounded-full px-8">
                <Link href="/about">Read Our Story</Link>
              </Button>
            </motion.div>

            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative"
            >
              <TiltCard>
                <div className="grid grid-cols-2 gap-3 rounded-3xl overflow-hidden">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/0/20036620/55d55cf8d2d69b8dbcee405ee542295f.jpeg" alt="Restaurant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/0/20036620/46ceb70d6fc86ccbd64411765efb5a9a.jpeg" alt="Restaurant interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img src="https://lh3.googleusercontent.com/3p51G4r0J4NxFoW6Pd50cqoNyietV1LZyY5TzT3kDTwhNVxJ09FYMW4Th6rErBohLrbFRhbzR0jOzzUHOcmoVXWfONGGfAa5w1D_22sy=w800-rw" alt="Cozy corner" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img src="https://lh3.googleusercontent.com/yeqcabLpUMn_3JRvOfzFJtI_vfN0cJuiHJKeygTBtcL7-LkaUYomYqSzMmwHtSU_BJtAxVSJZyl3J9evFFDAQfq_IKUvJRBo09HJzzHRsw=w800-rw" alt="Kulhad pizza" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </TiltCard>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">What Mumbaikars Are Saying</h2>
            <p className="text-lg text-muted-foreground">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", initial: "P", color: "bg-red-100 text-red-700", quote: "The best deep dish pizza in Mumbai. I drove all the way from Bandra just for this! The crust is buttery perfection.", rating: 5 },
              { name: "Rahul K.", initial: "R", color: "bg-amber-100 text-amber-700", quote: "A hidden gem every pizza lover must try. The Kulhad Pizza is absolutely insane — never seen anything like it. Friendly staff too!", rating: 5 },
              { name: "Meera T.", initial: "M", color: "bg-green-100 text-green-700", quote: "Cheesiest pizza I've ever had. The Chicago deep dish is life-changing. Definitely my new weekend spot.", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="p-8 h-full bg-card border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-2xl flex flex-col">
                  <span className="font-display text-6xl text-primary/20 leading-none mb-2">"</span>
                  <div className="flex text-secondary mb-4">
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground text-base leading-relaxed mb-6 flex-1 italic">{review.quote}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center font-bold text-sm`}>
                      {review.initial}
                    </div>
                    <p className="font-bold text-foreground">{review.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER CTA ────────────────────────────────────────────────────── */}
      <section id="order" className="py-28 bg-foreground relative overflow-hidden">
        {/* Background pizza image with heavy overlay */}
        <div className="absolute inset-0">
          <img
            src="https://b.zmtcdn.com/data/pictures/0/20036620/76f14b85de6b156e20ff63bcb2e85448.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-6 inline-block"
            >
              🍕
            </motion.div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-background mb-4">Craving a Slice?</h2>
            <p className="text-xl text-background/70 mb-12">Order online for quick delivery or drop by to grab your favorite pie.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
              <a href="https://www.zomato.com/mumbai/mix-culture-pizzeria-vile-parle-east/order" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="w-full sm:w-auto h-16 px-8 rounded-2xl text-lg bg-[#E23744] hover:bg-[#c12833] text-white shadow-xl">
                    🧡 Order on Zomato
                  </Button>
                </motion.div>
              </a>
              <a href="https://www.swiggy.com/restaurants/mix-culture-pizzeria-vile-parle-east-mumbai-1152906/dineout" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="w-full sm:w-auto h-16 px-8 rounded-2xl text-lg bg-[#FC8019] hover:bg-[#e06b12] text-white shadow-xl">
                    🛵 Order on Swiggy
                  </Button>
                </motion.div>
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <span>or</span>
                <a href="https://wa.me/918850717019" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold text-xl text-background hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5" /> +91 88507 17019
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VISIT INFO ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-card border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-background p-8 rounded-3xl shadow-sm border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-1 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Find Us in Vile Parle</h3>
                <p className="text-muted-foreground">Shop 4, Anand Building, Near RBL Bank, Navpada Road, Vile Parle East, Mumbai 400057</p>
                <p className="text-sm font-medium text-foreground mt-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> Open Daily: 12 Noon – 12 Midnight
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="shrink-0 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <Link href="/visit">Get Directions →</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
