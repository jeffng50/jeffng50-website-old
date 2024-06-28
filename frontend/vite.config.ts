import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'jeff-ng',
				project: 'jeffng50-website'
			}
		}),
		houdini(),
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
});
