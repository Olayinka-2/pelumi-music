'use client'

import { useActionState } from 'react'
import { signIn } from '@/lib/actions/signIn'
import { useEffect, useState, useRef} from 'react'



type SignInState = {
  error?: string
}

const initialState: SignInState = {}


export default function LoginPage() {
  const [state, formAction, pending] = useActionState(signIn, initialState);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
    const el = errorRef.current;
    if (!el || !state?.error) return;

    // Show it
    el.style.display = "block";
    el.style.opacity = "1";

    // Clear old timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // Hide after 4 seconds
    timerRef.current = setTimeout(() => {
      el.style.opacity = "0";
      el.style.transition = "opacity 300ms";
      setTimeout(() => {
        el.style.display = "none";
      }, 300);
    }, 4000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state?.error]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form action={formAction} className="bg-white p-8 rounded-2xl shadow-sm space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-primary">Admin Login</h1>

    <p
          ref={errorRef}
          className="text-red-500 text-sm"
          style={{ display: "none", opacity: 0 }}
        >
          {state?.error || ""}
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border rounded-lg px-4 py-2"
        />

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-foreground text-white py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
