function buildImageMap(globResult: Record<string, unknown>): Record<string, string> {
  const map: Record<string, string> = {};
  for (const path in globResult) {
    const fileName = path.split("/").pop()!;
    map[fileName] = globResult[path] as string;
  }
  return map;
}

const musicImagesGlob = import.meta.glob("../../asset/musicImages/*.jpg", {
  eager: true,
  import: "default",
});

const videoImagesGlob = import.meta.glob("../../asset/videoImages/*.jpg", {
  eager: true,
  import: "default",
});

const musicImageMap = buildImageMap(musicImagesGlob);
const videoImageMap = buildImageMap(videoImagesGlob);

export { musicImageMap, videoImageMap };
