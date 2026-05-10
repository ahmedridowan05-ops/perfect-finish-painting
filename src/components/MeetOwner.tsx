import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function MeetOwner() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-20 group">
      
      {/* The "Roller" Sweep Reveal Overlay */}
      <motion.div 
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        whileInView={{ clipPath: "polygon(100% -20%, 100% 0%, 100% 120%, 100% 100%)" }} // Slanted wipe
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 z-50 pointer-events-none backdrop-grayscale backdrop-sepia bg-amber-900/10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch relative z-10">
        {/* Left Side: Editorial Content */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group/card border border-white/5 shadow-xl shadow-black/40 bg-[#121A30]">
          <div className="absolute inset-0 z-0">
             <img 
               src="/meet-owner.jpeg" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110 opacity-20 mix-blend-overlay"
               alt="Background Detail"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              <div className="overflow-hidden mb-8">
                <motion.h2 
                  variants={{
                    hidden: { opacity: 0, y: "100%" },
                    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="text-4xl md:text-6xl font-black text-white leading-[1] tracking-tighter uppercase"
                >
                  Meet <br />
                  <span className="text-[#D4AF37]">Jucelino</span>
                </motion.h2>
              </div>
              
              <div className="space-y-4">
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
                    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } }
                  }}
                  className="text-base md:text-lg text-stone-200 leading-relaxed font-medium"
                >
                  Jucelino is the owner and lead painter behind Renovation Paintwork, bringing 15 years of dedicated experience to homes across Galway.
                </motion.p>
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
                    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } }
                  }}
                  className="text-stone-400 text-sm leading-relaxed"
                >
                  His philosophy is simple: understand the job properly, prepare it the right way, and deliver a clean, consistent finish that lasts. Every project is treated with the utmost respect, whether it demands a smooth interior spray finish or a durable exterior repaint.
                </motion.p>
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
                    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } }
                  }}
                  className="text-stone-400 text-sm leading-relaxed"
                >
                  When you contact Jucelino, the focus is entirely on your vision. He guides you through the best methods for your specific space, providing a clear, honest, and comprehensive idea of what the work will involve.
                </motion.p>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.4 } }
                  }}
                  className="pt-6"
                >
                   <div className="flex gap-4 items-center">
                      <div className="w-12 h-px bg-[#D4AF37]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">Owner & Lead Painter</span>
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Portrait With CTA Card */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group/image shadow-2xl aspect-[4/5] lg:aspect-auto min-h-[400px]">
          <img 
            src="/jucielino.avif" 
            alt="Jucelino"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          
          <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="bg-white/10 backdrop-blur-2xl p-6 md:p-8 rounded-[2rem] border border-white/20 text-white"
            >
               <div className="mb-6 text-center">
                 <h4 className="text-white font-bold text-sm mb-1">Send details</h4>
                 <p className="text-white/70 text-[10px] leading-tight">Give a few details and Jucelino will get back to you.</p>
               </div>
               <motion.a 
                 href="#quote"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full bg-[#D4AF37] text-[#0A1128] px-6 py-4 rounded-xl font-bold text-center shadow-[#D4AF37]/30 shadow-xl flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-[10px]"
               >
                 <MessageSquare size={16} className="text-[#0A1128]" />
                 Talk to Jucelino
               </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
