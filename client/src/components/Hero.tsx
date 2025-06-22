
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Link } from "wouter";
import { useState, useRef } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 mb-8 border border-white/10">
              <Sparkles className="w-4 h-4 text-accent-blue" />
              <span className="text-sm text-pale-blue">Mentorship on Demand</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">A Fair-trade</span>
              <br />
              <span className="text-white">AI Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-pale-blue mb-8 max-w-3xl lg:max-w-none leading-relaxed">
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

          {/* Right Video */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black max-w-sm w-full">
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto block"
                onLoadedData={() => {
                  console.log('Video loaded successfully');
                  setVideoLoaded(true);
                }}
                onError={(e) => {
                  console.error('Video error:', e);
                  setVideoError(true);
                }}
                onCanPlay={() => {
                  console.log('Video can play');
                }}
              >
                <source src="/test-display.mp4" type="video/mp4" />
              </video>
              
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-pale-blue/20 rounded-2xl">
                  <div className="text-center text-pale-blue p-8">
                    <div className="w-12 h-12 border-4 border-pale-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-sm opacity-80">Loading video...</p>
                  </div>
                </div>
              )}
              
              {videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-pale-blue/20 rounded-2xl">
                  <div className="text-center text-pale-blue p-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-dark-navy" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">AI Tutoring Demo</h3>
                    <p className="text-sm opacity-80">Interactive learning experience</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
