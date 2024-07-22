import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "第2回名城CUP公式サイト",
  description: "名城大学の学生団体「なんとかしよまいけ」が開催するキッズランバイク大会「第2回名城CUP」の公式ホームページ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
