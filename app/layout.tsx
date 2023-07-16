import './globals.css';

export const metadata = {
  title: '연금 받을 수 있을까?',
  description: '나는 연금을 받을 수 있을까?',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <head>
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css" />
      </head>
      <body>
        <main>
          <div className="p-6 flex flex-col justify-center items-center">{children}</div>
        </main>
      </body>
    </html>
  );
}
