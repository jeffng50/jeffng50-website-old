import { sveltekit } from '@sveltejs/kit/vite'
import houdini from 'houdini/vite'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
	plugins: [nodePolyfills(), houdini(), sveltekit()]
});
