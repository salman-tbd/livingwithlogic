import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { SITE_CONFIG } from "@/utils/constants";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Living With Logic - Business Consulting & Leadership Development",
    template: "%s | Living With Logic"
  },
  description: "Transform your business with expert consulting, strategic planning, and leadership development. Empowering organizations through logical frameworks and innovative solutions.",
  keywords: ["business consulting", "leadership development", "strategic planning", "management consulting", "organizational transformation", "thought leadership"],
  authors: [{ name: "Living With Logic Team" }],
  creator: "Living With Logic",
  publisher: "Living With Logic",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Living With Logic - Business Consulting & Leadership Development",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Living With Logic - Business Consulting & Leadership Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Living With Logic - Business Consulting & Leadership Development",
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
    creator: "@livingwithlogic",
    site: "@livingwithlogic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              style: {
                background: '#10b981',
              },
            },
            error: {
              style: {
                background: '#ef4444',
              },
            },
          }}
        />
      </body>
    </html>
  );
}