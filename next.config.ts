import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    KINDE_POST_LOGIN_REDIRECT_URL: process.env.KINDE_POST_LOGIN_REDIRECT_URL,
    KINDE_POST_LOGOUT_REDIRECT_URL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
  },
};

export default nextConfig;
