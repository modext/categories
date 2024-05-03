import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">Terms & Conditions</h1>
      <div className="flex flex-col md:flex-row">
        
        {/* Left Column for Section Titles */}
        <div className="md:w-1/4">
          <h2 className="text-xl font-bold my-4">Sections</h2>
          <ul>
            <li>Acceptance of Terms</li>
            <li>Changes to Terms</li>
            <li>Platform Use</li>
            {/* Add additional sections as needed */}
          </ul>
        </div>

        {/* Right Column for Section Content */}
        <div className="md:w-3/4 md:pl-8">
          <section>
            <h2 className="text-2xl font-bold my-4">Acceptance of Terms</h2>
            <p>By accessing and using the Influencer Stock Exchange (ISE) platform...</p>
            {/* Add additional paragraphs as needed */}
          </section>
          {/* Repeat for all other sections */}
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
