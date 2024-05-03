// pages/article.tsx
"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArticleCard } from "../../../../components/articleCard";
import AppPromotion from "../../../../components/appPromotion";
import PostCardList from "../../../../components/PostCardList";





const sampleArticleData = {
  title: "How to position your team for success",
  date: "Friday, January 14, 2022",
  category: "Influencer Spotlight",
  imageUrl: "/images/momAndChild.png",
  excepts:
    "In this week’s Business Spotlight, Awele talks us through her journey, some challenges she has faced, and what she has found most rewarding through it all",
  content: `
  On a journey to de-stigmatise anxiety through a series of art therapy sessions across Nigeria, Awele Ogwu has turned
  a personal experience into an opportunity to create an outlet for many others to network, express themselves and
  find relief in moments of anxiety. Founded in 2018, The Art Room NG is a therapeutic arts space based in Lagos and
  Abuja.
  In this week’s Business Spotlight, Awele talks us through her journey, some challenges she has faced and what she
has found most rewarding through it all.
The Art Room was an idea I came up with after I dealt with anxiety in 2017. Moving back to Lagos I realised there was a
marketplace for people who needed to destress using art and that was how the art room came about.
In 2017, I had a therapist who actually told me to find my outlet when I had to destress and in that I started painting
more and I started using that as a means to destress and get over my anxiety.It was quite nerve-wracking to be honest. To see something that you once had as an idea become something in reality
but it was also quite exciting and rewarding. We had prepped for this session for over a month just waiting to see how
many people would show up. We put the word out and sold out in a few days, which encouraged us to push through
and put more into the session. It was quite nerve-wracking to be honest. To see something that you once had as an idea become something in reality
but it was also quite exciting and rewarding. We had prepped for this session for over a month just waiting to see how
many people would show up. We put the word out and sold out in a few days, which encouraged us to push through
and put more into the session. It was quite nerve-wracking to be honest. To see something that you once had as an idea become something in reality
but it was also quite exciting and rewarding. We had prepped for this session for over a month just waiting to see how
many people would show up. We put the word out and sold out in a few days, which encouraged us to push through
and put more into the session. It was quite nerve-wracking to be honest. To see something that you once had as an idea become something in reality
but it was also quite exciting and rewarding. We had prepped for this session for over a month just waiting to see how
many people would show up. We put the word out and sold out in a few days, which encouraged us to push through
and put more into the session.It was quite nerve-wracking to be honest. To see something that you once had as an idea become something in reality
but it was also quite exciting and rewarding. We had prepped for this session for over a month just waiting to see how
many people would show up. We put the word out and sold out in a few days, which encouraged us to push through
and put more into the session.
    `,
  authorName: "Skylar Vaccaro",
  authorTitle: "Product Marketing and Communications",
  authorThumbnail: "/images/momAndChildSmall.png",
};

const ArticlePage: React.FC = () => {
  const params = useParams<{ id: string }>();

  const [post, setPost] = useState<Post | null>(null);

  //   const req = await fetch(
  //     `${URL}/posts?_fields=id,slug,title,content&slug=${params.id}`
  //   );
  //   const pages = await req.json();

  //   if (!post)
  // return <p>Loading...</p>;

  // return (
  //   <article>
  //     <h2>Article should be here </h2>
  //     {/* <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
  //     <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
  //     {/* Add more post details as needed */}
  //   </article>
  // );

  if (!post)
    return (
      <div className="bg-white pt-6 ">
        <div className=" justify-center px-6 md:px-20 lg:w-full  md:w-full ">
        {/* <div className="container mx-auto px-6 sm:px-6 lg:px-8">  lg:mx-[78px]*/}
          <ArticleCard
            title={sampleArticleData.title}
            category={sampleArticleData.category}
            excepts={sampleArticleData.excepts}
            date={sampleArticleData.date}
            imageUrl={sampleArticleData.imageUrl}
            content={sampleArticleData.content}
            authorName={sampleArticleData.authorName}
            authorTitle={sampleArticleData.authorTitle}
            authorThumbnail={sampleArticleData.authorThumbnail}
          />
        </div>
          <PostCardList />
          <AppPromotion />
          {/* Other page content */}
      </div>
    );
};

export default ArticlePage;
