'use client'

import { SiweMessage } from "siwe"
import { getCsrfToken, signIn } from "next-auth/react"
import { useAccount, useNetwork, useSignMessage } from "wagmi"

const Siwe = () => {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const { address } = useAccount();

  const handleLogin = async () => {
    try {
      const callbackUrl ="/main";
            const message = new SiweMessage({
                domain: window.location.host,
                address: address,
                statement: "Sign in with Ethereum to the app.",
                uri: window.location.origin,
                version: "1",
                chainId: chain?.id,
                nonce: await getCsrfToken(),
            })

            const signature = await signMessageAsync({message: message.prepareMessage()});
            signIn("credentials", {
                message: JSON.stringify(message),
                signature,
                callbackUrl,
            })
    } catch (error) {
      window.alert(error)
    }
  }
}

export default Siwe