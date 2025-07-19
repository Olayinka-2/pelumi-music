const images = import.meta.glob("../../asset/musicImages/*.jpg", {
  eager: true,
  import: 'default',
});

const imageMap: Record<string, string> = {};

for(const path in images) {
  const fileName = path.split("/").pop()!;
  imageMap[fileName] = images[path] as string;
}

export default imageMap;