import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header';
import Providers from '@/features/provider';
import Footer from '@/components/footer';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Bingo - Cryptocurrency platform",
  description: "Free cryptocurrency platform for traders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}, flex flex-col min-h-screen`}>
        <Providers>
            <Header />
              <div className="w-full max-w-[1300px] m-auto pl-4 pr-4 text-main_fourth">
                  {children}
              </div>
              <Footer />
        </Providers>
      </body>
    </html>
  );
}
