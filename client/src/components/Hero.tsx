
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showInitialLoader, setShowInitialLoader] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      if (!videoLoaded) {
        setVideoLoaded(true);
      }
    };

    const handleLoadedData = () => {
      if (!videoLoaded) {
        setVideoLoaded(true);
      }
    };

    // Add minimal event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [videoLoaded]);

  // Intersection Observer for video visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Initial loader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center animate-fade-in">
            {/* Left side - Content */}
            <div className="lg:col-span-3 text-center lg:text-left lg:pl-8">
              <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 mb-8 border border-white/10">
                <Sparkles className="w-4 h-4 text-accent-blue" />
                <span className="text-sm text-pale-blue">Mentorship on Demand</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">A Fair-trade</span>
                <br />
                <span className="text-white">AI Platform</span>
              </h1>
              
              <p className="text-lg md:text-xl text-pale-blue mb-8 leading-relaxed max-w-lg lg:max-w-none">
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
            <div className="lg:col-span-2 relative lg:pr-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden max-w-sm mx-auto relative">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ opacity: videoLoaded ? 1 : 0.3 }}
                >
                  <source src="/demo-copy.mov" type="video/quicktime" />
                  <source src="/demo-copy.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Initial page load spinner overlay - fully transparent */}
                {showInitialLoader && (
                  <div className="absolute inset-0 rounded-2xl flex items-center justify-center z-20">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-2 drop-shadow-lg"></div>
                      <div className="text-white text-sm font-medium drop-shadow-lg">Video Loading...</div>
                    </div>
                  </div>
                )}
                {/* Video loading spinner overlay */}
                {!videoLoaded && !showInitialLoader && (
                  <div className="absolute inset-0 rounded-2xl flex items-center justify-center z-10">
                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin bg-black/50 p-2"></div>
                  </div>
                )}
                
                {/* Subtle feather effect */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{
                  background: 'radial-gradient(ellipse at center, transparent 65%, rgba(26, 35, 50, 0.1) 75%, rgba(26, 35, 50, 0.3) 85%, rgba(26, 35, 50, 0.6) 95%, rgba(26, 35, 50, 0.8) 100%)'
                }}></div>
                
                {/* Light edge blending */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{
                  background: `
                    linear-gradient(to right, rgba(26, 35, 50, 0.3) 0%, transparent 20%, transparent 80%, rgba(42, 74, 90, 0.3) 100%),
                    linear-gradient(to bottom, rgba(26, 35, 50, 0.3) 0%, transparent 20%, transparent 80%, rgba(42, 74, 90, 0.3) 100%)
                  `
                }}></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-blue to-pale-blue rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-accent-blue rounded-full blur-3xl opacity-15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
