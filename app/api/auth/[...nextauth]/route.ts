import NextAuth from 'next-auth';
import { SiweMessage } from "siwe";
import { getCsrfToken } from "next-auth/react";
// import { NextRequest, NextResponse } from 'next/server';
import CredentialsProvider from "next-auth/providers/credentials"

const providers = [
  CredentialsProvider({
    name: "Ethereum",
    credentials: {
      message: {
        label: "Message",
        type: "text",
        placeholder: "0x0",
      },
      signature: {
        label: "Signature",
        type: "text",
        placeholder: "0x0",
      },
    },
    async authorize( credentials, req) {
      try {
        const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"))
        const nextAuthUrl = new URL(process.env.NEXTAUTH_URL || "")

        const result = await siwe.verify({
          signature: credentials?.signature || "",
          domain: nextAuthUrl.host,
          nonce: await getCsrfToken({req: {headers: req?.headers}}),
        })
        if (result.success) {
          return {
            id: siwe.address,
          }
        }
        return null
      } catch (e) {
        return null
      }
    },
  }),
];

const authOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work

    
    // Configure one or more authentication providers
    providers,
    
    secret: process.env.NEXTAUTH_SECRET,
    callback: {
      async session({ session, token }: { session: any; token: any }) {
        session.address = token.sub
        session.user.name = token.sub
       // session.user.image = "https://www.fillmurray.com/128/128"
        return session
      },
    },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
