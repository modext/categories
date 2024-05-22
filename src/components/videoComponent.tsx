import React from "react";

interface VideoComponentProps {
  src: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src }) => {

  return (
    <iframe
      src={src}
      frameBorder="0"
      allowFullScreen
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="h-[535px] w-auto  md:w-[694px] lg:w-[994px] rounded-md border border-gray-300 "
      ></iframe>
    
  );
};

export default VideoComponent;


