import { supabaseServer } from "@/lib/superbase/supabaseServer"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  const supabase = await supabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/signIn")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            Admin Dashboard
          </h1>

          <form action="/signOut" method="post">
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md">
              SignOut
            </button>
          </form>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">User Information</h2>

          <div className="space-y-2 text-sm">
            <p><b>Email:</b> {user.email}</p>
            <p><b>User ID:</b> {user.id}</p>
            <p>
              <b>Created:</b>{" "}
              {new Date(user.created_at).toLocaleDateString()}
            </p>
            <p>
              <b>Last Sign In:</b>{" "}
              {user.last_sign_in_at
                ? new Date(user.last_sign_in_at).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
