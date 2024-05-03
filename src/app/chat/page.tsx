"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { VscSend } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import InteractiveSection from "@/components/ChatWidget/messageScreen";
import HiScreen from "@/components/ChatWidget/hiScreen";

interface ChatModalProps {
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ onClose }) => {
  const handlePrimaryButtonClick = () => {
    onClose();
  };
  const [inputValue, setInputValue] = useState<string>("");
  const [messageStarted, setMessageStarted] = useState<boolean>(false);

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      setMessageStarted(true); // Switch to InteractiveSection when the user sends a message
      setInputValue(""); // Optionally clear the input after sending
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      // onClick={onClose}
      className="fixed inset-0 flex flex-col justify-center items-center backdrop-blur-sm"
      style={{ backdropFilter: "blur(3px)" }}
    >
      <div className="relative bg-white w-full md:min-w-[504px] md:min-h-[431px] lg:w-[840px] lg:h-[628px] max-w-[840px] sm:max-h-[748px] md:max-h-[548px] md:border md:rounded-[10px] border-[#D2D2D2] shadow-lg flex flex-col items-center justify-between mb-5">
        <header className=" px-7 h-[116px] w-full flex items-center md:rounded-t-[10px] bg-[#F3F5FC] ">
          <div className=" rounded-full bg-white p-1">
            <Image
              src="/svg/activeChat.svg"
              alt="Ekko AI"
              width={55}
              height={60}
            />
          </div>
          <div className="pl-[18px]">
            <h2 className="font-semibold text-xl ">Ekko AI</h2>
            <p className=" text-base font-medium text-mygray-70">
              Your AI assistant
            </p>
          </div>
        </header>
        <div className="px-6 pb-6 pt-2 w-full ">
        {messageStarted ? <InteractiveSection /> : <HiScreen />}

          <div className="relative items-center w-full ">
            <input
              type="search"
              id="search"
              className="block w-full px-2 pe-10 text-sm h-12 text-gray-900 items-center border-2 border-[#D5D5DD] rounded-lg  focus:ring-myblue-20 focus:border-blue-700 "
              placeholder="Ask me anything"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className=" absolute end-2.5 bottom-2   items-center  focus:outline-none  font-medium rounded-lg text-sm  
                "
              onClick={handleSendClick}
            >
              <VscSend className=" pb-1 text-2xl text-[#7F7F7F] hover:text-blue-700 focus:text-blue-700  " />
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end items-end mr-5 md:min-w-[504px]  lg:w-[840px] max-w-[840px]  ">
        <button
          onClick={handlePrimaryButtonClick}
          className=" flex bg-blue-500 p-4 right-0 items-center justify-center rounded-full text-white min-h-[56px] min-w-[56px]"
        >
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
