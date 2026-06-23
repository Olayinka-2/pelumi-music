"use client";

import { useRef, useState } from "react";
import { uploadSong } from "@/lib/actions/uploadSong";

export default function UploadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await uploadSong(formData);

    if (result.success) {
      setMessage({ type: "success", text: "Song uploaded successfully." });
      formRef.current?.reset();
    } else {
      setMessage({ type: "error", text: result.error ?? "Upload failed." });
    }

    setPending(false);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-sm space-y-4"
    >
      <h2 className="text-xl font-semibold text-primary">Upload New Song</h2>

      {message && (
        <p className={message.type === "success" ? "text-green-600 text-sm" : "text-red-500 text-sm"}>
          {message.text}
        </p>
      )}

      <input type="text" name="title" placeholder="Song title" required className="w-full border rounded-lg px-4 py-2" />
      <input type="text" name="artist_name" placeholder="Artist name" required className="w-full border rounded-lg px-4 py-2" />
      <input type="text" name="music_url" placeholder="Music url" required className="w-full border rounded-lg px-4 py-2" />
      <input type="text" name="featuring" placeholder="Featuring (optional)" className="w-full border rounded-lg px-4 py-2" />
      <input type="date" name="released_date" required className="w-full border rounded-lg px-4 py-2" />

      <div>
        <label className="block text-sm text-gray-600 mb-1">Cover image</label>
        <input type="file" name="cover" accept="image/*" required className="w-full" />
      </div>

    

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-foreground text-white py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Uploading..." : "Upload Song"}
      </button>
    </form>
  );
}