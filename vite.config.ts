import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'


// https://vitejs.dev/config/
export default defineConfig({
    base: '/z_center_frontend/',
    plugins: [svelte()],
    publicDir: 'dist',
    assetsInclude: ['**/*.{font,png,jpg,svg}'],
})
