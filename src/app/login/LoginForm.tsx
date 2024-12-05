"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";

export function LoginForm() {
  //calling server actions-login action, initial stage undefined
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}
      <div className="flex flex-col gap-2">
        <input id="email" name="email" placeholder="Email" />
      </div>

      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}
      <div className="flex flex-col gap-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      Login
    </button>
  );
}
