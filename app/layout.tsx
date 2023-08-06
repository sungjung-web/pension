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
        <meta property="og:title" content="연금 받을 수 있을까?" />
        <meta property="og:description" content="나는 연금을 받을 수 있을까?" />
        <meta property="og:url" content="https://pension-pi.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="연금 받을 수 있을까?" />
        <meta property="og:image" content="https://pension-pi.vercel.app/resources/seo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@team_maeum" />
        <meta name="twitter:creator" content="@team_maeum" />
        <meta name="twitter:title" content="연금 받을 수 있을까?" />
        <meta name="twitter:description" content="나는 연금을 받을 수 있을까?" />
        <meta name="twitter:domain" content="https://pension-pi.vercel.app/" />
        <meta name="twitter:url" content="https://pension-pi.vercel.app/" />
        <meta name="twitter:image" content="https://pension-pi.vercel.app/resources/seo.png" />

        <meta name="x:card" content="summary_large_image" />
        <meta name="x:site" content="@team_maeum" />
        <meta name="x:creator" content="@team_maeum" />
        <meta name="x:title" content="연금 받을 수 있을까?" />
        <meta name="x:description" content="나는 연금을 받을 수 있을까?" />
        <meta name="x:domain" content="https://pension-pi.vercel.app/" />
        <meta name="x:url" content="https://pension-pi.vercel.app/" />
        <meta name="x:image" content="https://pension-pi.vercel.app/resources/seo.png" />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <main className="flex justify-center w-full">
          <div style={{ maxWidth: '500px', width: '100%' }}>
            <Analytics />
            <div className="p-6 flex flex-col justify-center items-center">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
