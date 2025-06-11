import '@/app/globals.css';

import localFont from 'next/font/local'
 
const amfibia = localFont({
  src: "../../public/fonts/Amfibia-Black.ttf",
  variable: '--font-amfibia',
  display: 'swap',
})

export const metadata = {
  title: 'Pierre Gueguen',
}

export default async function RootLayout({ children })
{
  return (
    <html lang="en">
      <body className={amfibia.variable}>
        {children}
      </body>
    </html>
  );
}
