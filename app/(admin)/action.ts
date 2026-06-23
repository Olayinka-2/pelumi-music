"use server";

import { supabaseServer } from "@/lib/superbase/supabaseServer";
import { revalidatePath } from "next/cache";

export async function deleteSong(songId: string) {
  const supabase = await supabaseServer();

  const { data: song, error: fetchError } = await supabase
    .from("songs")
    .select("cover_url, music_url")
    .eq("id", songId)
    .single();

  if (fetchError || !song) {
    return { success: false, error: "Song not found" };
  }

  const coverPath = extractStoragePath(song.cover_url, "Album covers");

  if (coverPath) {
    await supabase.storage.from("Album covers").remove([coverPath]);
  }

  const { error: deleteError } = await supabase
    .from("songs")
    .delete()
    .eq("id", songId);

  if (deleteError) {
    return { success: false, error: deleteError.message };
  }

  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/music");

  return { success: true };
}

function extractStoragePath(url: string | null, bucketName: string): string | null {
  if (!url) return null;
  const encodedBucket = encodeURIComponent(bucketName);
  const marker = `/public/${encodedBucket}/`;
  const index = url.indexOf(marker);
  if (index === -1) return null;
  return decodeURIComponent(url.slice(index + marker.length));
}