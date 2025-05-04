import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}