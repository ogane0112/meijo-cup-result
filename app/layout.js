import "@/app/globals.css"

export const metadata = {
  title: "第2回名城CUPレース結果",
  description: "第2回名城CUPのレース結果を確認することができます",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
