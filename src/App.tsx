import { motion } from "motion/react";
import { Mail, Linkedin, Palette } from "lucide-react";

const PlayfulText = ({ text }: { text: string }) => {
  const variations = [
    { scale: 1.1, rotate: -4, y: 2 },
    { scale: 0.9, rotate: 6, y: -2 },
    { scale: 1.2, rotate: -2, y: 0 },
    { scale: 0.8, rotate: -8, y: 5 },
    { scale: 1.05, rotate: 3, y: -4 },
    { scale: 1.15, rotate: -5, y: 3 },
    { scale: 0.95, rotate: 4, y: -1 },
  ];
  return (
    <div className="flex flex-wrap font-display text-[15vw] md:text-[9vw] leading-none uppercase tracking-[-0.04em]">
      {text.split('').map((char, i) => {
        if (char === ' ') return <span key={i} className="w-[4vw] inline-block">&nbsp;</span>;
        const v = variations[i % variations.length];
        return (
          <span
            key={i}
            className="inline-block"
            style={{
              transform: `scale(${v.scale}) rotate(${v.rotate}deg) translateY(${v.y}px)`,
              marginLeft: i !== 0 && text !== 'CONTENT' ? '-1.5vw' : '0'
            }}
          >
            {char}
          </span>
        )
      })}
    </div>
  )
}

const Lanyard = () => (
  <div className="absolute top-0 right-[8%] hidden lg:flex flex-col items-center pointer-events-none z-50">
    <div className="w-[2px] h-32 bg-caramel/40" />
    <motion.div
       animate={{ rotate: [-3, 3, -3] }}
       transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
       className="w-32 h-44 bg-offwhite rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] border border-neutral-200 flex flex-col items-center py-5 relative pointer-events-auto"
       style={{ transformOrigin: "top center" }}
    >
      <div className="w-10 h-[6px] rounded-full border border-neutral-300 absolute top-3 bg-white" />
      <div className="w-16 h-16 bg-sand/30 rounded-full mt-5 mb-3 overflow-hidden border-[3px] border-white shadow-sm flex justify-center items-end">
         <img src="https://api.dicebear.com/7.x/micah/svg?seed=Fernanda&backgroundColor=transparent" alt="Avatar" className="w-[120%] h-[120%] object-cover object-bottom" />
      </div>
      <div className="font-display uppercase text-[11px] tracking-widest text-neutral-900 mt-1">Designer</div>
      <div className="w-full h-3 bg-caramel mt-auto rounded-b-xl absolute bottom-0" />
    </motion.div>
  </div>
);

const SoftwareIcon = ({ name, color }: { name: string, color: string }) => (
  <div className="w-9 h-9 flex items-center justify-center rounded-[8px] text-white font-bold text-[12px] shadow-sm transform transition duration-300 hover:scale-110 hover:-translate-y-1 cursor-default" style={{ backgroundColor: color }}>
    {name}
  </div>
);

const HeroSection = () => (
  <div className="min-h-[70vh] flex flex-col justify-center px-6 md:px-16 pt-24 pb-12 relative overflow-hidden bg-white">
      <div className="absolute top-[-15%] right-[-5%] text-[400px] font-display text-sand/15 leading-none pointer-events-none select-none z-0">
        F.A
      </div>
      <div className="max-w-4xl z-10 relative mt-12 md:mt-0">
         <div className="text-[12px] md:text-[14px] text-neutral-700 mb-8 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-caramel block" />
            Hello, I'm <span className="font-bold text-caramel">Fernanda</span>.
         </div>

         <PlayfulText text="PORTFOLIO" />

         <div className="mt-12 text-[13px] md:text-[15px] text-neutral-700 max-w-[420px] leading-relaxed border-l-2 border-caramel pl-6">
           I craft digital experiences with a playful yet professional approach. Focused on distinctive visual design and robust UX systems for modern product teams.
         </div>
      </div>

      <div className="hidden md:block absolute bottom-0 right-[15%] w-[450px] h-[550px] z-10 pointer-events-none">
         <img src="https://api.dicebear.com/7.x/micah/svg?seed=Fernanda&backgroundColor=transparent&flip=true" alt="Illustration" className="w-full h-full object-contain drop-shadow-2xl translate-y-12" />
      </div>
  </div>
);

