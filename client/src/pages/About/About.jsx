const About = () => {
  return (
    <div className="bg-asmahan-beige min-h-screen text-asmahan-brown font-sans">
      {/* Hero Header */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Silk details"
        />
        <div className="absolute inset-0 bg-asmahan-brown/20 flex flex-col items-center justify-center text-white">
          <p className="uppercase tracking-[0.5em] text-[10px] mb-4">
            Established 2024
          </p>
          <h1 className="text-7xl font-serif italic">Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto py-24 px-8 text-center leading-loose">
        <h2 className="text-3xl font-serif italic mb-10">
          Tradition meets the Modern Woman
        </h2>
        <div className="space-y-8 text-md font-light opacity-80 italic font-serif">
          <p>
            Asmahan was born from a desire to bring back the slow, deliberate
            rituals of luxury. In a world that moves too fast, we invite you to
            pause, to breathe, and to adorn yourself in scents and fabrics that
            tell a story.
          </p>
          <p>
            Every bottle of perfume in our collection is hand-blended, and every
            piece of bakhoor is curated for its depth and heritage. We source
            only the finest essences from across the Orient to ensure that
            Maison Asmahan remains a symbol of timeless elegance.
          </p>
        </div>
        <div className="w-16 h-[1px] bg-asmahan-gold mx-auto mt-16"></div>
      </section>
    </div>
  );
};

export default About;
