import { Link, Meta, MetaProvider, Title, useHead } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import { createMemo, Show } from "solid-js";
import {
	buildRouteStructuredData,
	getRouteSeoForPath,
	resolveCanonicalUrl,
	resolveOpenGraphType,
	resolveSocialImageAlt,
	resolveSocialImageUrl,
	resolveTwitterCard,
	SITE_NAME,
} from "@root/seo";
import { isUpworkMode } from "@consts/upwork";

export default function RouteSeo() {
	const location = useLocation();
	const routePathname = createMemo(() => location.pathname);
	const routeSeo = createMemo(() => getRouteSeoForPath(routePathname()));
	const canonicalUrl = createMemo(() => resolveCanonicalUrl(routeSeo()));
	const socialImageUrl = createMemo(() => resolveSocialImageUrl(routeSeo()));
	const socialImageAlt = createMemo(() => resolveSocialImageAlt(routeSeo()));
	const openGraphType = createMemo(() =>
		resolveOpenGraphType(routePathname()),
	);
	const twitterCard = createMemo(() => resolveTwitterCard(routeSeo()));
	const structuredDataJson = createMemo(() =>
		JSON.stringify(buildRouteStructuredData(routePathname())),
	);

	useHead({
		tag: "script",
		id: "seo-route-schema",
		props: {
			type: "application/ld+json",
			"data-seo-route-schema": "true",
			get children() {
				return structuredDataJson();
			},
		},
		setting: { close: true, escape: false },
	});

	return (
		<>
			<Title>{routeSeo().title}</Title>
			<Meta name="description" content={routeSeo().description} />
			<Show when={isUpworkMode}>
				<Meta name="robots" content="noindex, nofollow" />
			</Show>
			<Link rel="canonical" href={canonicalUrl()} />
			<Meta property="og:type" content={openGraphType()} />
			<Meta property="og:site_name" content={SITE_NAME} />
			<Meta property="og:title" content={routeSeo().title} />
			<Meta property="og:description" content={routeSeo().description} />
			<Meta property="og:url" content={canonicalUrl()} />
			<Meta property="og:image" content={socialImageUrl()} />
			<Meta property="og:image:alt" content={socialImageAlt()} />
			<Meta property="og:locale" content="en_US" />
			<Meta name="twitter:card" content={twitterCard()} />
			<Meta name="twitter:title" content={routeSeo().title} />
			<Meta name="twitter:description" content={routeSeo().description} />
			<Meta name="twitter:image" content={socialImageUrl()} />
		</>
	);
}

export function AppMetaProvider(props: {
	children: import("solid-js").JSX.Element;
}) {
	return <MetaProvider>{props.children}</MetaProvider>;
}
