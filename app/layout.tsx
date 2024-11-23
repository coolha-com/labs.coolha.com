import type { Metadata } from "next";
import "./globals.css";
import Header from "./gui/Header";
import Footer from "./gui/Footer";
import Providers from './providers'

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';


import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});




export const metadata: Metadata = {
  title: {
    default: `Coolha 酷哈工作室`,
    template: `%s | Coolha 酷哈工作室`
  },

  description: "Coolha,酷哈工作室,区块链,Web3,市场营销策划,NFT品牌营销,让数据信息可拥有、可信任、有价值,Dapp开发,网站开发,去中心化应用开发,智能合约开发,酷哈,Coolha,酷哈web3，，web3营销策划,Coolha Network Technology Studio,Coolha Network Technology Studio,coolha.top Coolha.com",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

