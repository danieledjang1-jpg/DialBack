import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({ plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: ['icons/dialback.svg'], manifest: { name: 'DialBack', short_name: 'DialBack', description: 'Simple, smart and accessible digital services.', theme_color: '#080b1d', background_color: '#080b1d', display: 'standalone', start_url: '/', icons: [{ src: '/icons/dialback.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }] }, workbox: { navigateFallback: '/index.html', globPatterns: ['**/*.{js,css,html,svg,png,webp}'] } })] });
