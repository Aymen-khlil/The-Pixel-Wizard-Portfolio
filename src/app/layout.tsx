import type { Metadata } from "next";
import { Press_Start_2P, Geist_Mono, Beth_Ellen } from "next/font/google";
import "./globals.css";
import PixelTraillWrapper from "@/components/pixelTrails/pixelTraillWrapper";

import ThemeLoader from "./ThemeLoader";

export const geistSans = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const geistBeth = Beth_Ellen({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aymen Khlil - The Pixel Wizard Portfolio",
  description: "Welcome to my hogwarts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/mapOverlay/loopingGif.gif"
          as="image"
          type="image/gif"
        />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.variable} h-screen    overflow-auto`}
      >
        <PixelTraillWrapper key={"Trailing"} />
        <ThemeLoader>{children}</ThemeLoader>
      </body>
    </html>
  );
}
