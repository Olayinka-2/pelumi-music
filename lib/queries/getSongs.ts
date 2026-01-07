import { supabaseServer } from "../superbase/supabaseServer";
import {supabase} from "../superbase/supabaseClient"
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

export async function getSongsForClient(): Promise<musicTypes[]> {
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

