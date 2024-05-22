"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ChatModal from "./chatModal";
import ChatBubble from "../chatBubble";

const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([]);
    const [messageStarted, setMessageStarted] = useState<boolean>(false);

    const addMessage = (newMessage: Message) => {
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setMessageStarted(true); 
    };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [bubbleText, setBubbleText] = useState<string>("How can I assist you today?");
  const [hasLoggedOut, setHasLoggedOut] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isOpen && !isHovered && !isMinimized) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, [isOpen, isHovered, isMinimized]); 

  const closeModal = () => {
    setIsOpen(false);
    setIsHovered(false);
    setIsMinimized(false);
    setHasLoggedOut(true);  
    setBubbleText("How can I assist you today?");
  };

  const minimizeModal = () => {
    setIsMinimized(true);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowPopup(false);
    setBubbleText("Click to Get Started");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setBubbleText("How can I assist you today?");
  };

  const toggleModal = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="fixed bottom-10 right-5 flex flex-col items-end">
      {(showPopup || isHovered) && !isOpen && !isMinimized && !hasLoggedOut && <ChatBubble text={bubbleText} />}
      {!isOpen && !isMinimized && (
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter} 
          onTouchEnd={handleMouseLeave}
          onClick={toggleModal}
          className="w-[114px] h-[114px] mt-[10px] rounded-full flex items-center justify-center transition duration-300"
        >
          {isHovered ? (
            <Image src="/png/botBlue.png" alt="Active Chat" width={100} height={100} />
          ) : (
            <Image src="/png/botBlack.png" alt="Inactive Chat" width={80} height={80} />
          )}
        </button>
      )}
      {isOpen && <ChatModal
            messages={messages}
            messageStarted={messageStarted}
            addMessage={addMessage}
            onClose={closeModal}
            onMinimize={minimizeModal}
        />}
      {isMinimized && (
        <button
          className="w-[114px] h-[114px] mt-[10px] rounded-full flex items-center justify-center transition duration-300 bg-blue-500 bg-opacity-20"
          onClick={toggleModal}
        >
          <Image src="/png/botBlue.png" alt="Reopen Chat" width={100} height={100} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
