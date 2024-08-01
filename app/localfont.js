// src/styles/fonts.ts
import localFont from 'next/font/local';

// フォントの定義
const myLocalFont = localFont({
  src: './mushin.otf',
  variable: '--font-my-local',
  display: 'swap',
});

export { myLocalFont };