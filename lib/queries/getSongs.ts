import { supabaseServer } from "../superbase/supabaseServer";
import { musicTypes } from "@/app/(Users)/types/music";

export async function getSongs(): Promise<musicTypes[]> {
  const supabase = await supabaseServer();
  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("released_date", { ascending: false });

    if(error) {
      console.error("superBase error", error);
      return [];
    }

    return data ?? [];
}

