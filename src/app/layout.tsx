import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayur AI Code Explainer 🚀",
  description: "AI-powered code explanation tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-gray-100 transition-colors duration-500`}
>

        {/* Wrapper for consistent layout */}
        <div className="flex flex-col min-h-screen">
          {/* Main content */}
          <main className="flex-grow flex items-center justify-center p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
