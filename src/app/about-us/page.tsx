import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto p-6 sm:p-12">
                <h1 className="text-4xl font-bold text-center sm:text-left">
                    About Us
                </h1>
                <p className="mt-6 text-gray-600 text-lg text-center sm:text-left">
                    Welcome to the Influencer Stock Exchange, the pioneering platform
                    where the influence of social media stars becomes a tangible asset. At
                    ISE, we blend the dynamism of social media with the strategic rigor of
                    the stock market to offer a unique investment landscape. Dive into a
                    new realm where following your favorite influencer can translate into
                    real investment opportunities.
                </p>

                <div className="mt-12">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        At ISE, our mission is to democratize the value of social media
                        influence. We envision a world where every tweet, post, and share
                        holds more than just digital weight—it holds potential for
                        real-world returns. We&apos;re dedicated to creating a transparent,
                        equitable platform where fans become investors, and influencers gain
                        new ways to monetize their creativity and popularity.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image
                            src="/team-photo.jpg"
                            alt="Team"
                            width={600}
                            height={400}
                            objectFit="cover"
                        />
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg">
                            ISE operates on a simple yet powerful premise: influencers are
                            listed on our exchange much like companies are listed on a stock
                            market. Here&apos;s how you can get involved:
                        </p>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col items-center sm:items-start">
                                <Image
                                    src="/browse-icon.png"
                                    alt="Browse"
                                    width={30}
                                    height={30}
                                />
                                <h3 className="font-semibold mt-2">Browse and Select</h3>
                                <p className="text-gray-600 mt-1">
                                    Discover an extensive array of registered influencers waiting
                                    to amplify your brand&apos;s reach and impact.
                                </p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <Image
                                    src="/invest-icon.png"
                                    alt="Invest"
                                    width={30}
                                    height={30}
                                />
                                <h3 className="font-semibold mt-2">Invest Seamlessly</h3>
                                <p className="text-gray-600 mt-1">
                                    Buy shares in the digital presence of your chosen influencers.
                                </p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <Image
                                    src="/trade-icon.png"
                                    alt="Trade"
                                    width={30}
                                    height={30}
                                />
                                <h3 className="font-semibold mt-2">Trade Dynamically</h3>
                                <p className="text-gray-600 mt-1">
                                    Sell shares based on market movements and your investment
                                    strategy.
                                </p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <Image src="/earn-icon.png" alt="Earn" width={30} height={30} />
                                <h3 className="font-semibold mt-2">Earn Profit</h3>
                                <p className="text-gray-600 mt-1">
                                    Benefit financially as your influencers grow in popularity and
                                    success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
