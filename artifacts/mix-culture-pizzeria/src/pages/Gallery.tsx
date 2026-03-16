import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const GALLERY_IMAGES = [
  // Real photos from Mix Culture Pizzeria (Zomato & Google)
  { id: 1, src: "https://b.zmtcdn.com/data/pictures/0/20036620/97186426cbcd471a568082970c97d6e1.jpg", category: "Pizzas", title: "Signature Pizza" },
  { id: 2, src: "https://b.zmtcdn.com/data/pictures/0/20036620/76f14b85de6b156e20ff63bcb2e85448.jpeg", category: "Pizzas", title: "Chicago Deep Dish" },
  { id: 3, src: "https://b.zmtcdn.com/data/pictures/chains/0/20036620/55d55cf8d2d69b8dbcee405ee542295f.jpeg", category: "Restaurant", title: "At the Restaurant" },
  { id: 4, src: "https://b.zmtcdn.com/data/pictures/chains/0/20036620/588c411dbe4080d0a1df032cad77b3f0.jpeg", category: "Pizzas", title: "Fresh Pizza" },
  { id: 5, src: "https://b.zmtcdn.com/data/pictures/chains/0/20036620/46ceb70d6fc86ccbd64411765efb5a9a.jpeg", category: "Restaurant", title: "Restaurant Vibes" },
  { id: 6, src: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/7/21/214c83f9-4d10-4018-a3be-dc96a0ce6510_image4eee059cfc7fa42978254e17c136e4512.JPG", category: "Restaurant", title: "Mix Culture Pizzeria" },
  { id: 7, src: "https://lh3.googleusercontent.com/EWHitCxFHQ3-TkB8WAOPOzfdOTz7T67CUgjy28T2l77Iq_-3Ie8VIvwrPHT1fax_Q-wq-LGhhL4PFZm6RwtQTIKMfzY7603tJDar_-Y=w800-rw", category: "Pizzas", title: "Cheesy Goodness" },
  { id: 8, src: "https://lh3.googleusercontent.com/DmhMQnbhrV-sxr47r8vhF4CkVTZvJ0uxkVG4ELIqRirpKOgadTG8jB8r9B_isL0nwfTgYLRvmf4BCoKDwpCeDiSiUvYGLpQYcC-dcWdp9g=w800-rw", category: "Pizzas", title: "Pizza Close-up" },
  { id: 9, src: "https://lh3.googleusercontent.com/3p51G4r0J4NxFoW6Pd50cqoNyietV1LZyY5TzT3kDTwhNVxJ09FYMW4Th6rErBohLrbFRhbzR0jOzzUHOcmoVXWfONGGfAa5w1D_22sy=w800-rw", category: "Restaurant", title: "Cozy Corner" },
  { id: 10, src: "https://lh3.googleusercontent.com/yeqcabLpUMn_3JRvOfzFJtI_vfN0cJuiHJKeygTBtcL7-LkaUYomYqSzMmwHtSU_BJtAxVSJZyl3J9evFFDAQfq_IKUvJRBo09HJzzHRsw=w800-rw", category: "Pizzas", title: "Kulhad Pizza" },
  { id: 11, src: "https://lh3.googleusercontent.com/2BdCFFAnIxt03OGXuSbF5BeupTv7r4UNfk2Ryj0Eb6Uu143Gl182a7FjZzrXNiNb-mNVUY42yI9WqQFyRERHgDFzaZk23Uc31I9mGMWq=w800-rw", category: "People", title: "Happy Guests" },
  { id: 12, src: "https://lh3.googleusercontent.com/oFZXMTXhB402vhWCojopbZcKG0c6QWwvNCmeT2amMZzBmmroroDIHd-wRJ711RFMV-e2hMicjFvuYxX6WCoXF-PHv3-1Lzk0PSIxQMqI1w=w800-rw", category: "Restaurant", title: "The Space" },
];

const FILTERS = ["All", "Pizzas", "Restaurant", "People", "Sides"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages = activeFilter === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Gallery | Mix Culture Pizzeria - Best Pizza Photos Mumbai</title>
        <meta name="description" content="Feast your eyes on our handcrafted pizzas, cozy restaurant interior, and happy guests at The Mix Culture." />
      </Helmet>

      <section className="py-20 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">Gallery</h1>
            <p className="text-muted-foreground text-lg">Food worth photographing.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter 
                    ? "bg-foreground text-background" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
                  className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group bg-muted"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                    <ZoomIn className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="font-display font-bold text-lg">{img.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full bg-black rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()} // Prevent click from bubbling to backdrop
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-full max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-display text-2xl text-white font-bold">{selectedImage.title}</h3>
                <p className="text-white/70">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
