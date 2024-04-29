"use client";
import ContactForm from "@/components/contactForm";
import React from "react";
import Image from "next/image";
import FaqSection from "@/components/faqSection";
import AppPromotion from "@/components/appPromotion";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="bg-white p-6 md:px-[78px]">
        <div className="flex flex-col  mt-[65px] lg:flex-row justify-between items-center gap-8">
          <div className="  lg:w-1/2">
            <h2 className="text-[50px] font-semibold mt-9 lg:mt-0 ">Get in Touch</h2>
            <p className="mb-4 text-2xl font-medium text-mygray-120 py-12">
              If you would prefer to chat in real time with our support team, we
              are available online every week day.
            </p>
            <div className="mb-8">
              <h3 className="text-[26px] font-semibold mb-2">Our Address</h3>
              <p className="flex items-center font-medium text-[22px] text-mygray-120">
                <div className="material-icons mr-2">
                  <Image
                    src="/images/mapPin.png"
                    alt="tiktok Logo"
                    width={16}
                    height={16}
                  />
                </div>
                1 Hacker Way, Menlo Park, CA 94025
              </p>
            </div>
            <div>
              <h3 className="text-[36px] font-semibold ">Follow us</h3>
              <div className="pt-[22px] md:pt-1 flex space-x-4">
                <a href="#" className="hover:text-blue-600 font-medium text-sm">
                  <Image
                    src="/svg/instagram.svg"
                    alt="instagram Logo"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="#" className="hover:text-blue-600 font-medium text-sm">
                  <Image
                    src="/svg/tiktok.svg"
                    alt="tiktok Logo"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="#" className="hover:text-blue-600 font-medium text-sm">
                  <Image
                    src="/svg/linkedin.svg"
                    alt="linkedin Logo"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="#" className="hover:text-blue-600 font-medium text-sm">
                  <Image
                    src="/svg/twitter.svg"
                    alt="twitter Logo"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="hidden md:block border border-mygray-50 w-full lg:w-1/2 max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-[60px]">
            <ContactForm />
          </div>
        </div>
        <FaqSection />
      </div>
      <AppPromotion />
    </>
  );
};

export default ContactPage;
