'use client'

import { useActionState } from 'react'
import { signIn } from '@/lib/actions/signIn'

type SignInState = {
  error?: string
}

const initialState: SignInState = {}

export default function LoginPage() {
  const [state, action] = useActionState(signIn, initialState)

  return (
    <form action={action}>
      <input name="email" className='border-2 border-gray-500'/>
      <input name="password" />

      {state.error && <p className="text-red-500">{state.error}</p>}

      <button>Login</button>
    </form>
  )
}

