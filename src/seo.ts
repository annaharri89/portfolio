import {
	CONTACT_PATH,
	HOME_PATH,
	ROUTES,
	STITCH_COUNTER_V2_BETA_PATH,
	STITCH_COUNTER_V2_EULA_PATH,
	STITCH_COUNTER_V2_PATH,
	STITCH_COUNTER_V2_PRIVACY_POLICY_PATH,
} from "./marketingRoutes";
import { SOCIAL_LINKS } from "./constants/social";
import { isUpworkMode } from "./constants/upwork";
import type { TwitterCardKind } from "./seo/seoTypes";

function readSiteOrigin(): string | undefined {
	if (typeof process !== "undefined" && process.env.VITE_SITE_ORIGIN) {
		return process.env.VITE_SITE_ORIGIN;
	}
	return import.meta.env?.VITE_SITE_ORIGIN;
}

function defaultSiteOrigin(): string {
	if (typeof process !== "undefined" && process.env.VITE_UPWORK_MODE === "true") {
		return "https://upwork.harrisonsoftware.dev";
	}
	if (import.meta.env?.VITE_UPWORK_MODE === "true") {
		return "https://upwork.harrisonsoftware.dev";
	}
	return "https://harrisonsoftware.dev";
}

export const SITE_URL = readSiteOrigin() ?? defaultSiteOrigin();
export const SITE_NAME = "Anna Harrison";
export const SITE_LAST_MODIFIED = "2026-05-23";

const DEFAULT_OG_IMAGE_PATH =
	"/work/android-ui-ux/counter_big_numbers_portrait.png";
const DEFAULT_OG_IMAGE_ALT =
	"Android stitch counter UI with large readable numbers on a project screen";
export const DEFAULT_TWITTER_CARD: TwitterCardKind = "summary_large_image";

export interface RouteSeoEntry {
	title: string;
	description: string;
	canonicalPath: string;
	ogImagePath?: string;
	ogImageAlt?: string;
	twitterCard?: TwitterCardKind;
}

export interface SitemapEntry {
	loc: string;
	lastmod: string;
}

const MAIN_SITE_PRERENDER_PATHS = [
	HOME_PATH,
	ROUTES.ABOUT,
	ROUTES.PROJECTS,
	ROUTES.SKILLS,
	ROUTES.CONTACT,
	STITCH_COUNTER_V2_PATH,
	ROUTES.STITCH_COUNTER,
	ROUTES.HPF_PULSE,
	STITCH_COUNTER_V2_EULA_PATH,
	STITCH_COUNTER_V2_PRIVACY_POLICY_PATH,
	STITCH_COUNTER_V2_BETA_PATH,
	ROUTES.SOLITAIRE,
	ROUTES.DUAL_BRAND_CONSUMER_PLATFORM,
] as const;

const UPWORK_PRERENDER_PATHS = [
	HOME_PATH,
	ROUTES.ABOUT,
	ROUTES.PROJECTS,
	ROUTES.SKILLS,
	STITCH_COUNTER_V2_PATH,
	ROUTES.STITCH_COUNTER,
	ROUTES.HPF_PULSE,
	ROUTES.SOLITAIRE,
	ROUTES.DUAL_BRAND_CONSUMER_PLATFORM,
] as const;

export const PORTFOLIO_PRERENDER_PATHS = isUpworkMode
	? UPWORK_PRERENDER_PATHS
	: MAIN_SITE_PRERENDER_PATHS;

export type PortfolioPrerenderPath = (typeof PORTFOLIO_PRERENDER_PATHS)[number];

