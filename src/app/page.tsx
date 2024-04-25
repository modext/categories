// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen  bg-white flex-col items-center justify-between p-24">
    
     
          
//     </main>
//   );
// }
// pages/index.tsx

import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  // Add your social media icons and influencer images URLs
  const socialMedia = [
    { name: 'YouTube', icon: '/youtube-icon.png' },
    { name: 'TikTok', icon: '/tiktok-icon.png' },
    { name: 'Instagram', icon: '/instagram-icon.png' }
  ];

  const influencers = [
    { name: 'Influencer 1', image: '/influencer1.png' },
    { name: 'Influencer 2', image: '/influencer2.png' },
    // ... other influencers
  ];

  return (
    <div className="bg-white">
      {/* Main Banner Section */}
      <section className="text-center p-8 md:text-left md:flex md:justify-between md:p-20">
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-4xl font-bold">Unlock the Power of Influencer Stocks</h1>
          <p className="text-xl">
            Dive into the future of investing with our platform, where you can harness the potential of social media influence
          </p>
          <div className="flex justify-center space-x-4 md:justify-start">
            {socialMedia.map((media) => (
              <button key={media.name} className="rounded p-2 shadow-md">
                <Image src={media.icon} alt={media.name} width={30} height={30} />
              </button>
            ))}
          </div>
          <button className="bg-blue-600 text-white rounded px-4 py-2">
            Go to App
          </button>
        </div>
      </section>

      {/* Influencer Image Grid */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {influencers.map((influencer) => (
          <div key={influencer.name} className="rounded-lg overflow-hidden shadow-md">
            <Image src={influencer.image} alt={influencer.name} width={200} height={200} className="object-cover" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
