import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import Header from "./gui/Header";
import Footer from "./gui/Footer";
import localFont from "next/font/local";
import { Provider } from "./provider";
import { setStaticParamsLocale } from "next-international/server";

import { getStaticParams } from "@/locales/server";

export function generateStaticParams() {
    return getStaticParams()
}
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
    default: `Coolha Labs | 酷哈实验室`,
    template: `%s | Coolha Labs`
  },

  description: "Coolha Labs,酷哈实验室,关于酷哈实验室,区块链,Web3,市场营销策划,NFT品牌营销,让数据信息可拥有、可信任、有价值,Dapp开发,网站开发,去中心化应用开发,智能合约开发,酷哈,Coolha,酷哈web3，，web3营销策划,Coolha Labs,coolha.com Coolha.com,labs.coolha.com,",
};4

export default async function RootLayout({ params, children }) {
  const { locale } = await params;
  setStaticParamsLocale(locale)
  return (
    <html >
      <head>
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <Provider locale={locale} >

          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

