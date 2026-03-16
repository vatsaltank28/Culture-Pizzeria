import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Our Story | Mix Culture Pizzeria - Handcrafted Fusion Pizza in Mumbai</title>
        <meta name="description" content="Learn how a passion for global flavors led to the creation of Mumbai's favorite hidden pizzeria in Vile Parle." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-l-full blur-3xl -z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            Mix Culture started as a dream of one pizza-obsessed Mumbaikar who believed the city deserved better than ordinary pizza.
          </motion.p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground"
            >
              <p>
                Our founder's journey began with a backpack and an empty stomach. Wandering through the bustling streets of Naples, they fell in love with the art of slow-fermented, blistered Neapolitan crusts. Months later, in the windy city of Chicago, a deep dish cheese-pull changed everything.
              </p>
              <p>
                But coming back to Mumbai, something was missing. The technical perfection of Italian crusts wasn't being paired with the bold, punchy flavors our local palates crave. 
              </p>
              <p className="font-medium text-foreground text-xl border-l-4 border-primary pl-4 py-1">
                "Why can't we have the structural integrity of a perfect artisan crust, loaded with flavors that feel like home?"
              </p>
              <p>
                That question birthed <strong className="text-foreground">The Mix Culture</strong>. We don't believe in strict culinary rules. We believe in what tastes incredible. Whether it's a classic Margherita done right, or a Fusion Makhani pie that breaks all the rules — if it's delicious, it belongs here.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* artisan pizza making process flour hands */}
              <img 
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop" 
                alt="Hands dusting flour on pizza dough" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">The Journey</h2>
          
          <div className="space-y-12">
            {[
              { year: "2019", title: "The Dream Begins", desc: "Traveling the world, eating too much pizza, and taking notes." },
              { year: "2020", title: "Kitchen Experiments", desc: "Hundreds of failed dough batches in a tiny home kitchen to perfect the hydration ratio." },
              { year: "2022", title: "Doors Open", desc: "Mix Culture opens its cozy doors in Vile Parle East. The neighborhood embraces us." },
              { year: "2023", title: "Hidden Gem Status", desc: "Word of mouth spreads. Food bloggers name us a top hidden gem for deep dish." },
              { year: "2024", title: "10,000 Pizzas Later", desc: "Still making every single dough ball by hand. No shortcuts. Ever." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 group"
              >
                <div className="sm:w-32 shrink-0">
                  <span className="font-display text-3xl font-bold text-secondary group-hover:text-primary transition-colors">{item.year}</span>
                </div>
                <div className="flex-1 pb-12 sm:border-l-2 border-background/20 sm:pl-8 relative">
                  <div className="hidden sm:block absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-secondary group-hover:bg-primary transition-colors" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-background/70 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">Come Be Part of the Story</h2>
          <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
            <Link href="/visit">Visit Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
