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

            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
