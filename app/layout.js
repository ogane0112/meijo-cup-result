import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "@/app/globals.css"
import localFont from 'next/font/local'
const myFont = localFont({
  src: './mushin.otf',
  display: 'swap',
})
export const metadata = {
  title: "第2回名城CUP公式サイト",
  description: "名城大学の学生団体「なんとかしよまいけ」が開催するキッズランバイク大会「第2回名城CUP」の公式ホームページ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
