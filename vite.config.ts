import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { seoStaticPrerenderPlugin } from './vite-plugin-seo-static';

export default defineConfig({
	plugins: [solidPlugin(), seoStaticPrerenderPlugin()],
	base: '/',
	resolve: {
		tsconfigPaths: true
	},
	build: {
		target: 'esnext',
		outDir: 'dist'
	}
})
