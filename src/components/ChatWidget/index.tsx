"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import ChatModal from "./chatModal";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bubbleText, setBubbleText] = useState("How can I assist you today?");

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isOpen && !isHovered) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000); 
      }
    }, 10000); 
    return () => clearInterval(timer);
  }, [isOpen, isHovered]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    
    <div className="fixed bottom-10 right-5 flex flex-col items-end">
      {(showPopup || isHovered) && !isOpen && (
        <div className="mb-2 p-2 bg-white border rounded-lg border-purple-300 shadow-lg flex items-center">
          <span>{bubbleText}</span>
        </div>
      )}
       {!isOpen && (
      <button
        onMouseEnter={() => {
          setIsHovered(true);
          setShowPopup(false);
          setBubbleText("Click to Get Started"); 
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setBubbleText("How can I assist you today?"); 
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-[114px] h-[114px] rounded-full flex items-center justify-center transition duration-300 "
      >
        {isHovered ? (
          <Image
            src="/svg/activeChat.svg"
            alt="Active Chat"
            width={100}
            height={100}
          />
        ) : (
          <Image
            src="/svg/inactiveChat.svg"
            alt="Inactive Chat"
            width={80}
            height={80}
          />
        )}
      </button>)}
      {isOpen && <ChatModal onClose={closeModal} />}
    </div>
  );
};

export default ChatWidget;
