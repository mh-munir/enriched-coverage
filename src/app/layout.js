// "use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Provider from "@/reduxStore/Provider";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Enriched Coverages",
  description: "Enriched Coverages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
