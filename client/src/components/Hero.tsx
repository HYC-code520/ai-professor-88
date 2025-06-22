
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
            <div className="w-full max-w-sm bg-yellow-500 p-4 rounded-2xl">
              <h3 className="text-black font-bold mb-2">Video Debug Section</h3>
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                controls
                width="320"
                height="240"
                className="w-full bg-red-500 border-4 border-blue-500"
              >
                <source src="/jeremy-video.mp4" type="video/mp4" />
                <source src="/test-display.mp4" type="video/mp4" />
                <p className="text-black">Your browser does not support HTML5 video.</p>
              </video>
              <p className="text-black mt-2">If you see this yellow box but no video, there's a video loading issue.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
