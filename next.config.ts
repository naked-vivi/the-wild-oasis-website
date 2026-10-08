import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cabvaqbnxpmhcabizmle.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/w40/*.png",
        search: "",
      },
    ],
  },
};

export default nextConfig;