export const ROUTE_SEO: Record<string, RouteSeoEntry> = {
	[HOME_PATH]: {
		title: "Anna Harrison — Android & Kotlin developer",
		description:
			"Android-first developer: Jetpack Compose apps, Kotlin Multiplatform experiments, and shipped Play builds—portfolio.",
		canonicalPath: HOME_PATH,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary_large_image",
	},
	[ROUTES.STITCH_COUNTER_V2]: {
		title: "Stitch Counter V2 — case study (Android, Compose, CI/CD)",
		description:
			"Case study: Room, DataStore, Hilt, Jetpack Compose, and CI for a local-first craft counter on Google Play production.",
		canonicalPath: ROUTES.STITCH_COUNTER_V2,
		ogImagePath: "/work/android-feature-development/case1_data_library.png",
		ogImageAlt:
			"Stitch Counter library screen showing project list and navigation",
		twitterCard: "summary_large_image",
	},
	[ROUTES.STITCH_COUNTER]: {
		title: "Stitch Counter (original) — Anna Harrison",
		description:
			"Earlier Android app: themed stitch counters and project tracking—predecessor to the V2 rewrite.",
		canonicalPath: ROUTES.STITCH_COUNTER,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary",
	},
	[ROUTES.HPF_PULSE]: {
		title: "HPF Pulse — Anna Harrison",
		description:
			"Cross-platform directory app for the Humanity Preservation Foundation: services and education resources.",
		canonicalPath: ROUTES.HPF_PULSE,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary",
	},
	[ROUTES.PROJECTS]: {
		title: "Projects — Anna Harrison",
		description:
			"Selected mobile and web work: shipped Android, Kotlin Multiplatform games, and supporting portfolio engineering.",
		canonicalPath: ROUTES.PROJECTS,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary_large_image",
	},
	[ROUTES.ABOUT]: {
		title: "About Anna Harrison",
		description:
			"Background in Kotlin and Jetpack Compose: production Android work, iOS collaboration, and how I like to build.",
		canonicalPath: ROUTES.ABOUT,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary",
	},
	[ROUTES.SKILLS]: {
		title: "Skills & technologies — Anna Harrison",
		description:
			"Stack snapshot: Android, Compose, Kotlin, Gradle, CI, and practical iOS/SwiftUI delivery when projects need it.",
		canonicalPath: ROUTES.SKILLS,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary",
	},
	[CONTACT_PATH]: {
		title: "Contact — Anna Harrison",
		description:
			"Reach out for Android engineering roles, Kotlin work, or collaboration—email and professional links.",
		canonicalPath: CONTACT_PATH,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary_large_image",
	},
	[STITCH_COUNTER_V2_EULA_PATH]: {
		title: "Stitch Counter V2 — EULA",
		description:
			"End-user license agreement for Stitch Counter V2 (version 2)—terms for beta and production builds.",
		canonicalPath: STITCH_COUNTER_V2_EULA_PATH,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary",
	},
	[STITCH_COUNTER_V2_PRIVACY_POLICY_PATH]: {
		title: "Stitch Counter V2 — privacy policy",
		description:
			"Privacy policy for Stitch Counter V2: data handling, diagnostics, and local-first product stance.",
		canonicalPath: STITCH_COUNTER_V2_PRIVACY_POLICY_PATH,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary",
	},
	[STITCH_COUNTER_V2_BETA_PATH]: {
		title: "Stitch Counter — Google Play (Android)",
		description:
			"Get Stitch Counter V2 on Google Play: production Android app for knitters and crocheters—local-first, no cloud.",
		canonicalPath: STITCH_COUNTER_V2_BETA_PATH,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary",
	},
	[ROUTES.SOLITAIRE]: {
		title: "Solitaire & FreeCell (Kotlin Multiplatform)",
		description:
			"Shared rules and tests in KMP; KorGE client runs the same logic on web, desktop, Android, and iOS.",
		canonicalPath: ROUTES.SOLITAIRE,
		ogImagePath: "/korge-solitaire/kmp-solitaire-app-icon.png",
		ogImageAlt: "Kotlin Multiplatform solitaire app icon",
		twitterCard: "summary_large_image",
	},
	[ROUTES.DUAL_BRAND_CONSUMER_PLATFORM]: {
		title: "Dual-brand consumer platform — Anna Harrison",
		description:
			"Anonymized Android case study: store presence, release discipline, and dual-flavor delivery for a second consumer brand.",
		canonicalPath: ROUTES.DUAL_BRAND_CONSUMER_PLATFORM,
		ogImagePath: DEFAULT_OG_IMAGE_PATH,
		ogImageAlt: DEFAULT_OG_IMAGE_ALT,
		twitterCard: "summary",
	},
};

function normalizePathname(pathname: string): string {
	if (pathname.length > 1 && pathname.endsWith("/")) {
		return pathname.slice(0, -1);
	}
	return pathname;
}

export function getRouteSeoForPath(pathname: string): RouteSeoEntry {
	const normalized = normalizePathname(pathname);
	return ROUTE_SEO[normalized] ?? ROUTE_SEO[HOME_PATH];
}

