// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    modules: ["@nuxtjs/google-fonts"],
    devtools: { enabled: true },
    vite: { plugins: [tailwindcss()] },
    css: ["~/assets/css/main.css"],
    googleFonts: {
        families: {
            Montserrat: [200, 300, 400, 500, 600, 700],
        },
        display: "swap",
    },
});
