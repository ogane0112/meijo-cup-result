
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css" 

const noto = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto",
})

export const metadata = {
  title: "第2回名城CUPレース結果",
  description: "第2回名城CUPのレース結果を確認することができます",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={noto.className}> 
        {children}
      </body>
    </html>
  );
}
