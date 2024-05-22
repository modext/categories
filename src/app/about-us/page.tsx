import React from "react";
import Image from "next/image";
import AppPromotion from "@/components/appPromotion";
import chattingPeople from "../../../public/images/peopleChatting.png"
const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <div className=" mx-auto md:p-[93px] p-6 sm:p-12">
          <h1 className="text-[50px] md:text-[100px] md:font-medium font-semibold md:text-center pt-9 md:pt-[58px] mb-[46px] md:mb-[72px] ">
            About Us
          </h1>
          <p className="mt-4 text-mygray-120 text-lg leading-[33.6px] md:font-medium md:text-2xl">
            Welcome to the Influencer Stock Exchange, the pioneering platform
            where the influence of social media stars becomes a tangible asset.
            At ISE, we blend the dynamism of social media with the strategic
            rigor of the stock market to offer a unique investment landscape.
            Dive into a new realm where following your favorite influencer can
            translate into real investment opportunities.
          </p>
          <div className="lg:flex lg:justify-between lg:items-center  ">
            <div className=" lg:w-1/2 mt-[48px] lg:pr-14">
              <h2 className=" text-[28px] md:text-[38px] font-semibold   md:t">
                Our Mission
              </h2>
              <p className="mt-10 text-mygray-120 leading-[33.6px] text-lg font-medium md:font-medium md:text-2xl">
                At ISE, our mission is to democratize the value of social media
                influence. We envision a world where every tweet, post, and
                share holds more than just digital weight—it holds potential for
                real-world returns. We&apos;re dedicated to creating a
                transparent, equitable platform where fans become investors, and
                influencers gain new ways to monetize their creativity and
                popularity.
              </p>
              <p className="hidden pt-[66px]leading-[33.6px] md:block mb-8 text-mygray-120 text-lg md:font-medium md:text-2xl">
                ISE operates on a simple yet powerful premise: influencers are
                listed on our exchange much like companies are listed on a stock
                market. Here&apos;s how you can get involved:
              </p>
            </div>

            <div className="flex justify-center items-center rounded-sm md:rounded-md  lg:h-[535px] my-[66px] lg:w-1/2 lg:max-w-[535px] ">
              <Image
                src={chattingPeople}
                alt="Team"
                layout="responsive"
              />
            </div>
          </div>
          <div className=" items-center">
            <div>
              <p className=" block md:hidden mb-8 text-gray-600 text-lg">
                ISE operates on a simple yet powerful premise: influencers are
                listed on our exchange much like companies are listed on a stock
                market. Here&apos;s how you can get involved:
              </p>
              <div className=" grid grid-cols-1 md:grid-cols-2 pt-6 gap-6">
                <div className="flex  flex-col items-start">
                  <Image
                    src="/images/browseAndSelect.jpg"
                    alt="browse And Select"
                    width={72}
                    height={72}
                    className="pb-6 rounded"
                  />
                  <h3 className=" font-medium text-2xl mt-2">
                    Browse and Select
                  </h3>
                  <p className="font-medium text-lg text-mygray-120 mt-1">
                    Discover an extensive array of registered influencers
                    waiting to amplify your brand&apos;s reach and impact.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <Image
                    src="/images/investSeamlessly.jpg"
                    alt="invest Seamlessly"
                    width={72}
                    height={72}
                    className="pb-6 rounded"
                  />
                  <h3 className=" font-medium text-2xl">Invest Seamlessly</h3>
                  <p className="font-medium text-lg text-mygray-120">
                    {" "}
                    Buy shares in the digital presence of your chosen
                    influencers.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <Image
                    src="/images/tradeDynamically.jpg"
                    alt="Trade Dynamically"
                    width={72}
                    height={72}
                    className="pb-6 rounded"
                  />
                  <h3 className=" font-medium text-2xl">Trade Dynamically</h3>
                  <p className="font-medium text-lg text-mygray-120">
                    {" "}
                    Sell shares based on market movements and your investment
                    strategy.
                  </p>
                </div>
                <div className="flex flex-col pb-10 ">
                  <Image
                    src="/images/earnProfit.jpg"
                    alt="Earn"
                    width={72}
                    height={72}
                    className="pb-6 rounded"
                  />
                  <h3 className=" font-medium text-2xl">Earn Profit</h3>
                  <p className="font-medium text-lg text-mygray-120">
                    {" "}
                    Benefit financially as your influencers grow in popularity
                    and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-9 md:px-[78px]  md:py-[106px] bg-myblue-20">
        <h3 className=" font-semibold text-[40px] pb-10 text-center">
          Meet the Team
        </h3>
        <p className="font-medium text-[28px] px-[27px] pb-6  text-center text-mygray-120">
          Our team at ISE is composed of visionary tech enthusiasts, seasoned
          financial experts, and creative problem-solvers dedicated to
          revolutionizing how social media influence is valued. From our
          engineers who build seamless trading experiences to our market
          analysts who ensure your investments are sound, every team member is
          here to support your journey on the ISE platform.
        </p>
        <div className="md:flex text-center justify-center mt-10 mb-[76px] md:gap-x-14">
          <div className="mb-14">
            <h4 className=" font-medium text-[28px]">Peter Gordon</h4>
            <p className="font-medium text-lg text-mygray-120">Founder & CEO</p>
          </div>
          <div>
            <h4 className=" font-medium text-[28px]">Luna Martin</h4>
            <p className="font-medium text-lg text-mygray-120">COO</p>
          </div>
        </div>
      </div>
      <AppPromotion />
    </>
  );
};

export default AboutPage;
