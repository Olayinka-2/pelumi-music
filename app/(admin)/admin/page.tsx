"use client";

export const dynamic = 'force-dynamic'

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/superbase/supabaseClient";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";

export default function AdminPage() {
  const supabase = supabaseBrowser();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/signIn");
      } else {
        setUser(user);
      }

      setLoading(false);
    };

    checkUser();
  }, [supabase, router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/signIn");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            User Information
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-sm font-medium text-gray-500 w-32">
                Email:
              </span>
              <span className="text-sm text-gray-900">{user.email}</span>
            </div>
            <div className="flex items-start">
              <span className="text-sm font-medium text-gray-500 w-32">
                User ID:
              </span>
              <span className="text-sm text-gray-900 font-mono">{user.id}</span>
            </div>
            <div className="flex items-start">
              <span className="text-sm font-medium text-gray-500 w-32">
                Created:
              </span>
              <span className="text-sm text-gray-900">
                {new Date(user.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-sm font-medium text-gray-500 w-32">
                Last Sign In:
              </span>
              <span className="text-sm text-gray-900">
                {user.last_sign_in_at
                  ? new Date(user.last_sign_in_at).toLocaleString()
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="px-4 py-3 text-left border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <div className="text-sm font-medium text-gray-900">
                Manage Users
              </div>
              <div className="text-xs text-gray-500 mt-1">
                View and manage user accounts
              </div>
            </button>
            <button className="px-4 py-3 text-left border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <div className="text-sm font-medium text-gray-900">
                Settings
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Configure application settings
              </div>
            </button>
            <button className="px-4 py-3 text-left border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <div className="text-sm font-medium text-gray-900">
                Analytics
              </div>
              <div className="text-xs text-gray-500 mt-1">
                View system analytics and reports
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}