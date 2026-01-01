import { supabase } from "../supabaseClient";

export async function getSongs() {
  const {data, error} = await supabase.from("songs").select("*").order("released_date", {ascending: false});
  if(error) {
    console.error(error);
    throw new Error("Failed to fetch Songs")
  }
  return data;
}