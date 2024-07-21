import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Provider } from '@/app/Providers';
import NavigationBar from '@/app/Components/NavigationBar';

const poppins = Poppins({ subsets: ['latin-ext'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'MaileHereko',
  description: 'This web app is a movie database and provides information about movies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Provider>
          <main className="z-10 h-full">
            <NavigationBar />
            <section className="px-[2rem] md:px-[5rem] xl:px-[15rem] 2xl:px-[25rem]">
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
