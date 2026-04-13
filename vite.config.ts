import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

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
