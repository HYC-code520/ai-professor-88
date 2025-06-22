
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import VideoSection from "@/components/VideoSection";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 mb-8 border border-white/10">
              <Sparkles className="w-4 h-4 text-accent-blue" />
              <span className="text-sm text-pale-blue">Mentorship on Demand</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">A Fair-trade</span>
              <br />
              <span className="text-white">AI Platform</span>
            </h1>
            
            <p className="text-lg md:text-xl text-pale-blue mb-8 leading-relaxed">
              Sky rocket your business and life goals with real time mentorship from the world's best experts with a simple hello.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link href="/entrepreneur-chat">
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

          {/* Right column - Video */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <VideoSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
