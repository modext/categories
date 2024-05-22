import React from "react";
import Image from "next/image";


const ArticleFooter: React.FC<ArticleFooterProps> = ({
  name,
  role,
  profilePic,
  articleUrl,
}) => {
  return (
    <div className="  ">
      <div className="flex items-center mb-4 space-x-[25px]">
          <Image
            src={profilePic}
            alt={`Profile of ${name}`}
            width={48}
            height={48}
            className="rounded-full"
          />
        <div className="ml-4 ">
          <p className="font-bold text-[15px] mb-[7px] text-myblack-100">{name}</p>
          <p className=" font-medium text-sm text-myblack-90">{role}</p>
        </div>
      </div>

      <p className=" font-medium text-xs text-mygray-90  leading-[22px] my-[25px]">SHARE THIS POST ON</p>

      <div className="flex space-x-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src='/svg/blueFacebook.svg'
            alt="Share on Facebook"
            width={32}
            height={32}
          />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${articleUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src='/svg/blueTwitter.svg'
            alt="Share on Twitter"
            width={32}
            height={32}
          />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src='/svg/blueLinkedin.svg'
            alt="Share on LinkedIn"
            width={32}
            height={32}
          />
        </a>
      </div>
    </div>
  );
};

export default ArticleFooter;
