import React from 'react';

export default function StackVisual() {
  const layers = [
    { letter: 'M', name: 'MongoDB', desc: 'Database Layer' },
    { letter: 'E', name: 'Express.js', desc: 'Backend Framework' },
    { letter: 'R', name: 'React.js', desc: 'Frontend UI' },
    { letter: 'N', name: 'Node.js', desc: 'Runtime Environment' }
  ];

  return (
    <section className="py-12 border-y border-border-main/50 my-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* MERN Stack wali line yahan se hata di gayi hai */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
          {layers.map((layer, index) => (
            <div key={index} className="group relative w-full sm:w-40 p-6 bg-bg-card border border-border-main rounded-xl transition-all duration-300 hover:border-accent hover:-translate-y-1">
              <span className="block text-5xl font-display font-black text-accent drop-shadow-sm transition-colors duration-300 mb-2">
                {layer.letter}
              </span>
              <h4 className="font-sans font-bold text-sm text-text-main">{layer.name}</h4>
              <p className="font-mono text-[10px] text-text-muted mt-1">{layer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}