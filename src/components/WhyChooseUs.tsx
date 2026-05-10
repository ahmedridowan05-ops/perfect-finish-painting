import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Star, ThumbsUp, Leaf } from 'lucide-react';

const features = [
  {
    title: 'We Focus on the Details',
    description: 'Every line, surface, and finish is handled with care to deliver a smooth, high quality result.',
    icon: <Award className="text-[#D4AF37]" size={32} />,
    bg: '/why-choose-us/details.jpeg',
  },
  {
    title: 'You’re Fully Covered',
    description: 'Your property is protected at every stage, with full insurance in place from start to finish.',
    icon: <ShieldCheck className="text-[#D4AF37]" size={32} />,
    bg: '/why-choose-us/covered.jpeg',
  },
  {
    title: 'We Value Honesty',
    description: 'Clear, simple quotes based on your project, with no hidden costs or unexpected changes.',
    icon: <Clock className="text-[#D4AF37]" size={32} />,
    bg: '/why-choose-us/honest.jpeg',
  },
  {
    title: 'Local & Reliable',
    description: 'Based in Galway, with a clear understanding of local homes, conditions, and what lasts over time.',
    icon: <ThumbsUp className="text-[#D4AF37]" size={32} />,
    bg: '/why-choose-us/local.jpeg',
  },
  {
    title: 'We Use the Right Materials',
    description: 'Using high quality materials and the right techniques to deliver a durable, consistent finish.',
    icon: <Leaf className="text-[#D4AF37]" size={32} />,
    bg: '/why-choose-us/material.jpeg',
  },
  {
    title: 'Trusted by Homeowners',
    description: 'Chosen across Galway for reliable service, consistent quality, and clean finishes.',
    icon: <Star className="text-[#D4AF37]" size={32} />,
    bg: '/why-choose-us/trusted.jpeg',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white leading-[1] tracking-tighter uppercase">
            What You <br />
            Can <span className="text-[#D4AF37]">Expect.</span>
          </h2>
        </motion.div>
        
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-md text-stone-400 font-medium text-base leading-relaxed"
        >
          A straightforward approach built on premium materials, proper preparation, and a flawless finish designed to last.
        </motion.p>
      </div>

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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, rotateX: -30, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                rotateX: 0,
                y: 0, 
                scale: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            whileHover={{ 
              rotateX: -2, 
              rotateY: 2, 
              scale: 1.05,
              z: 50,
              transition: { duration: 0.4, ease: "easeOut" } 
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative h-[240px] md:h-[400px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 bg-[#121A30] shadow-2xl perspective-1000"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={feature.bg} 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000" 
                alt={feature.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0A1128]/70" />
            </div>

            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col items-center justify-center text-center">
              <div className="mb-3 md:mb-4 p-2 md:p-3 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-xl group-hover:bg-[#1E293B] group-hover:border-[#D4AF37]/50 transition-colors duration-500">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 24, className: "md:hidden text-[#D4AF37]" })}
                {React.cloneElement(feature.icon as React.ReactElement, { size: 32, className: "hidden md:block text-[#D4AF37]" })}
              </div>
              <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-white mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-stone-400 text-[10px] md:text-[11px] leading-relaxed max-w-[220px]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
