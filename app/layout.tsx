import type { Metadata } from "next";
import { Arapey } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Provider from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import reduxProvider from "./providers/reduxProvider";
import ReduxProvider from "./providers/reduxProvider";
import Head from "next/head";

const arapey = Arapey({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "myfitgenius.com",
  description: "Your personalized fitness and health tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arapey.className} relative antialiased`}>
        <ReduxProvider>
        <Provider>
          <ToasterContext />
          
          {children}
        </Provider>
        </ReduxProvider>
        </body>
    </html>
  );
}
