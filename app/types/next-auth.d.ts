import NextAuth, { DefaultUser } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      age: string,
      weight: string,
      calories: string,
      id: string,
      name: string,
      email: string,
      height: string,
      gender: string,
      activity: string,
      password: string,
      isActive?: boolean,
      stripeCustomerId?: string,
      subscriptionId?: string,
    }
  }
}