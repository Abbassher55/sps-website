import Hero from '../components/hero/Hero';

const About = () => {
  return (
    <div>
      <Hero 
        title="About SPS" 
        subtitle="Learn about our history, our mission, and the legacy that makes us unique." 
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000"
      />
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Our Core Values</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We pride ourselves on dynamic learning pathways, character development, and academic excellence, pushing our students to become global leaders.
        </p>
      </div>
    </div>
  );
};

export default About;