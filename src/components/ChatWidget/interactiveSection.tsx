import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GridLoader } from "react-spinners";

interface Message {
  text: string;
  user: "user" | "AI";
}

interface InteractiveSectionProps {
  messages: Message[];
  isLoading: boolean;
  onRequestButtonClick: (text: string) => Promise<void>;
}

const InteractiveSection: React.FC<InteractiveSectionProps> = ({
  messages,
  isLoading,
  onRequestButtonClick,
}) => {
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
       <div className="flex flex-wrap justify-center space-x-2 gap-2 mb-1">
        {["How does ISE work ?", "How do I get started with ISE ?", "What are the benefits of ISE ?"].map((topic) => (
          <button
            key={topic}
            onClick={() => onRequestButtonClick(topic)}
            className="border border-myblue-100 hover:border-myblue-20 hover:bg-mygray-50 font-medium text-[16px] text-myblue-100 px-4 py-2 rounded"
          >
            {topic}
          </button>
        ))}
      </div>
      <ul className="mb-4 overflow-y-auto max-h-[270px] lg:max-h-[300px]">
        {messages &&
          messages.map((message, index) => (
            <li
              key={index}
              className={`flex items-center p-1 w-full gap-3 ${
                message.user === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex min-w-[28px] min-h-[28px] ${
                  message.user === "user" ? "order-2" : "order-1"
                }`}
              >
                <Image
                  src={
                    message.user === "user"
                      ? "/svg/userTag.svg"
                      : "/png/botBlue.png"
                  }
                  alt="Avatar"
                  width={28}
                  height={28}
                />
              </div>
              <p
                className={`p-3 my-2 rounded-lg border border-[#E8E8E8] ${
                  message.user === "user"
                    ? "self-end order-1 bg-white"
                    : "self-start order-2 bg-myblue-20"
                }`}
              >
                {message.text}
              </p>
            </li>
          ))}
        {isLoading && (
          <li className="flex justify-start items-center w-full gap-3">
            <div className="flex min-w-[28px] min-h-[28px]">
              <Image
                src="/png/botBlue.png"
                alt="Ekko AI"
                width={28}
                height={28}
              />
            </div>
            <div className="flex items-center p-3 my-2 rounded-lg border border-[#E8E8E8] bg-myblue-20 ">
              <GridLoader size={5} color="#2742C6" />
              <p className="ml-2 italic">Thinking...</p>
            </div>
          </li>
        )}
        <div ref={endOfMessagesRef} />
      </ul>
    </div>
  );
};

export default InteractiveSection;
