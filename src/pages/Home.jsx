import React from 'react';
import Hero from '../components/hero/Hero';

const Home = () => {
  return (
    <div>
      <Hero 
        title="SPS. Excellence in Education" 
        subtitle="Empowering students with knowledge, skills, and values. Discover why SPS is the trusted name in comprehensive education."
        bgImage="https://images.unsplash.com/photo-1541339907198-e08756defe33?q=80&w=2000"
      />
      {/* Rest of landing page sections will go here */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#0A2540] text-center">Welcome to Our Campus</h2>
        <p className="text-center text-gray-600 mt-4">This is the default homepage view below the hero banner.</p>
      </div>
    </div>
  );
};

export default Home;