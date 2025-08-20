import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "EcoPack Solutions - Sustainable Packaging for a Greener Future",
  description: "Premium eco-friendly packaging solutions for businesses. Reduce your carbon footprint with our biodegradable, recyclable, and compostable packaging materials.",
  keywords: ["sustainable packaging", "eco-friendly", "biodegradable", "recyclable", "B2B packaging", "green packaging"],
  authors: [{ name: "EcoPack Solutions" }],
  creator: "EcoPack Solutions",
  publisher: "EcoPack Solutions",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecopacksolutions.com",
    title: "EcoPack Solutions - Sustainable Packaging for a Greener Future",
    description: "Premium eco-friendly packaging solutions for businesses",
    siteName: "EcoPack Solutions",
    images: [
      {
        url: "https://ecopacksolutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EcoPack Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoPack Solutions",
    description: "Premium eco-friendly packaging solutions for businesses",
    images: ["https://ecopacksolutions.com/twitter-image.jpg"],
    creator: "@ecopacksolutions",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}