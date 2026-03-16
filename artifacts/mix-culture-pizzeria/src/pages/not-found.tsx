import { Link } from "wouter";
import { Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-background">
      <div className="bg-muted p-6 rounded-full mb-8">
        <Pizza className="w-16 h-16 text-muted-foreground opacity-50" />
      </div>
      <h1 className="font-display text-5xl font-bold text-foreground mb-4">404 - Slice Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Looks like this page got lost in the oven. Let's get you back to the good stuff.
      </p>
      <Button asChild size="lg" className="rounded-full">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
