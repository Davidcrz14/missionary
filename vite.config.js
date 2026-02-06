import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Chunk splitting strategy
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: React ecosystem in its own chunk (cached independently)
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // FontAwesome icons
          'vendor-icons': [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/react-fontawesome',
          ],
          // Heavy data files — lazy loaded with pages, but grouped
          'data-content': [
            './src/data/fundamentalTopics.js',
            './src/data/scripturesRevelation.js',
            './src/data/restorationAuthority.js',
            './src/data/commandmentsCovenants.js',
            './src/data/missionarySkills.js',
          ],
          'data-articles': ['./src/data/articles.js'],
        },
      },
    },
    // Minification
    minify: 'esbuild',
    // Smaller source maps for production
    sourcemap: false,
  },
})
