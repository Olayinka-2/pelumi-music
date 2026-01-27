// app/login/actions.ts
'use server'

import { supabaseServer } from '../superbase/supabaseServer'
import { redirect } from 'next/navigation'

export async function signIn(
  prevState: { error?: string },
  formData: FormData
) {
  const supabase = await supabaseServer()

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (error) {
    return { error: error.message }
  }

  redirect('/admin')
}

