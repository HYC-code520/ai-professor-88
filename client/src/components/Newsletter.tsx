
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-l from-dark-teal/50 to-dark-navy/70">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Us
        </h2>
        <h3 className="text-xl gradient-text font-semibold mb-6">AI tutors</h3>
        <p className="text-pale-blue text-lg mb-8 max-w-2xl mx-auto">
          Stay up to date with our journey and get notified when we add new experts
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 flex-1"
              required
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 px-6"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
