import type { Metadata } from "next";
import MenuRight from "@/components/Menu/MenuRight/MenuRight";

import "./font.css";
import "./globals.css";
import FooterSocial from "@/components/Footer/FooterSocial";

export const metadata: Metadata = {
  title: {
    template: "%s | Jonathan Quist",
    default: "Welcome",
  },
  description: "Check out my smart porfolio website with a custom AI chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="custom-scroll flex h-screen w-full flex-col overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
