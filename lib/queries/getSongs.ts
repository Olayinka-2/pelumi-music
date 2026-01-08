import { supabaseServer } from "../superbase/supabaseServer";
import { musicTypes } from "@/app/types/music";

export async function getSongs(): Promise<musicTypes[]> {
  const { data, error } = await supabaseServer
    .from("songs")
    .select("*")
    .order("released_date", { ascending: false });

    if(error) {
      console.error("superBase error", error);
      return [];
    }

    return data ?? [];
}

