import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';//images load at build time so api call doesn't happen helps in cumlative layout shift
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>

    </html>
  );
}
