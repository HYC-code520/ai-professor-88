import { useEffect, useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Log video events for debugging
      const handleLoadStart = () => console.log("Video load started");
      const handleLoadedMetadata = () => console.log("Video metadata loaded");
      const handleLoadedData = () => console.log("Video data loaded");
      const handleCanPlay = () => console.log("Video can play");
      const handlePlay = () => console.log("Video playing");
      const handleError = (e: Event) => console.error("Video error:", e);

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('play', handlePlay);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="relative w-full max-w-lg aspect-[4/3] bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => console.log("Video loaded successfully")}
        >
          <source src="/demo.mov" type="video/quicktime" />
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay gradient for better integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default VideoSection;