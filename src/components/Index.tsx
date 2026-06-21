import { useEffect, useRef } from 'react';
import { ArrowRight, Globe, Instagram, Twitter } from 'lucide-react';

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeTimeout: NodeJS.Timeout;
    let pfadeTimeout: NodeJS.Timeout;

    const handleCanPlay = () => {
      video.play().catch(e => console.error(e));
      animateOpacity(video, 0, 1, 500);
    };

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.55 && video.style.opacity === '1') {
         animateOpacity(video, 1, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(e => console.error(e));
        animateOpacity(video, 0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const animateOpacity = (element: HTMLElement, start: number, end: number, duration: number) => {
    let startTime: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      element.style.opacity = (start + (end - start) * percentage).toString();
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  return (
    <section className="min-h-screen relative flex flex-col overflow-hidden">
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260520_111942_8fc50f9e-4dfd-45c1-81bb-d93342a23d87.mp4"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
      />
      
      <nav className="relative z-20 px-6 py-6 w-full max-w-5xl mx-auto">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-white mr-2" />
            <span className="text-white font-semibold text-lg">AgentAPI</span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Agents</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Documentation</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">Login</button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center -translate-y-10 sm:-translate-y-[15%]">
        <h1 className="text-5xl sm:text-6xl md:text-8xl text-white tracking-tight font-instrument mb-8 md:mb-10 leading-tight">
          Connect them <em className="italic">all</em>.
        </h1>
        
        <div className="max-w-lg w-full mx-auto flex flex-col items-center gap-5 sm:gap-6">
          <div className="liquid-glass rounded-full w-full pl-5 pr-1.5 py-1.5 flex items-center gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent text-white placeholder:text-white/40 flex-1 outline-none min-w-0 text-sm sm:text-base"
            />
            <button className="bg-white rounded-full p-2.5 sm:p-3 text-black shrink-0 hover:bg-white/90 transition-colors">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          <p className="text-white/80 text-sm leading-relaxed px-2 max-w-sm md:max-w-md mx-auto">
            The ultimate API resource for AI agents. Integrate Hermes, Openclaw, Claude Code, Codex, and more into your workflows effortlessly.
          </p>
          
          <button className="liquid-glass rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors mt-2">
            View Documentation
          </button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Instagram className="w-5 h-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Twitter className="w-5 h-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
