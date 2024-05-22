"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      setCookieConsent(storedConsent === 'true');
    }

    const setBrowserCookie = (cookie: string) => {
      document.cookie = cookie;
    };

    const handleAcceptCookies = async () => {
      try {
        const response = await axios.get('https://ekko-ai.influencerstockexchange.com/', {
          withCredentials: true 
        });
        const cookies = response.headers['set-cookie'];
        if (cookies) {
          cookies.forEach(cookie => setBrowserCookie(cookie));
        }
      } catch (error) {
        console.error('Error fetching session cookie:', error);
      }
    };

    if (cookieConsent === true) {
      handleAcceptCookies();
    }
  }, [cookieConsent]);

  const handleSetConsent = (consent: boolean) => {
    setCookieConsent(consent);
    localStorage.setItem('cookieConsent', consent.toString());
  };

  if (cookieConsent !== null) {
    return null; 
  }

  return (
    <div className={`${
      cookieConsent ? "hidden" : "flex"
    } flex-col fixed inset-x-0 bottom-0 z-20 justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8 xs:block`}>
      <p className="max-w-4xl text-sm leading-6 text-gray-900">
        This website uses cookies to enhance your browsing experience, analyze
        site traffic, and serve better user experiences. By continuing to use
        this site, you consent to our use of cookies. Learn more in our{" "}
        <Link className="font-semibold text-[#8A2BE2]" href="/cookies">
          cookie policy
        </Link>.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleSetConsent(true)}
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
        >
          Accept all 🍪
        </button>
        <button
          onClick={() => handleSetConsent(false)}
          className="text-sm font-semibold text-gray-900"
        >
          Reject all
        </button>
      </div>
    </div>
  );
}
