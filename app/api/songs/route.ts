// app/api/songs/route.ts
import { NextResponse } from "next/server";
import { getLatestSong } from "@/lib/queries/getLatestSong";

export async function GET() {
  const songs = await getLatestSong();
  return NextResponse.json(songs);
}
