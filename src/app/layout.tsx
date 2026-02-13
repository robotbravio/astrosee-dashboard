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
          <div className="min-h-screen">
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Header />
                <main className="p-4">{children}</main>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
