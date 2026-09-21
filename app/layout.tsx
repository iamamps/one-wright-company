import type { Metadata } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "One Wright Company | Connecting Businesses. Creating Opportunities.",
  description:
    "One Wright Company is a marketing, business-connectivity, and community-focused hub connecting AMPS Magazine, Leapz N Boundz, and A.L.F. — the AMPS Legacy Foundation.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="font-body text-base antialiased bg-[#fffdf6] text-slate-800">
        {children}
      </body>
    </html>
  );
}
