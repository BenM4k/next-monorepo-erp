import {
  adminClient,
  inferAdditionalFields,
  organizationClient,
} from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
import { adminRole, userRole, ac, superAdminRole } from "./permissions"
import { auth } from "./auth"

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  // baseURL: process.env.BETTER_AUTH_URL!,
  plugins: [
    inferAdditionalFields<typeof auth>(),
    adminClient({
      ac,
      roles: {
        admin: adminRole,
        user: userRole,
        superAdmin: superAdminRole,
      },
      defaultRole: "user",
    }),
    organizationClient(),
  ],
})
export type SignIn = ReturnType<typeof createAuthClient>["signIn"]
