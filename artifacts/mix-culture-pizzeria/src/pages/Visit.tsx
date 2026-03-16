import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Car, Train } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Visit() {
  return (
    <>
      <Helmet>
        <title>Find Us - Pizza Near Vile Parle East | Mix Culture Pizzeria</title>
        <meta name="description" content="Location, opening hours, and directions to Mix Culture Pizzeria in Vile Parle East, Mumbai." />
      </Helmet>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">Visit Us</h1>
            <p className="text-muted-foreground text-lg">Your table is waiting in Vile Parle East.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Info Column */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              
              <Card className="p-8 border-border/50 bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      Shop 4, Anand Building,<br />
                      Near RBL Bank, Navpada Road,<br />
                      Vile Parle East, Mumbai 400057
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Train className="w-4 h-4" /> 5 min from Station
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Car className="w-4 h-4" /> Street Parking
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/50 w-full my-6" />

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-full text-secondary-foreground shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">Hours</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-muted-foreground">
                        <span>Monday – Sunday</span>
                        <span className="font-medium text-foreground">12:00 Noon – 12:00 Midnight</span>
                      </li>
                    </ul>
                    <p className="text-sm text-accent font-medium mt-4">Open every day of the week!</p>
                  </div>
                </div>
              </Card>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Need to Know</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-border">
                    <AccordionTrigger className="text-lg font-medium hover:text-primary">Do you take reservations?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      We primarily operate on a walk-in basis! For larger groups of 6 or more, please give us a call ahead of time and we'll do our best to accommodate you.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-border">
                    <AccordionTrigger className="text-lg font-medium hover:text-primary">Is parking available?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      Street parking is available on Navpada Road near the restaurant. Auto rickshaw and cab drop-offs are very convenient right at our doorstep opposite RBL Bank.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-border">
                    <AccordionTrigger className="text-lg font-medium hover:text-primary">What's the best time to visit?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      For the most relaxed experience, weekday evenings between 6 PM and 8 PM are perfect. Weekends get busy, so arriving slightly early (around 7 PM) helps beat the rush!
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>

            {/* Map Column */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="h-full">
              <div className="rounded-3xl h-[400px] lg:h-full min-h-[500px] relative overflow-hidden border border-border flex flex-col">
                <iframe
                  title="Mix Culture Pizzeria Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.2!2d72.8457620!3d19.0979137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7db4a5b5a5b%3A0x0!2sMix+Culture+Pizzeria!5e0!3m2!1sen!2sin!4v1616161616161"
                  className="w-full flex-1 rounded-t-3xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-card border-t border-border p-4 flex items-center justify-between rounded-b-3xl">
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">Shop 4, Anand Building, Near RBL Bank, Vile Parle East</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=19.0979137,72.845762"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="rounded-full shrink-0">
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
