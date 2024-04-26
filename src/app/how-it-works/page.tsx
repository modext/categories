import React from 'react';
import Image from 'next/image';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto p-6 sm:p-12">
        <h1 className="text-4xl font-bold text-center sm:text-left">How it Works</h1>
        <p className="mt-6 text-gray-600 text-lg text-center sm:text-left">
          Welcome to the Influencer Stock Exchange, the pioneering platform where the influence of social media stars becomes a tangible asset...
        </p>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center sm:text-left">For Influencers</h2>
          <p className="mt-4 text-gray-600 text-lg">
            At ISE, our mission is to democratize the value of social media influence...
          </p>
          <div className="mt-4">
            <Image src="/influencer-dashboard.png" alt="Influencer Dashboard" width={600} height={300} objectFit="contain" />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center sm:text-left">For Investors</h2>
          <p className="mt-4 text-gray-600 text-lg">
            At ISE, our mission is to democratize the value of social media influence...
          </p>
          <div className="mt-4">
            <Image src="/investor-dashboard.png" alt="Investor Dashboard" width={600} height={300} objectFit="contain" />
          </div>
        </div>

        <div className="mt-12 mb-12">
          <h2 className="text-3xl font-bold text-center sm:text-left">Why Influencer Stock</h2>
          <p className="mt-4 text-gray-600 text-lg">
            At ISE, our mission is to democratize the value of social media influence...
          </p>
          <div className="mt-4">
            <Image src="/why-influencer-dashboard.png" alt="Why Influencer Dashboard" width={600} height={300} objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
