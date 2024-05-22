import React, { useState } from "react";
import Image from "next/image";
import { VscSend } from "react-icons/vsc";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import InteractiveSection from "./interactiveSection";
import HiScreen from "./hiScreen";
import { sendMessageToBackend } from "@/utils/api/chatApi";

interface ChatModalProps {
  onClose: () => void;
  onMinimize: () => void;
  messages: Message[];
  messageStarted: boolean;
  addMessage: (message: Message) => void;
}

const ChatModal: React.FC<ChatModalProps> = ({
  messages,
  messageStarted,
  addMessage,
  onClose,
  onMinimize,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendClick = async (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const messageToSend = inputValue;
      setInputValue("");  
      await sendAndReceiveMessages(messageToSend);
    }
};

  const sendAndReceiveMessages = async (text: string) => {
    const newUserMessage: Message = { text, user: "user" };
    addMessage(newUserMessage);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToBackend(text);
      const responseMessage: Message = { text: responseText, user: "AI" };
      addMessage(responseMessage);
    } catch (error) {
      console.error("Failed to fetch from the backend:", error);
      const errorMessage: Message = {
        text: "Sorry, something went wrong!",
        user: "AI",
      };
      addMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onMinimize();
    }
  };
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center backdrop-blur-sm"
      style={{ backdropFilter: "blur(3px)" }}
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-white w-full md:min-w-[504px] md:min-h-[431px] lg:w-[840px] lg:max-h-[628px] max-w-[840px] sm:max-h-[748px] md:max-h-[548px] md:border md:rounded-[10px] border-[#D2D2D2] shadow-lg flex flex-col items-center justify-between mb-5">
        <header className="px-7 h-[116px] w-full flex items-center justify-between md:rounded-t-[10px] bg-[#F3F5FC]">
          <div className="flex">
            <div className="rounded-full bg-white p-1">
              <Image
                src="/png/botBlue.png"
                alt="Ekko AI"
                width={55}
                height={60}
              />
            </div>
            <div className="pl-[18px]">
              <h2 className="font-semibold text-xl">Ekko AI</h2>
              <p className="text-base font-medium text-mygray-70">
                Your AI assistant
              </p>
            </div>
          </div>
        </header>
        <div className="px-6 pb-6 pt-2 w-full">
          {messageStarted ? (
            <InteractiveSection
              messages={messages}
              isLoading={isLoading}
              onRequestButtonClick={sendAndReceiveMessages}
            />
          ) : (
            <HiScreen onRequestButtonClick={sendAndReceiveMessages} />
          )}
          <form
            onSubmit={handleSendClick}
            className="relative items-center w-full"
          >
            <input
              id="search"
              className={`block w-full px-2 pe-10 text-sm h-12 text-gray-900 items-center border-2 border-[#D5D5DD] rounded-lg focus:ring focus:ring-myblue-100/20 focus:border-blue-700 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              placeholder="Ask me anything"
              value={inputValue}
              onChange={handleChange}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`absolute end-2.5 bottom-2 items-center focus:outline-none font-medium rounded-lg text-sm ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSendClick}
              disabled={isLoading} 
            >
              <VscSend className="pb-1 text-3xl text-[#7F7F7F] hover:text-blue-700 focus:text-blue-700" />
            </button>
          </form>
        </div>
      </div>
      <div className="flex w-full justify-end items-end mr-5 md:min-w-[504px] lg:w-[840px] max-w-[840px]">
        <button
          onClick={onMinimize}
          className="flex bg-blue-500 p-4 right-0 items-center justify-center rounded-full text-white min-h-[56px] min-w-[56px]"
        >
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
