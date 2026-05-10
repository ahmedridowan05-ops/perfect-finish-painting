import { motion } from 'motion/react';
import { ChevronRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* The Brush Sweep Overlays */}
      <motion.div 
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
        className="absolute inset-0 z-50 bg-[#F4F1EA] pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }}
      />
      <motion.div 
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute inset-0 z-40 bg-[#0A1128] pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }}
      />

      {/* Video Background */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute inset-0 z-0 bg-[#0A1128]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-80"
          poster="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
        >
          {/* User's uploaded video from public/hero-video.mp4 */}
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* High-quality painting stock video as fallback */}
          <source 
            src="https://player.vimeo.com/external/494252666.sd.mp4?s=3ad70094b8e2e2837bc902c63f972b9a7101031c&profile_id=165" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Modern Overlay with gradient and subtle blur - tailored for white video transitioning to dark bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-[#0A1128]/40 to-[#0A1128]/90 backdrop-blur-[2px]"></div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={{
             hidden: { opacity: 0 },
             visible: {
               opacity: 1,
               transition: {
                 staggerChildren: 0.2,
                 delayChildren: 1.2
               }
             }
           }}
        >
          <div className="overflow-hidden mb-6">
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: "120%", rotate: 2 },
                visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tighter uppercase"
            >
              High Quality <br />
              <span className="text-[#0A1128]/85 [text-shadow:2px_0_#fff,-2px_0_#fff,0_2px_#fff,0_-2px_#fff,1px_1px_#fff,-1px_-1px_#fff,1px_-1px_#fff,-1px_1px_#fff] drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                Painting in Galway
              </span>
            </motion.h1>
          </div>

          <motion.p 
            variants={{
              hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
              visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, ease: "easeOut" } }
            }}
            className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-medium leading-relaxed tracking-tight"
          >
            Precision. Perfection. Not just another coat of paint.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              href="#quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C5A028] text-[#0A1128] border border-transparent px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2 group"
            >
              Book a Quote
              <ChevronRight className="mb-0.5 transition-transform group-hover:translate-x-1" size={20} />
            </motion.a>
            <motion.a 
              href="tel:+353873604825"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3"
            >
              <Phone size={20} className="text-[#0A1128]" />
              Call Jucelino
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2, duration: 1 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
