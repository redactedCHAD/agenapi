import { motion } from 'motion/react';

export default function PhilosophySection() {
  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 text-center md:text-left"
        >
          Innovation <span className="font-instrument italic text-white/40">x</span> Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] w-full">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col flex-1 justify-center"
          >
            <div className="mb-8 md:mb-12">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4 text-left">Assemble your swarm</p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed text-left">
                Every meaningful breakthrough begins at the intersection of capable models and robust infrastructure. We operate at that crossroads, giving your agents the tools to scale operations and reshape workflows.
              </p>
            </div>
            
            <div className="w-full h-px bg-white/10 mb-8 md:mb-12" />
            
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4 text-left">Scale with precision</p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed text-left">
                We believe that the best systems emerge when autonomy meets control. Our APIs are designed to integrate seamlessly, turning isolated agents into a synchronized, highly capable workforce over any domain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
