import defaultImage from "../assets/no-image-placeholder.webp";

export const getCroppedImageUrl = (imageUrl: string) => {
  if (!imageUrl) return defaultImage;
  const target = "media/";
  const index = imageUrl.indexOf(target) + target.length;
  return imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);
};
