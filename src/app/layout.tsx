import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChatWidget from "@/components/ChatWidget";


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
        <Footer />
        </body>
    </html>
  );
}
