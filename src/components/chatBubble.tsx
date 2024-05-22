import { FC } from "react";

const ChatBubble: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex justify-center items-center mr-5">
      <button className=" bg-white   py-[14px] text-base font-medium  px-4 rounded-lg drop-shadow-md cursor-pointer flex items-center">
        {text}
        {/* <span className="absolute -bottom-4 right-2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-5 h-5 bg-white"></span> */}
      </button>
    </div>
  );
};

export default ChatBubble;
