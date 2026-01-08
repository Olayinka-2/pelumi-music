// app/api/songs/route.ts
import { NextResponse } from "next/server";
import { getSongs } from "@/lib/queries/getSongs";

export async function GET() {
  const songs = await getSongs();
  return NextResponse.json(songs);
}
