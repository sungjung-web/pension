import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: '연금 받을 수 있을까?',
  description: '나는 연금을 받을 수 있을까?',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <head>
        <meta property="og:image" content="https://pension-pi.vercel.app/resources/seo.png" />
        <meta property="og:image:type" content="https://pension-pi.vercel.app/resources/seo.png" />
        <meta property="og:image:width" content="https://pension-pi.vercel.app/resources/seo.png" />
        <meta property="og:image:height" content="https://pension-pi.vercel.app/resources/seo.png" />
        <meta name="twitter:image" content="https://pension-pi.vercel.app/resources/seo.png" />
        <meta name="twitter:image:type" content="https://pension-pi.vercel.app/resources/seo.png" />
        <meta name="twitter:image:width" content="https://pension-pi.vercel.app/resources/seo.png" />
        <meta name="twitter:image:height" content="https://pension-pi.vercel.app/resources/seo.png" />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css" />
      </head>
      <body>
        <main>
          <Analytics />
          <div className="p-6 flex flex-col justify-center items-center">{children}</div>
        </main>
      </body>
    </html>
  );
}
