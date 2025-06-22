import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById('demo-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-navy to-dark-teal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            See AI tutors in Action
          </h2>
          <p className="text-pale-blue text-lg mb-12 max-w-2xl mx-auto">
            Watch how our AI-powered tutoring platform transforms learning with personalized, expert guidance.
          </p>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl glass-effect border border-white/10">
            <video
              id="demo-video"
              className="w-full h-auto"
              controls
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/AItutors-demo-video.mov" type="video/mp4" />
              <source src="/AItutors-demo-video.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
            
            {/* Custom play/pause overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Button
                onClick={handlePlayPause}
                className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full transition-all duration-300"
                size="lg"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;