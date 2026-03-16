import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Phone, Mail, Instagram, MapPin, Send, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

// Form Schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Simulate API call
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <>
      <Helmet>
        <title>Contact Mix Culture Pizzeria | Best Pizza Vile Parle East</title>
        <meta name="description" content="Get in touch with Mix Culture Pizzeria for catering, events, or general inquiries." />
      </Helmet>

      <section className="py-20 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Details Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-2 space-y-6"
            >
              <Card className="p-8 bg-card border-border/50 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-8">Contact Info</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">Call Us</p>
                        <a href="tel:+918850717019" className="text-muted-foreground hover:text-primary transition-colors">+91 88507 17019</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">WhatsApp</p>
                        <a href="https://wa.me/918850717019" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">+91 88507 17019</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">Location</p>
                        <p className="text-muted-foreground">Shop 4, Anand Building, Near RBL Bank,<br/>Navpada Road, Vile Parle East, Mumbai 400057</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="font-bold text-foreground mb-4">Catering & Events</h4>
                  <p className="text-muted-foreground text-sm mb-6">
                    Planning a party? We do catering for private events, corporate gatherings, and celebrations. Let's make it delicious.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-muted rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <Card className="p-8 md:p-10 border-border/50 shadow-lg shadow-black/5 bg-background">
                <h3 className="font-display text-3xl font-bold text-foreground mb-8">Send a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-muted/50 border-border h-12 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+91" className="bg-muted/50 border-border h-12 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-muted/50 border-border h-12 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[150px] bg-muted/50 border-border resize-none focus-visible:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg shadow-md hover-elevate group">
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
