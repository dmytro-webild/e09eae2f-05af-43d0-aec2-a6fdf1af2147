import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Topaz Kitchen | Authentic Jamaican Flavors in North York',
  description: 'Topaz Kitchen offers authentic Jamaican food in North York. Open 24/7 with fresh seafood, jerk specialties, and traditional recipes. Visit us at 1230 Sheppard Ave W.',
  keywords: ["Jamaican food, North York restaurant, fresh seafood, jerk chicken, 24 hour restaurant, Jamaican cuisine"],
  openGraph: {
    "title": "Topaz Kitchen | Authentic Jamaican Flavors",
    "description": "Experience the best Jamaican food in North York. Always fresh, always authentic, 24/7.",
    "siteName": "Topaz Kitchen",
    "type": "website"
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
