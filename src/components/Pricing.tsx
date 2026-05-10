import { motion } from 'motion/react';
import { Timer, Palette, Paintbrush, Maximize, Droplets, Camera, Calendar, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const averages = [
    { label: "1 Bedroom", price: "€450 – €650" },
    { label: "2 Bed Apartment", price: "€1,800 – €2,800" },
    { label: "3 Bed House", price: "€3,000 – €4,500" },
    { label: "4 Bed House", price: "€4,000 – €6,000+" },
  ];

  const variables = [
    {
      title: "The Preparation",
      description: "Filling cracks, sanding walls, and treating mould takes time. More intensive prep guarantees a vastly superior finish.",
      icon: <Timer size={24} />
    },
    {
      title: "Colour Transformations",
      description: "Going from dark to bright requires extra coats and materials. Refreshing same colours is faster.",
      icon: <Palette size={24} />
    },
    {
      title: "Woodwork & Details",
      description: "Skirting boards, doors, and window frames take significantly longer than straightforward walls.",
      icon: <Paintbrush size={24} />
    },
    {
      title: "Layout & Size",
      description: "Smaller rooms or tight spaces require detailed 'cutting in', which matters as much as total square footage.",
      icon: <Maximize size={24} />
    },
    {
      title: "Paint Quality",
      description: "Upgrading to premium, washable finishes (e.g., Dulux) or designer brands requires a higher upfront cost for longevity.",
      icon: <Droplets size={24} />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase">
            Transparent <br />
            <span className="text-[#D4AF37]">Pricing.</span>
          </h2>
        </motion.div>
        
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-md text-stone-400 font-medium text-base leading-relaxed"
        >
          What a Proper Finish Actually Costs. Realistic 2026 investment price ranges. Note: These represent average min-max ranges based on project complexity.
        </motion.p>
      </div>

      {/* Grid Based Pricing (Technical Luxury) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/5 rounded-[2rem] overflow-hidden bg-[#121A30] shadow-2xl shadow-black/40 mb-20"
      >
        {averages.map((item, i) => (
          <motion.div 
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            whileHover={{ backgroundColor: "rgba(10,17,40,0.5)" }}
            className="p-8 md:p-10 border-b sm:border-b border-white/5 last:border-b-0 sm:border-r last:sm:border-r-0 lg:border-b-0 flex flex-col justify-between min-h-[160px] md:h-[260px] group/card"
          >
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em] mb-4 block">{item.label}</span>
              
              {/* Blur Scratch-off Reveal */}
              <div className="relative mb-2 inline-block">
                 <motion.div 
                   initial={{ filter: "blur(12px)", opacity: 0.4 }}
                   whileInView={{ filter: "blur(0px)", opacity: 1 }}
                   viewport={{ once: true, amount: 0.8 }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 + 0.6 }}
                   className="text-xl md:text-3xl font-black text-white tracking-tight"
                 >
                   {item.price}
                 </motion.div>
                 
                 {/* The "Paint Stroke" Blur Block */}
                 <motion.div 
                   initial={{ width: "110%", opacity: 1 }}
                   whileInView={{ width: "0%", opacity: 0 }}
                   viewport={{ once: true, amount: 0.8 }}
                   transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: i * 0.2 + 0.4 }}
                   className="absolute top-1/2 -translate-y-1/2 left-[-5%] h-8 bg-[#D4AF37]/80 blur-md rounded-full origin-right mix-blend-multiply"
                   style={{ zIndex: 10 }}
                 />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-px bg-white/10 w-full group-hover/card:bg-[#D4AF37] transition-colors duration-500" />
              <div className="text-[8px] font-bold text-[#D4AF37] uppercase tracking-widest">Price Range</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Variables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
          <div className="space-y-4 text-center lg:text-left">
             <h3 className="text-2xl font-black text-white leading-none uppercase tracking-tight">
               The <span className="text-[#D4AF37]">Variables</span>
             </h3>
             <p className="text-stone-400 text-[13px] font-medium">Factors that dictate your specific quote.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {variables.map((v, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-[#0A1128] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-[#0A1128] transition-all duration-500 text-stone-400">
                   {v.icon}
                </div>
                <div>
                   <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-tight">{v.title}</h4>
                   <p className="text-stone-400 text-[11px] leading-relaxed max-w-sm font-medium">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual proof + CTA - Removing text from pic */}
        <div className="relative group overflow-hidden rounded-[2.5rem] aspect-square lg:aspect-[4/3] shadow-premium">
           <img 
              src="/GALLERY PIC/Jucelino LP 7.avif" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Luxury Finish"
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-all duration-700 flex items-center justify-center">
              <motion.a 
                 href="#quote"
                 whileHover={{ scale: 1.05 }}
                 className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Request Quote
              </motion.a>
           </div>
        </div>
      </div>
    </div>
  );
}
