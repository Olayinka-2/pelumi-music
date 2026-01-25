import { supabaseServer } from "@/lib/superbase/supabaseServer";

export async function uploadSong(formData: FormData) {
  "use server";
  
  const supabase = await supabaseServer();

  // Get form data
  const title = formData.get("title") as string;
  const artistName = formData.get("artist_name") as string;
  const featuring = formData.get("featuring") as string | null;
  const releasedDate = formData.get("released_date") as string;
  const coverFile = formData.get("cover") as File;
  const musicFile = formData.get("music") as File;

  try {
    // 1. Upload cover image to 'covers' bucket
    const coverFileName = `${Date.now()}-${coverFile.name}`;
    const { data: coverData, error: coverError } = await supabase.storage
      .from("covers")
      .upload(coverFileName, coverFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (coverError) throw coverError;

    // 2. Upload music file to 'music' bucket
    const musicFileName = `${Date.now()}-${musicFile.name}`;
    const { data: musicData, error: musicError } = await supabase.storage
      .from("music")
      .upload(musicFileName, musicFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (musicError) throw musicError;

    // 3. Get public URLs
    const { data: coverUrl } = supabase.storage
      .from("covers")
      .getPublicUrl(coverData.path);

    const { data: musicUrl } = supabase.storage
      .from("music")
      .getPublicUrl(musicData.path);

    // 4. Insert song data into database
    const { data: song, error: dbError } = await supabase
      .from("songs")
      .insert({
        title,
        artist_name: artistName,
        featuring: featuring || null,
        released_date: releasedDate,
        cover_url: coverUrl.publicUrl,
        music_url: musicUrl.publicUrl,
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

// Example usage in a Server Action or API Route
export async function createSong(formData: FormData) {
  "use server";
  
  const result = await uploadSong(formData);
  
  if (!result.success) {
    throw new Error(result.error);
  }
  
  return result.data;
}