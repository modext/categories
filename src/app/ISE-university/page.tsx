import React from "react";

const TermsAndConditions: React.FC = () => {
  // ... You might have a state or effect here if you're fetching data

  return (
    <div className="bg-white text-myblack-100">
      <div className=" lg:mx-[76px] px-4 py-8 md:py-16">
        <h1 className="text-[50px] lg:text-7xl   xl:text-[100px] font-semibold md:font-medium md:text-center leading-[55.5px] md:leading-8 my-[26px]">
          Terms & Conditions
        </h1>
        <div className="flex flex-col md:mt-[72px] md:flex-row">
          <div className="md:w-1/3">
            {/* List of sections for larger screens */}
            <ul className="hidden md:block">
              <li className="mb-2">
                <a href="#acceptance" className=" text-base font-bold">
                  Acceptance of Terms
                </a>
              </li>
              <li className="mb-2">
                <a href="#changes" className="text-base font-bold">
                  Changes of Terms
                </a>
              </li>
              <li className="mb-2">
                <a href="#changes" className="text-base font-bold">
                  Platform Use{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#changes" className="text-base font-bold">
                  User Accounts{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#changes" className="text-base font-bold">
                  Intellectual Property{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#changes" className="text-base font-bold">
                  User Conduct Terms{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#changes" className="text-base font-bold">
                  Disclaimers{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#changes" className="text-base font-bold">
                  Limitation of Liability{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#platform-use" className="text-base font-bold">
                  Indemnification{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#platform-use" className="text-base font-bold">
                  Governing Law{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#platform-use" className="text-base font-bold">
                  Indemnification{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#platform-use" className="text-base font-bold">
                  Termination{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#platform-use" className="text-base font-bold">
                  Feedback & Contact Information{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#platform-use" className="text-base font-bold">
                  Updates and Amendments{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#platform-use" className="text-base font-bold">
                  How to Access Updated Legal Documents{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className=" md:pl-[94px]">
            <section id="acceptance" className=" mb-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Acceptance of Terms
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                By accessing and using the Influencer Stock Exchange (ISE)
                platform, you agree to be bound by these Terms and Conditions
                (&quot;Terms&quot;). These Terms apply to all users of the
                platform. If you do not agree with any part of these Terms, you
                must not use this platform.{" "}
              </p>
            </section>
            <section id="changes" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Changes of Terms{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                ISE reserves the right, at its sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days&apos; notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion. Please check our website
                regularly to view the current version of the Terms.
              </p>
            </section>
            <section id="platform use" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Platform Use{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                ISE provides a digital marketplace for users to invest in social
                media influencers. Users are granted a limited, non-exclusive
                right to use the platform in accordance with these Terms and all
                applicable laws and regulations.
              </p>
              {/* ... more content */}
            </section>
            <section id="user accounts" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                User Accounts{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                You are responsible for maintaining the confidentiality of your
                account and password and for restricting access to your
                computer. You agree to accept responsibility for all activities
                that occur under your account or password.
              </p>
            </section>
            <section id="intellectual property" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Intellectual Property{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                All content on the ISE platform, including text, graphics,
                logos, images, and software, is the property of ISE or its
                content suppliers and protected by international copyright and
                intellectual property laws.
              </p>
            </section>
            <section id="user conduct" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                User Conduct{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                Users are expected to use the platform in a responsible and
                ethical manner. Any use of the platform for illegal or
                unauthorized purposes is strictly prohibited.
              </p>
            </section>
            <section
              id="limitation of liability"
              className=" my-3 text-[15px] "
            >
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Limitation of Liability{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                ISE provides the platform on an &apos;as is&apos; and &apos;as
                available&apos; basis. We do not warrant that the platform will
                always be uninterrupted, timely, secure, or error-free.
              </p>
            </section>
            <section id="Indemnification" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Indemnification{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                You agree to indemnify, defend, and hold harmless ISE, its
                officers, directors, employees, agents, licensors, and suppliers
                from and against all losses, expenses, damages, and costs,
                including reasonable attorneys&apos; fees, resulting from any
                violation of these Terms or any activity related to your account
                (including negligent or wrongful conduct).
              </p>
            </section>
            <section id="Governing law" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Governing Law{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which ISE is headquartered,
                without regard to its conflict of law provisions.
              </p>
            </section>
            <section id="termination" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Termination{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                ISE may terminate your access to the platform without cause or
                notice, which may result in the forfeiture and destruction of
                all information associated with your account.
              </p>
            </section>
            <section id="feedback and contact" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Feedback and Contact Information{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                Any feedback you provide regarding the platform is
                non-confidential and will be used on an unrestricted basis. For
                any questions about these Terms, please contact us via our
                website.
              </p>
            </section>
            <section id="updates and amendments" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Updates and Amendments{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                These Terms and Conditions may be amended or updated from time
                to time to reflect changes in our practices or services. We
                encourage you to regularly check our website to ensure you are
                aware of any updates.
              </p>
            </section>
            <section id="legal documents" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                How to Access Updated Legal Documents{" "}
              </h2>
              <p className="mt-2 leading-[22.5px] font-medium">
                The latest version of our legal documents is always available on
                our website. Visit the Terms & Conditions section regularly to
                stay informed of your rights and obligations.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
