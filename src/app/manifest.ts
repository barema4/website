import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Royal Roastery",
    short_name: "Royal Roastery",
    description:
      "From Farm to Cup Excellence. Fresh roasted coffee, green beans, and coffee experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6FAF8",
    theme_color: "#0B1F14",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
