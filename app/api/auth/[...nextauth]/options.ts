import type { NextAuthOptions, DefaultSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";

declare module "next-auth" {
  interface User {
    role?: string;
  }

  interface Session {
    user: {
      role?: string;
    } & DefaultSession["user"];
  }
}

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile Github", profile);

        let userRole = "Github User";

        if (profile?.email === "colinlubembe68@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google", profile);

        let userRole = "Google User";

        if (profile?.email === "colinlubembe68@outlook.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        try {
          if (!credentials) {
            return null;
          }

          const user = await User.findOne({ email: credentials.email });

          const hashedPassword = await bcrypt.compare(
            credentials.password,
            user?.password
          );

          if (user && hashedPassword) {
            user["role"] = "unverified user";

            return user;
          }
        } catch (error) {
          console.log("Error", error);
          return null;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role as string | undefined;
      return session;
    },
  },
};
