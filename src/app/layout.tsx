import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/cookieBanner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "ISE",
  description: "INFLUENCER STOCK EXCHANGE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="custom-font">
        <Navbar />
        {children}
        <ToastContainer
          draggable
          rtl={false}
          pauseOnHover
          closeOnClick
          theme="dark"
          hideProgressBar
          autoClose={2000}
          pauseOnFocusLoss
          newestOnTop={false}
          position="top-center"
        />
        <CookieBanner />
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
