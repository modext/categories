import React, { useState } from "react";
import Image from "next/image";
 

const InteractiveSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { text: "How it works?", user: "user" },
    { text: "How do I get started?", user: "user" },
    { text: "What are the benefits?", user: "user" },
    { text: "How do I get started?", user: "user" },
    { text: "What  anr thoesare the benefits?", user: "user" },
    { text: "At ISE, our mission is to democratize the value of social media influence. We envision a world where every tweet, post, and share holds more than just digital weight—it holds potential for real-world returns. ", user: "AI" },
    { text: "What are the benefits?", user: "user" },
    { text: "What are the benefits?", user: "user" },
    { text: "How do I get started?", user: "AI" },
    { text: "What are the benefits?", user: "user" },
    { text: "What are the benefits?", user: "user" },
    { text: "How do I get started?", user: "AI" },
    { text: "What are the benefits?", user: "user" },
    { text: "What are the benefits?", user: "user" },
    { text: "How do I get started?", user: "AI" },
    { text: "What are the benefits?", user: "user" },
  ]);
  return (
    <ul className=" mb-4 overflow-y-auto max-h-[270px] lg:max-h-[300px]">
            {messages.map((message, index) => (
              <li
                key={index}
                className={` flex p-1 w-full gap-3 ${
                  message.user === "user"
                    ? "justify-end "
                    : " justify-start "
                }`}
              >
                {message.user === "user" ? (
                  <div className="flex order-2">
                    {" "}
                    <Image
                      src="/svg/userTag.svg"
                      alt="Ekko AI"
                      width={28}
                      height={28}
                    />{" "}
                  </div>
                ) : (
                  <div className="flex order-1">
                    {" "}
                    <Image
                      src="/svg/activeChat.svg"
                      alt="Ekko AI"
                      width={28}
                      height={28}
                    />{" "}
                  </div>
                )}
                <p
                  className={` p-3 rounded-lg border border-[#E8E8E8] ${
                    message.user === "user"
                      ? "self-end order-1 bg-white "
                      : "self-start order-2 bg-myblue-20"
                  }`}
                >
                  {" "}
                  {message.text}{" "}
                </p>
              </li>
            ))}
          </ul>

  );
};

export default InteractiveSection;
