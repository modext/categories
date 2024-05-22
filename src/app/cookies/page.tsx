import Link from "next/link";
import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-white text-myblack-100">
      <div className=" lg:mx-[76px] mx-[7px] px-4 py-8 md:py-16">
        <h1 className="text-[50px] uppercase lg:text-7xl   xl:text-[100px] font-semibold md:font-medium md:text-center leading-[55.5px] md:leading-8 my-[26px]">
          Cookie Policy for Influencer Stock Exchange (ISE){" "}
        </h1>
        <div className="flex flex-col md:mt-[72px] md:flex-row">
          <div className=" md:px-6">
            <section id="acceptance" className=" mb-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                1. What Are Cookies?{" "}
              </h2>
              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  As is common practice with almost all professional websites,
                  our site uses cookies, which are tiny files downloaded to your
                  device, to enhance your experience. This document describes
                  what information they gather, how we use it, and why we
                  sometimes need to store these cookies.
                </p>
              </div>
            </section>
            <section id="acceptance" className=" mb-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                2. How We Use Cookies
              </h2>
              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  We use cookies for a variety of reasons detailed below.
                  Unfortunately, in most cases, there are no industry standard
                  options for disabling cookies without completely disabling the
                  functionality and features they add to the site. It is
                  recommended that you leave on all cookies if you are not sure
                  whether you need them or not, in case they are used to provide
                  a service that you use.
                </p>
              </div>
            </section>
            <section id="acceptance" className=" mb-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                3. Disabling Cookies
              </h2>
              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  You can prevent the setting of cookies by adjusting the
                  settings on your browser (see your browser Help for how to do
                  this). Be aware that disabling cookies will affect the
                  functionality of this and many other websites that you visit.
                  Disabling cookies will usually result in also disabling
                  certain functionality and features of this site.
                </p>
              </div>
            </section>
            <section id="acceptance" className=" mb-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                4. The Cookies We Set
              </h2>

              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Account-related cookies:{" "}
                  </span>{" "}
                  If you create an account with us, we will use cookies for the
                  management of the signup process and general administration.
                  These cookies will usually be deleted when you log out;
                  however, in some cases, they may remain afterward to remember
                  your site preferences when logged out.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Login-related cookies:{" "}
                  </span>{" "}
                  We use cookies when you are logged in so that we can remember
                  this fact. This prevents you from having to log in every
                  single time you visit a new page. These cookies are typically
                  removed or cleared when you log out to ensure that you can
                  only access restricted features and areas when logged in.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Investment and Transaction cookies:{" "}
                  </span>{" "}
                  These cookies facilitate the functionalities of our unique
                  investment platform, enabling seamless browsing, investing,
                  and trading within your account.
                </p>
              </div>
            </section>
            <section id="acceptance" className=" mb-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                5. Third-Party Cookies
              </h2>
              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  In some special cases, we also use cookies provided by trusted
                  third parties. The following section details which third-party
                  cookies you might encounter through this site:
                </p>
              </div>

              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Analytics cookies:{" "}
                  </span>{" "}
                  These cookies track how you use the website and how you
                  reached it. This helps us understand and improve our service,
                  including the functionality of our site.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Social media cookies:{" "}
                  </span>{" "}
                  These cookies allow you to interact with social media networks
                  or other external platforms directly from the pages of this
                  website. They are capable of tracking your browser across
                  other sites and building up a profile of your interests.
                </p>
              </div>
            </section>
            <section id="acceptance" className=" mb-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                6. More Information
              </h2>
              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  Hopefully, that has clarified things for you. As was
                  previously mentioned if there is something that you aren&apos;t
                  sure whether you need or not it&apos;s usually safer to leave
                  cookies enabled in case it does interact with one of the
                  features you use on our site. However, if you are still
                  looking for more information, you can contact us through one
                  of our preferred contact methods.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
