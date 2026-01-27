import { supabaseServer } from "@/lib/superbase/supabaseServer"
import { redirect } from "next/navigation"

export async function POST() {
  const supabase = await supabaseServer()
  await supabase.auth.signOut()
  redirect("/signIn")
}
