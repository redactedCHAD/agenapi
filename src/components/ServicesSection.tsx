import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">What we do</h2>
          <p className="text-white/40 text-sm hidden md:block">Our services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0 }}
            className="liquid-glass rounded-3xl overflow-hidden group flex flex-col"
          >
            <div className="aspect-video relative overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <p className="uppercase tracking-widest text-white/40 text-xs">Integration</p>
                <div className="liquid-glass rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight text-left">Model Routing</h3>
                <p className="text-white/50 text-sm leading-relaxed text-left">
                  We seamlessly connect Hermes, Claude, and Codex, allowing your systems to route tasks to the most capable agent dynamically.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="liquid-glass rounded-3xl overflow-hidden group flex flex-col"
          >
            <div className="aspect-video relative overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <p className="uppercase tracking-widest text-white/40 text-xs">Infrastructure</p>
                <div className="liquid-glass rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight text-left">Scalable Execution</h3>
                <p className="text-white/50 text-sm leading-relaxed text-left">
                  From test environments to production, our infrastructure guarantees reliable execution and orchestration for your entire agent fleet.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
