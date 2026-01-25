"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/superbase/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminSignUpPage() {
  const supabase = supabaseBrowser();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/admin/login");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSignUp}>
      <h1>Admin Sign Up</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button disabled={loading}>
        {loading ? "Creating account..." : "Sign Up"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
