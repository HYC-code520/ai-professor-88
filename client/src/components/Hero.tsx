
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-accent-blue" />
            <span className="text-sm text-pale-blue">Mentorship on Demand</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">A Fair-trade</span>
            <br />
            <span className="text-white">AI Platform</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pale-blue mb-8 max-w-3xl mx-auto leading-relaxed">
            Sky rocket your business and life goals with real time mentorship from the world's best experts with a simple hello.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/chat">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 px-8 py-6 text-lg hover-glow group"
              >
                Try it for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-pale-blue hover:text-accent-blue hover:bg-white/5 px-8 py-6 text-lg border border-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
