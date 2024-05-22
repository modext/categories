import React from "react";

interface HiScreenProps {
  onRequestButtonClick: (text: string) => void;
}

const HiScreen: React.FC<HiScreenProps> = ({ onRequestButtonClick }) => {
  return (
    <div>
      <div className="flex items-center mb-3">
        <span className="text-[40px] font-semibold mr-2">Hi there 👋</span>
      </div>
      <p className="font-medium text-[20px] mb-8">
        What would you like to learn about ISE?
      </p>
      <div className="flex flex-wrap items-start space-x-2 gap-2 mb-5">
        {[
          "How does ISE work ?",
          "How do I get started with ISE ?",
          "What are the benefits of ISE ?",
        ].map((topic) => (
          <button
            key={topic}
            onClick={() => onRequestButtonClick(topic)}
            className="border border-myblue-100 hover:border-myblue-20 font-medium text-[16px] text-myblue-100 px-4 py-2 rounded"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HiScreen;
