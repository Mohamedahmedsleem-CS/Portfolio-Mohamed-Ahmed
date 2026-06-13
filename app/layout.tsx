import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";

import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Mohamed Ahmed ",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ali2.png" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='portfolio_lang';var l=localStorage.getItem(k);if(!l){var legacy=localStorage.getItem('lang');if(legacy==='ar'||legacy==='en'){l=legacy;localStorage.setItem(k,l);localStorage.removeItem('lang');}}if(l!=='ar'&&l!=='en')l='ar';document.documentElement.lang=l;document.documentElement.dir='ltr';}catch(e){document.documentElement.lang='ar';document.documentElement.dir='ltr';}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${tajawal.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
