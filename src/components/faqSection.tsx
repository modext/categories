"use client"
import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyles = {
    bg: 'bg-[#F3F5FC]', // background color when open
    text: 'text-[#2742C6]', // text color when open
    rotate: 'rotate-180', // icon rotation when open
  };

  // Determine which styles to apply based on whether the tab is open or not
  const tabStyles = isOpen
    ? `${activeStyles.bg} ${activeStyles.text}`
    : 'bg-myblue-5 ';

  return (
    <div className={` my-2 transition-all duration-300`}>
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${tabStyles}  rounded text-lg font-medium  text-left flex justify-between items-center w-full p-4 transition-all duration-300`}
        >
          {question}
          <span className={`${isOpen ? 'text-[#2742C6]' : 'text-gray-400'} transition-transform duration-300`}>
            {/* Replace with an appropriate icon or character */}
            {isOpen ? '-' : '+'}
          </span>
        </button>
      </dt>
      <dd className={`${isOpen ? 'block' : 'hidden'} mt-2 pr-12`}>
        <p className="text-gray-500 font-medium text-base leading-5 px-4 rounded">{answer}</p>
      </dd>
    </div>
  
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: 'What is ISE?',
      answer: 'ISE, or Influencer Stock Exchange, is a platform where individuals can invest in shares of social media influencers, similar to how one might invest in stocks of a company.'
    },
    {
      question: 'How do I invest in an influencer?',
      answer: 'To invest in an influencer, you would typically...'
    },
    {
      question: 'Can I sell my shares at any time?',
      answer: 'Depending on the platform rules, you may be able to sell your shares...'
    },
    {
      question: 'How is share price determined?',
      answer: 'The share price is typically determined by...'
    },
  ];

  return (
    <div className="  bg-white w-full py-[96px] px-6 lg:px-[78px]">
      <h2 className=" text-[40px] font-medium leading-10 text-gray-900 mb-6">Frequently asked questions</h2>
      <dl className=" ">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </dl>
    </div>
  );
};

export default FaqSection;
