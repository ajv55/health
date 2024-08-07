import type { Metadata } from "next";
import { Arapey } from "next/font/google";
import "./globals.css";
import Provider from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import ReduxProvider from "./providers/reduxProvider";

const arapey = Arapey({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASED_URL!),
  title: {
    default: "MyFitGenius - Your Ultimate Fitness and Health Companion",
    template: '%s MyFitGenius - Your Ultimate Fitness and Health Companion'
  },
  description: "Track your calories, monitor your exercise routines, and achieve your weight loss goals with MyFitGenius. Personalized insights and analytics to help you stay on track and reach your fitness objectives.",
  keywords: "fitness, health, calorie tracking, weight loss, exercise tracking, personalized insights, fitness app, health app, MyFitGenius",
  openGraph:{
    title: "MyFitGenius - Your Ultimate Fitness and Health Companion",
    description: "Track your calories, monitor your exercise routines, and achieve your weight loss goals with MyFitGenius. Personalized insights and analytics to help you stay on track and reach your fitness objectives.",
    type: 'website',
    url: process.env.BASED_URL,
    siteName: 'MyFitGenius'
  }
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
