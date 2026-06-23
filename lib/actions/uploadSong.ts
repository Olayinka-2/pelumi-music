"use server";

import { supabaseServer } from "@/lib/superbase/supabaseServer";

export async function uploadSong(formData: FormData) {
  const supabase = await supabaseServer();

  const title = formData.get("title") as string;
  const artistName = formData.get("artist_name") as string;
  const featuring = formData.get("featuring") as string | null;
  const releasedDate = formData.get("released_date") as string;
  const coverFile = formData.get("cover") as File;
  const musicUrl = formData.get("music_url") as string;

  try {
    // 1. Upload cover image to 'Album covers' bucket
    const coverFileName = `${Date.now()}-${coverFile.name}`;
    const { data: coverData, error: coverError } = await supabase.storage
      .from("Album covers")
      .upload(coverFileName, coverFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (coverError) throw coverError;

    // 2. Get public URL for the cover
    const { data: coverUrlData } = supabase.storage
      .from("Album covers")
      .getPublicUrl(coverData.path);

    // 3. Insert song data into database — music_url comes directly from the form
    const { data: song, error: dbError } = await supabase
      .from("songs")
      .insert({
        title,
        artist_name: artistName,
        featuring: featuring || null,
        released_date: releasedDate,
        cover_url: coverUrlData.publicUrl,
        music_url: musicUrl,
      })
      .select()
      .single();

    if (dbError) throw dbError;

    return { success: true, data: song };
  } catch (error) {
    console.error("Upload error:", error);
    return { success: false, error: "Failed to upload song" };
  }
}