import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Leaf, Flame as Spicy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Real menu from Mix Culture Pizzeria, Vile Parle East, Mumbai
const MENU_CATEGORIES = ["Pizza", "Pasta", "Nachos & Sides", "Salads & Sandwiches", "Desserts", "Drinks"];

const MENU_ITEMS = [
  // PIZZA
  { category: "Pizza", name: "Kulhad Pizza", price: 70, desc: "Our iconic pizza served in a traditional clay kulhad — a true signature you won't find anywhere else.", tags: ["Veg", "Best Seller"] },
  { category: "Pizza", name: "Chicago Deep Dish", price: 650, desc: "Thick golden buttery crust loaded with rich tomato sauce and molten cheese. Slow-baked for ultimate comfort.", tags: ["Best Seller"] },
  { category: "Pizza", name: "Queen Margherita", price: 450, desc: "Classic tomato sauce, fresh mozzarella on a hand-tossed base. Simple, timeless, perfect.", tags: ["Veg"] },
  { category: "Pizza", name: "Pestorita", price: 480, desc: "Fragrant pesto sauce base with mozzarella and fresh herbs. A lighter, aromatic favourite.", tags: ["Veg"] },
  { category: "Pizza", name: "Paneer Tikka Pizza", price: 520, desc: "Tandoori sauce, marinated paneer, capsicum, onion & mozzarella. The ultimate Indian-Italian fusion.", tags: ["Veg", "Spicy", "Best Seller"] },
  { category: "Pizza", name: "Cheese Overload", price: 550, desc: "Plain tomato sauce base with an obscene amount of cheese. No notes. Just joy.", tags: ["Veg"] },
  { category: "Pizza", name: "Spicy Mexican Pizza", price: 520, desc: "Jalapeños, salsa, refried beans, sweet corn and cheese on a crispy base — a fiesta every bite.", tags: ["Veg", "Spicy"] },
  { category: "Pizza", name: "Make Your Own Pizza", price: 490, desc: "Choose any sauce + 4 toppings + your cheese. Build your dream pizza.", tags: ["Veg"] },
  { category: "Pizza", name: "Pepperoni Classic", price: 580, desc: "Rich tomato sauce, mozzarella, premium spiced pepperoni slices.", tags: [] },
  
  // PASTA
  { category: "Pasta", name: "Penne Arrabbiata", price: 320, desc: "Spicy tomato sauce, roasted garlic, fresh basil and parmesan.", tags: ["Veg", "Spicy"] },
  { category: "Pasta", name: "Fettuccine Alfredo", price: 350, desc: "Rich creamy white sauce, parmesan, mushrooms.", tags: ["Veg"] },
  { category: "Pasta", name: "Spaghetti Bolognese", price: 380, desc: "Slow-cooked savory meat sauce, fresh herbs.", tags: [] },
  
  // NACHOS & SIDES
  { category: "Nachos & Sides", name: "Fully Loaded Nachos", price: 280, desc: "Tortilla chips piled with capsicum, sweet corn, refried beans, jalapeños, sour cream & salsa.", tags: ["Veg"] },
  { category: "Nachos & Sides", name: "Loaded Mexican Rice", price: 260, desc: "Mexican rice with olives, beans, sweet corn, baby corn, paneer, jalapeños, capsicum, onion & tomatoes.", tags: ["Veg", "Spicy"] },
  { category: "Nachos & Sides", name: "Classic Garlic Bread", price: 150, desc: "Toasted baguette, herbed garlic butter, crispy edges.", tags: ["Veg"] },
  { category: "Nachos & Sides", name: "Cheesy Garlic Bread", price: 180, desc: "Classic garlic bread topped with a loaded mozzarella pull.", tags: ["Veg"] },
  
  // SALADS & SANDWICHES
  { category: "Salads & Sandwiches", name: "Garden Fresh Salad", price: 200, desc: "Seasonal greens, cherry tomatoes, cucumber, olives with house vinaigrette.", tags: ["Veg"] },
  { category: "Salads & Sandwiches", name: "Classic Club Sandwich", price: 220, desc: "Toasted multi-grain, layers of fresh fillings, served with fries.", tags: [] },
  
  // DESSERTS
  { category: "Desserts", name: "Double Chocolate Lava Cake", price: 180, desc: "Warm chocolate cake with a molten dark chocolate centre. Served with vanilla ice cream.", tags: ["Veg", "Best Seller"] },
  { category: "Desserts", name: "Tiramisu", price: 200, desc: "Italian classic — mascarpone, espresso-soaked ladyfingers, dusted with cocoa.", tags: ["Veg"] },
  
  // DRINKS
  { category: "Drinks", name: "Fresh Lemonade", price: 120, desc: "Freshly squeezed lemons, zesty and chilled.", tags: [] },
  { category: "Drinks", name: "Iced Tea", price: 100, desc: "Peach or lemon — brewed and chilled.", tags: [] },
  { category: "Drinks", name: "Cold Coffee", price: 150, desc: "Rich espresso blend, sweet, frothy milk.", tags: [] },
  { category: "Drinks", name: "Craft Sodas", price: 90, desc: "Seasonal artisanal flavours — ask your server.", tags: [] },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  return (
    <>
      <Helmet>
        <title>Menu - Chicago Deep Dish, Fusion Pizzas | Mix Culture Pizzeria</title>
        <meta name="description" content="Explore our menu of artisanal pizzas, pastas, and fusion dishes. Order online or dine in at Vile Parle East." />
      </Helmet>

      {/* Header */}
      <section className="bg-foreground py-20 px-4 text-center relative overflow-hidden">
        {/* abstract food pattern dark subtle */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-background mb-4">Our Menu</h1>
          <p className="text-background/80 text-lg max-w-2xl mx-auto">
            Crafted with passion, baked with fire. Discover your next favorite slice.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background min-h-[60vh]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sticky Category Nav */}
          <div className="sticky top-[72px] md:top-[84px] z-30 bg-background/95 backdrop-blur-md py-4 mb-8 border-b border-border -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {MENU_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    // Smooth scroll slightly up to account for header if clicking below
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {MENU_ITEMS.filter(item => item.category === activeCategory).map((item, i) => (
              <Card key={i} className="p-6 bg-card border-border/50 hover:border-primary/30 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-bold text-lg text-secondary shrink-0">₹{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                
                {item.tags.length > 0 && (
                  <div className="flex gap-2 mt-auto pt-4 border-t border-border/30">
                    {item.tags.includes("Veg") && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-md">
                        <Leaf className="w-3 h-3" /> Veg
                      </span>
                    )}
                    {item.tags.includes("Spicy") && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-destructive bg-destructive/10 px-2 py-1 rounded-md">
                        <Spicy className="w-3 h-3" /> Spicy
                      </span>
                    )}
                    {item.tags.includes("Best Seller") && (
                      <span className="flex items-center gap-1 text-xs font-semibold text-secondary-foreground bg-secondary/20 px-2 py-1 rounded-md">
                        ⭐ Best Seller
                      </span>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </motion.div>
          
        </div>
      </section>

      {/* Fixed Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-lg border-t border-border z-40 md:hidden flex justify-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <Button asChild size="lg" className="w-full rounded-xl text-lg h-14 bg-primary text-primary-foreground">
          <a href="/#order">Order Now</a>
        </Button>
      </div>
    </>
  );
}
