import './globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/header';
import { Providers } from '@/components/providers';
import { Sidebar } from '@/components/sidebar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
              <Header />
              <main className="p-6">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
