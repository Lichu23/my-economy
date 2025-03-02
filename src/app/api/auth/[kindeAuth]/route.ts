import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth({
  login: {
    returnTo: "/api/auth/callback", // Redirige al endpoint donde guardamos el usuario en la DB
  },
});
