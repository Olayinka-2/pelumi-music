import { supabaseServer } from "../superbase/supabaseServer";
import { musicTypes } from "@/app/types/music";

export async function getLatestSong(): Promise<musicTypes | null> {
  const supabase = await supabaseServer();
  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("released_date", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("Supabase error:", error);
    return null;
  }

  return data;
}
