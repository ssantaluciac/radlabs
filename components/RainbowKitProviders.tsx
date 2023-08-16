'use client'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum
} from 'wagmi/chains';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALQUEMY_API_KEY || '' })
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: process.env.WALLET_CONNECT_PROJECT_ID || '92748e72aafbc2d74b7f70f64de89d38',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const RainbowKitProviders = ({ children, session }: { children: React.ReactNode, session: Session | null }) => {
    return (
        <WagmiConfig config={wagmiConfig}>
          <SessionProvider refetchInterval={0} session={session}>
            <RainbowKitSiweNextAuthProvider>
              <RainbowKitProvider
                chains={chains}
                theme={darkTheme({
                  accentColor: '#F0B000',
                  accentColorForeground: 'black',
                  borderRadius: 'large',
                  fontStack: 'system',
                  overlayBlur: 'small',
                })}
                >
                  {children}
              </RainbowKitProvider>
            </RainbowKitSiweNextAuthProvider>
          </SessionProvider>
        </WagmiConfig>
    );
};

export default RainbowKitProviders