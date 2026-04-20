import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const isSsrPrerenderBundle = process.env.VITE_SSR_PRERENDER === '1'

export default defineConfig({
	plugins: [solidPlugin()],
	base: '/',
	resolve: {
		tsconfigPaths: true
	},
	build: {
		target: 'esnext',
		outDir: 'dist'
	}
})
