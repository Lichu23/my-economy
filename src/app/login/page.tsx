import { Button } from "@/components/ui/button";
import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import React from 'react'

export default function Login() {

  return (
    <main className="flex flex-col justify-center items-center gap-6 text-2xl p-4">
        <h1>Sign In MyEconomy</h1>
        <Button asChild>
            <LoginLink>Sign In</LoginLink>
        </Button>
    </main>
  )
}
