import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AppProviders from '@/components/providers/AppProviders';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlowScrape',
  description: 'SaaS application to automate workflow and webscraping.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
