import { motion } from 'motion/react';
import { ShieldCheck, CloudRain, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white leading-[1] tracking-tighter uppercase">
            The Difference <br />
            Between <span className="text-[#D4AF37]">"Done"</span> <br />
            and <span className="text-[#D4AF37]">"Properly"</span>.
          </h2>
        </motion.div>
        
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-md text-stone-400 font-medium text-base leading-relaxed"
        >
          A master-grade finish isn’t just about the top coat: it’s about the technical integrity of the layers beneath it.
        </motion.p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Card 1: The Real Cost */}
        <motion.div 
          variants={cardVariants}
          className="bg-[#121A30] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col h-full"
        >
          <motion.div variants={itemVariants} className="w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center mb-8">
            <ShieldCheck size={24} />
          </motion.div>
          <motion.h3 variants={itemVariants} className="text-xl font-bold text-white mb-6 uppercase tracking-tight">1. The Real Cost of <br />a Lasting Finish</motion.h3>
          <motion.p variants={itemVariants} className="text-stone-400 mb-8 leading-relaxed text-xs">
            When you compare a cheap quote to a professional quote, you aren't comparing the same service. The difference isn't the paint: it's the labor you don't see.
          </motion.p>
          
          <div className="space-y-4 mt-auto">
              <motion.div variants={itemVariants} className="bg-[#0A1128]/50 p-5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  The 70/30 Rule
                </h4>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  A proper paint job is 70% preparation and 30% application. Budget painters rush the prep. We spend days scraping, sanding, and filling before a tin of paint is opened.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-[#0A1128]/50 p-5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Material Lifespan
                </h4>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Cheap paints start chalking within a year. We use premium, high durability coatings designed to last a decade, not just until the check clears.
                </p>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/5 italic text-stone-500 text-[10px]">
              The most expensive paint job you will ever pay for is the cheap one you have to redo in two years.
            </motion.div>
          </motion.div>

        {/* Card 2: Galway's Weather */}
        <motion.div 
          variants={cardVariants}
          className="bg-[#0A1128] border border-white/5 p-10 rounded-[2.5rem] text-white shadow-2xl flex flex-col h-full relative overflow-hidden"
        >
          <motion.div variants={itemVariants} className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-8 backdrop-blur-md">
            <CloudRain size={24} />
          </motion.div>
          <motion.h3 variants={itemVariants} className="text-xl font-bold mb-6 uppercase tracking-tight">2. Battling Galway’s <br />Unforgiving Weather</motion.h3>
          <motion.p variants={itemVariants} className="text-white/60 mb-8 leading-relaxed text-xs">
            Exterior painting in Galway is your home's primary defense against Atlantic wind, rain, and salt air. A standard "wash and paint" will fail.
          </motion.p>
          
          <div className="space-y-4 mt-auto">
              <motion.div variants={itemVariants} className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold mb-1 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4AF37]">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Eradicating Moisture
                </h4>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  We don't just paint over green staining. We treat masonry to kill algae at the root, ensuring it doesn't bleed through the new coat.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold mb-1 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4AF37]">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Weather Shielding
                </h4>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  We exclusively use elastomeric coatings that flex with the building and repel heavy, wind driven rain while allowing walls to breathe.
                </p>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/10 italic text-white/30 text-[10px]">
              We stabilize powdery render mechanically before applying specialized primers for an unbreakable bond.
            </motion.div>
          </motion.div>

        {/* Card 3: Application Methods */}
        <motion.div 
          variants={cardVariants}
          className="bg-[#121A30] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col h-full"
        >
          <motion.div variants={itemVariants} className="w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center mb-8">
            <Sparkles size={24} />
          </motion.div>
          <motion.h3 variants={itemVariants} className="text-xl font-bold text-white mb-6 uppercase tracking-tight">3. Precision Application: <br />Spraying vs. Traditional</motion.h3>
          <motion.p variants={itemVariants} className="text-stone-400 mb-8 leading-relaxed text-xs">
            We don't force one method onto every job. We choose the exact technique required for a flawless, technical result.
          </motion.p>
          
          <div className="space-y-4 mt-auto">
              <motion.div variants={itemVariants} className="bg-[#0A1128]/50 p-5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Airless Spray Painting
                </h4>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Delivers a glass smooth, factory grade finish on bare plaster or extensions. Requires intense, meticulous masking: a technical process we've mastered.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-[#0A1128]/50 p-5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Traditional Brush & Roller
                </h4>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Superior for occupied homes and detailed trim. We use premium microfibre rollers to lay off paint perfectly with zero splatters or bleed through.
                </p>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/5 italic text-stone-500 text-[10px]">
              Straightforward advice on which method suits your specific property.
            </motion.div>
          </motion.div>
        </motion.div>
    </div>
  );
}
