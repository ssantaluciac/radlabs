import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import RainbowKitProviders from '../components/RainbowKitProviders';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Radlabs',
  description: 'Play to earn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <html lang="en">
      <body className="background">
        <main>
          <RainbowKitProviders>
            {children}
          </RainbowKitProviders>
        </main>
      </body>
    </html>
  )
}
