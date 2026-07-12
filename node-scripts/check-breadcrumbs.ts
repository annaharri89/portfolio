import process from "node:process";
import {
	getBreadcrumbTrail,
	PORTFOLIO_PRERENDER_PATHS,
	ROUTE_SEO,
} from "../src/seo";

const tag = "[check:breadcrumbs]";
const validationErrors: string[] = [];

for (const routePath of PORTFOLIO_PRERENDER_PATHS) {
	if (!ROUTE_SEO[routePath]) {
		validationErrors.push(`${routePath}: missing ROUTE_SEO entry`);
		continue;
	}

	const breadcrumbTrail = getBreadcrumbTrail(routePath);
	if (routePath !== "/" && breadcrumbTrail.length < 2) {
		validationErrors.push(
			`${routePath}: breadcrumb trail has only ${breadcrumbTrail.length} item(s)`,
		);
	}
}

if (validationErrors.length > 0) {
	console.error(`${tag} ${validationErrors.length} issue(s):`);
	for (const message of validationErrors) {
		console.error(`  - ${message}`);
	}
	process.exit(1);
}

console.log(
	`${tag} OK (${PORTFOLIO_PRERENDER_PATHS.length} prerender routes with valid breadcrumb trails)`,
);
