import 'antd/dist/reset.css';
import '../styles/globals.css';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Portfolio | Kirti Singh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}