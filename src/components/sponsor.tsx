// components/Sponsor.tsx

import React from 'react';

interface SponsorProps {
  title: string;
  description: string;
  logo?: string;  // Assuming you will pass the logo as an SVG or image component
}

const Sponsor: React.FC<SponsorProps> = ({ title, description, logo }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 gap-7.5 w-full md:w-auto h-64 " style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <div className="flex items-center gap-2.5">{logo}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-">{description}</p>
    </div>
  );
};

export default Sponsor;

// pages/brands.tsx

