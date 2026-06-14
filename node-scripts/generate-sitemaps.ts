import { writeFile } from "node:fs/promises";
import path from "node:path";
import { isUpworkMode } from "../src/constants/upwork";
import { getMarketingSitemapEntries, SITE_URL, type SitemapEntry } from "../src/seo";

const publicDir = path.resolve(import.meta.dirname, "..", "public");

function escapeXml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function formatSitemap(entries: SitemapEntry[]): string {
	const urls = entries
		.map(
			(entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
  </url>`,
		)
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const robotsTxt = isUpworkMode
	? `User-agent: *
Disallow: /
`
	: `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await writeFile(
	path.join(publicDir, "sitemap.xml"),
	formatSitemap(getMarketingSitemapEntries()),
	"utf8",
);
await writeFile(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");
