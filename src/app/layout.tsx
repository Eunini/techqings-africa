import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
});

export const metadata: Metadata = {
  // ... existing metadata ...
  metadataBase: new URL('https://techqings.africa'),
  // ... rest same ...
  title: "TechQings Africa | Empowering African Women for Future Tech",
  description: "Community-driven future technology initiative focused on empowering young African women with skills, mentorship, and exposure to tech careers.",
  // ...
  openGraph: {
    title: 'TechQings Africa',
    description: 'Empowering African Women for Future Tech Careers',
    url: 'https://techqings.africa',
    siteName: 'TechQings Africa',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'TechQings Africa Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechQings Africa',
    description: 'Empowering African Women for Future Tech Careers',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="font-ubuntu antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
