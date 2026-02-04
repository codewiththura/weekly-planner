import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: '/weekly-planner-pwa-app/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "mask-able-icon.png",
      ],
      manifest: {
        name: "Weekly Planner",
        short_name: "WeeklyPlanner",
        description: "Track high-level productivity across weeks.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "screenshot-mobile.png",
            sizes: "1170x2532",
            type: "image/png",
            form_factor: "narrow",
            label: "Mobile view of My App",
          },
          {
            src: "screenshot-desktop.png",
            sizes: "2151x1209",
            type: "image/png",
            form_factor: "wide",
            label: "Desktop view of My App",
          },
        ],
      },
    }),
  ],
});
