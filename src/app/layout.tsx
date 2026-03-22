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
  title: "ProfLink | Research That Sets You Apart",
  description:
    "Connect with real university professors and land independent research opportunities. Personalized outreach from your own email, powered by AI.",
  metadataBase: new URL("https://proflink.org"),
  openGraph: {
    title: "ProfLink | Research That Sets You Apart",
    description:
      "Connect with real university professors and land independent research opportunities. No pay-to-play programs.",
    url: "https://proflink.org",
    siteName: "ProfLink",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProfLink - Research That Sets You Apart",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProfLink | Research That Sets You Apart",
    description:
      "Connect with real university professors and land independent research opportunities.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