export function resolveCanonicalUrl(entry: RouteSeoEntry): string {
	return new URL(entry.canonicalPath, SITE_URL).toString();
}

export function resolveSocialImageUrl(entry: RouteSeoEntry): string {
	return new URL(entry.ogImagePath ?? DEFAULT_OG_IMAGE_PATH, SITE_URL).toString();
}

export function resolveSocialImageAlt(entry: RouteSeoEntry): string {
	return entry.ogImageAlt ?? DEFAULT_OG_IMAGE_ALT;
}

export function resolveTwitterCard(entry: RouteSeoEntry): TwitterCardKind {
	return entry.twitterCard ?? DEFAULT_TWITTER_CARD;
}

export function resolveOpenGraphType(_pathname: string): "website" {
	return "website";
}

function buildSitemapEntry(path: PortfolioPrerenderPath): SitemapEntry {
	return {
		loc: new URL(path, SITE_URL).toString(),
		lastmod: SITE_LAST_MODIFIED,
	};
}

export function getMarketingSitemapEntries(): SitemapEntry[] {
	return [...PORTFOLIO_PRERENDER_PATHS].map(buildSitemapEntry);
}

function personAndWebSiteJsonLd(origin: string) {
	const personId = `${origin}/#person`;
	const websiteId = `${origin}/#website`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": personId,
				name: SITE_NAME,
				url: origin,
				jobTitle: "Android developer",
				knowsAbout: [
					"Kotlin",
					"Jetpack Compose",
					"Android development",
					"Kotlin Multiplatform",
				],
				sameAs:
					import.meta.env.VITE_UPWORK_MODE === "true"
						? [SOCIAL_LINKS.github]
						: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
			},
			{
				"@type": "WebSite",
				"@id": websiteId,
				url: origin,
				name: SITE_NAME,
				description:
					"Portfolio of Android, Kotlin Multiplatform, and related software development work.",
				author: { "@id": personId },
			},
		],
	};
}

function webPageJsonLd(
	origin: string,
	entry: RouteSeoEntry,
	canonicalUrl: string,
) {
	const pageType =
		entry.canonicalPath === CONTACT_PATH ? "ContactPage" : "WebPage";
	return {
		"@context": "https://schema.org",
		"@type": pageType,
		"@id": `${canonicalUrl}#webpage`,
		url: canonicalUrl,
		name: entry.title,
		description: entry.description,
		isPartOf: { "@id": `${origin}/#website` },
	};
}

const pathTailLabels: Record<string, string> = {
	about: "About",
	projects: "Projects",
	skills: "Skills",
	contact: "Contact",
	"stitch-counter-v2": "Stitch Counter V2",
	"stitch-counter": "Stitch Counter",
	"hpf-pulse": "HPF Pulse",
	solitaire: "Solitaire & FreeCell",
	"dual-brand-consumer-platform": "Dual-brand consumer platform",
	eula: "EULA",
	"privacy-policy": "Privacy policy",
	beta: "Beta",
};

function breadcrumbNameForPath(path: string): string {
	const segments = path.split("/").filter(Boolean);
	const tail = segments[segments.length - 1] ?? "";
	if (pathTailLabels[tail]) {
		return pathTailLabels[tail];
	}
	return tail
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

function breadcrumbJsonLd(
	origin: string,
	canonicalUrl: string,
	entry: RouteSeoEntry,
) {
	if (entry.canonicalPath === HOME_PATH) {
		return null;
	}
	const crumbs: { name: string; item: string }[] = [
		{ name: "Home", item: origin },
		{
			name: breadcrumbNameForPath(entry.canonicalPath),
			item: canonicalUrl,
		},
	];
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: crumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: crumb.item,
		})),
	};
}

export function buildRouteStructuredData(pathname: string): unknown {
	const entry = getRouteSeoForPath(pathname);
	const canonicalUrl = resolveCanonicalUrl(entry);
	const origin = SITE_URL;

	if (entry.canonicalPath === HOME_PATH) {
		return {
			"@context": "https://schema.org",
			"@graph": [
				...(personAndWebSiteJsonLd(origin)["@graph"] as object[]),
				webPageJsonLd(origin, entry, canonicalUrl),
			],
		};
	}

	const page = webPageJsonLd(origin, entry, canonicalUrl);
	const crumbs = breadcrumbJsonLd(origin, canonicalUrl, entry);
	return crumbs ? [page, crumbs] : page;
}
