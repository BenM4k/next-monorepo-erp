import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db, drizzleSchema } from "@workspace/db/drizzle"
import { nextCookies } from "better-auth/next-js"
import { admin, organization } from "better-auth/plugins"
import { ac, adminRole, superAdminRole, userRole } from "./permissions"

// const isProduction = process.env.NODE_ENV === "production"
const webApp = process.env.WEB_APPLICATION
const api = process.env.APPLICATION_API
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: drizzleSchema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [].filter((url) => Boolean(url)),
  plugins: [
    nextCookies(),
    admin({
      ac,
      roles: {
        admin: adminRole,
        user: userRole,
        superAdmin: superAdminRole,
      },
      defaultRole: "user",
    }),
    organization(),
  ],
  socialProviders: {
    google: {
      clientId: "clientID",
      clientSecret: "clientSecret",
    },
  },
})

export type Auth = ReturnType<typeof betterAuth>
export type Session = Auth["$Infer"]["Session"]
