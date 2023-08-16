import './globals.css'
import type { Metadata } from 'next';
import type { Session } from 'next-auth';
import '@rainbow-me/rainbowkit/styles.css';
import RainbowKitProviders from '../components/RainbowKitProviders';

export const metadata: Metadata = {
  title: 'Radlabs',
  description: 'Play to earn',
}

export default function RootLayout({
  children, session
}: {
  children: React.ReactNode, session: Session | null
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico/" sizes="any" />
      </head>
      <body>
        <main>
          <RainbowKitProviders session={session}>
            {children}
          </RainbowKitProviders>
        </main>
      </body>
    </html>
  )
}
