import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { getApiUrl } from "@/lib/base-fetcher";

interface TokenResult {
  accessToken: string;
  refreshToken: string;
}

interface LoginResponse {
  isSuccess: boolean;
  result?: TokenResult;
}

/**
 * JWT'nin payload kısmını doğrulamadan okur; yalnızca arayüzde gösterilecek
 * bilgiler (kullanıcı adı, e-posta vb.) için kullanılır. İmza doğrulaması backend'de yapılır.
 */
const decodeJwtPayload = (token: string): Record<string, unknown> => {
  try {
    const payload = token.split(".")[1] ?? "";
    const json = Buffer.from(
      payload.replaceAll("-", "+").replaceAll("_", "/"),
      "base64",
    ).toString("utf8");
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return {};
  }
};

const asString = (value: unknown): string | undefined =>
  typeof value === "string" ? value : undefined;

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-posta",
          type: "email",
          placeholder: "E-posta",
        },
        password: {
          label: "Şifre",
          type: "password",
          placeholder: "Şifre",
        },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const response = await fetch(getApiUrl("/auth/login"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!response.ok) {
          return null;
        }

        const data = (await response.json()) as LoginResponse;
        if (!data.isSuccess || !data.result?.accessToken) {
          return null;
        }

        const claims = decodeJwtPayload(data.result.accessToken);
        return {
          id: asString(claims.userId) ?? credentials.email,
          email: asString(claims.userMail) ?? credentials.email,
          name:
            [asString(claims.userFirstName), asString(claims.userLastName)]
              .filter(Boolean)
              .join(" ") || credentials.email,
          accessToken: data.result.accessToken,
          refreshToken: data.result.refreshToken,
        };
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
};

export default options;
