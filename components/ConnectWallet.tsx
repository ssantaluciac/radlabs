'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const ConnectWallet = () => {
    const { data: session } = useSession()

  return (
    <div className="flex relative justify-center mt-[50px]">
        {session?.user ? (
            redirect('/main')

        ) : (
            <ConnectButton 
                label="Connect Wallet"
            />
        )}
    </div>
  )
}

export default ConnectWallet