const BioSection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-16 py-28 bg-white border-t border-neutral-100 relative z-20">
    <div className="absolute top-0 left-8 text-[200px] font-display text-sand/10 leading-none -translate-y-1/2 pointer-events-none select-none">
      01
    </div>
    
    <div className="z-10 relative">
      <h3 className="text-[14px] font-bold tracking-[0.2em] text-neutral-900 mb-8 uppercase flex items-center gap-2">Experience</h3>
      <ul className="space-y-6 text-[12px] text-neutral-700">
        <li className="group">
          <div className="font-bold text-neutral-900 text-[14px] group-hover:text-caramel transition-colors">Senior Product Designer</div>
          <div className="mt-1.5 opacity-80">Nubank • 2022 - Present</div>
        </li>
        <li className="group">
          <div className="font-bold text-neutral-900 text-[14px] group-hover:text-caramel transition-colors">UX/UI Designer</div>
          <div className="mt-1.5 opacity-80">Natura • 2019 - 2022</div>
        </li>
      </ul>
    </div>

    <div className="z-10 relative">
      <h3 className="text-[14px] font-bold tracking-[0.2em] text-neutral-900 mb-8 uppercase">Education</h3>
      <ul className="space-y-6 text-[12px] text-neutral-700">
        <li>
          <div className="font-bold text-neutral-900 text-[14px]">Pós-Graduação em UI UX</div>
          <div className="mt-1.5 opacity-80">Belas Artes • 2020</div>
        </li>
        <li>
          <div className="font-bold text-neutral-900 text-[14px]">Design Gráfico</div>
          <div className="mt-1.5 opacity-80">Senac • 2015</div>
        </li>
      </ul>
    </div>

    <div className="z-10 relative">
      <h3 className="text-[14px] font-bold tracking-[0.2em] text-neutral-900 mb-8 uppercase">Contact</h3>
      <ul className="space-y-5 text-[12px] text-neutral-700">
        <li><a href="#" className="flex items-center gap-3 hover:text-caramel transition-colors"><Linkedin className="w-[18px] h-[18px] text-caramel"/> in/fernandaaliao</a></li>
        <li><a href="#" className="flex items-center gap-3 hover:text-caramel transition-colors"><Palette className="w-[18px] h-[18px] text-caramel"/> behance.net/feraliao</a></li>
        <li><a href="#" className="flex items-center gap-3 hover:text-caramel transition-colors"><Mail className="w-[18px] h-[18px] text-caramel"/> hello@fernanda.com</a></li>
      </ul>
    </div>

    <div className="z-10 relative">
      <h3 className="text-[14px] font-bold tracking-[0.2em] text-neutral-900 mb-8 uppercase">Softwares</h3>
      <div className="flex gap-2 flex-wrap max-w-[200px]">
        <SoftwareIcon name="Fg" color="#F24E1E" />
        <SoftwareIcon name="Ps" color="#31A8FF" />
        <SoftwareIcon name="Ai" color="#FF9A00" />
        <SoftwareIcon name="Id" color="#FF3366" />
        <SoftwareIcon name="Xd" color="#FF61F6" />
      </div>
    </div>
  </div>
);

const projects = [
  { id: '01', name: 'Travlo', desc: 'Travel booking platform redesign covering UX, UI and interaction design for mobile.', bg: 'bg-periwinkle' },
  { id: '02', name: 'Sanora', desc: 'E-commerce website for a cosmetics brand, focusing on high conversion rates.', bg: 'bg-cardsand' },
  { id: '03', name: 'Factory', desc: 'Complex B2B industrial dashboard mapping production flows and logistics.', bg: 'bg-sage' },
  { id: '04', name: 'Agoda', desc: 'Conceptual redesign of the hotel reservations app interface.', bg: 'bg-coral' },
  { id: '05', name: 'Balance', desc: 'Fintech mobile app prototype demonstrating micro-interactions.', bg: 'bg-sky' },
];

const ContentSection = () => (
  <div className="relative pt-32 bg-white z-10 w-full overflow-hidden border-t border-neutral-100">
    <div className="px-6 md:px-16 mb-20 relative z-20">
      <PlayfulText text="CONTENT" />
      <p className="text-[13px] text-neutral-500 max-w-md mt-6 font-sans leading-relaxed border-l-2 border-caramel pl-5">
        A curated selection of my latest work across UX, UI, and Product Design. Hover over the projects to explore.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[85vh] w-full border-t border-neutral-100">
      {projects.map((p, i) => (
        <div key={p.id} className={`${p.bg} relative group flex flex-col items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/20 last:border-0 min-h-[60vh] lg:min-h-full cursor-pointer transition-all duration-500 hover:brightness-105 p-8 lg:p-0`}>
            
            <div className="absolute right-[-10%] bottom-[-5%] text-[15rem] leading-none font-display text-white/20 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
              {p.id}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-full max-w-[240px] aspect-[1/2.1] lg:aspect-[9/19] bg-white rounded-[2rem] shadow-2xl border-[6px] border-white z-10 flex flex-col overflow-hidden relative mb-24 lg:mb-0 transition-transform duration-500 group-hover:-translate-y-6"
            >
              <div className="w-full h-5 flex justify-center items-center absolute top-0 bg-white z-20">
                <div className="w-12 h-1.5 bg-neutral-200 rounded-full mt-1" />
              </div>

              <div className="flex-1 px-4 pt-10 pb-4 flex flex-col gap-3 bg-neutral-50">
                <div className="h-28 w-full rounded-xl bg-neutral-200/60 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                </div>
                <div className="h-4 w-3/4 rounded-md bg-neutral-300" />
                <div className="h-3 w-1/2 rounded-md bg-neutral-200" />
                
                <div className="mt-auto flex gap-2">
                  <div className="h-12 flex-1 rounded-lg bg-caramel/20" />
                  <div className="h-12 flex-1 rounded-lg bg-neutral-200" />
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-8 left-8 right-8 z-20 transition-transform duration-500 group-hover:translate-x-2">
              <div className="text-white font-display text-4xl uppercase tracking-wide mb-2 drop-shadow-sm">{p.name}</div>
              <div className="text-white/95 text-[11px] md:text-[12px] font-sans leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 h-0 group-hover:h-auto max-w-[90%]">
                {p.desc}
              </div>
            </div>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-neutral-900 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center z-20 relative">
    <div className="flex items-center gap-4 mb-6 md:mb-0">
       <img src="https://api.dicebear.com/7.x/micah/svg?seed=Fernanda&backgroundColor=transparent" alt="F" className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-800" />
       <div className="font-display tracking-[0.1em] text-[14px]">FERNANDA ALIÃO</div>
    </div>
    <div className="text-[12px] text-neutral-400">
       © {new Date().getFullYear()} Designed with playful precision. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-caramel selection:text-white pb-0 xl:pb-12 xl:pt-12">
       <Lanyard />
       <main className="max-w-[1600px] w-full mx-auto bg-white xl:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] xl:rounded-[2.5rem] overflow-hidden relative border border-transparent xl:border-neutral-200/50">
          <HeroSection />
          <BioSection />
          <ContentSection />
          <Footer />
       </main>
    </div>
  );
}
