
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-l from-dark-navy/80 to-dark-teal/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">aitutors.io</span>
          </h2>
          
          <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
            <p className="text-lg text-pale-blue leading-relaxed mb-6">
              We believe in the transformative power of collective intelligence; where every individual's data, insights, and expertise hold inherent value. We recognize that true progress comes not from extraction, but from nurturing and rewarding the source.
            </p>
            
            <p className="text-lg text-pale-blue leading-relaxed mb-6">
              Today's digital economy thrives on personal data yet rarely compensates or empowers its contributors; while access to mentorship, a proven catalyst for growth, remains unequal.
            </p>
            
            <p className="text-lg text-pale-blue leading-relaxed mb-6">
              Founded on the principles of fairness, innovation, and reciprocity, <span className="gradient-text font-semibold">Ai tutors.io</span> is redefining the relationship between data and value. We ensure individuals are rightfully rewarded for their contributions while democratizing access to knowledge, creating a sustainable ecosystem where intelligence flourishes and benefits all.
            </p>
            
            <p className="text-xl text-white font-semibold text-center">
              This is more than a mission, it's a new standard for how the world harnesses human potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
