
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 mb-8 border border-white/10">
              <Sparkles className="w-4 h-4 text-accent-blue" />
              <span className="text-sm text-pale-blue">Mentorship on Demand</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
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

          {/* Right side - Video */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0 relative">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Enhanced feather effect overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{
                background: 'radial-gradient(ellipse at center, transparent 45%, rgba(18, 25, 38, 0.1) 65%, rgba(18, 25, 38, 0.3) 75%, rgba(18, 25, 38, 0.6) 85%, rgba(18, 25, 38, 0.9) 95%, rgba(18, 25, 38, 1) 100%)'
              }}></div>
              
              {/* Additional edge fade using linear gradients */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{
                background: `
                  linear-gradient(to right, rgba(18, 25, 38, 0.8) 0%, transparent 15%, transparent 85%, rgba(18, 25, 38, 0.8) 100%),
                  linear-gradient(to bottom, rgba(18, 25, 38, 0.8) 0%, transparent 15%, transparent 85%, rgba(18, 25, 38, 0.8) 100%)
                `
              }}></div>
              
              {/* Subtle inset shadow for depth */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                boxShadow: 'inset 0 0 80px 20px rgba(18, 25, 38, 0.4)'
              }}></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-blue to-pale-blue rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-accent-blue rounded-full blur-3xl opacity-15"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
