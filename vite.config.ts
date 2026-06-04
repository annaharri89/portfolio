import path from "node:path";
import { fileURLToPath } from "node:url";
import { solidStart } from "@solidjs/start/config";
import { nitroV2Plugin } from "@solidjs/vite-plugin-nitro-2";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { PORTFOLIO_PRERENDER_PATHS } from "./src/seo.ts";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		solidStart(),
		{
			name: "portfolio-client-outdir",
			config() {
				return {
					environments: {
						client: {
							build: { outDir: "dev" },
						},
					},
				};
			},
		},
		nitroV2Plugin({
			preset: "static",
			output: {
				publicDir: path.join(projectRoot, "dist"),
			},
			prerender: {
				crawlLinks: false,
				routes: [...PORTFOLIO_PRERENDER_PATHS],
			},
		}),
	],
	build: {
		target: "esnext",
	},
});
