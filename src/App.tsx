import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, type ParentProps } from "solid-js";
import Layout from "@components/Layout";
import ScrollToTop from "@components/ScrollToTop";
import RouteSeo, { AppMetaProvider } from "@components/RouteSeo";
import "@styles/index.css";

function AppShell(props: ParentProps) {
	return (
		<>
			<ScrollToTop />
			<Layout>{props.children}</Layout>
		</>
	);
}

export default function App() {
	return (
		<AppMetaProvider>
			<Router
				root={(props) => (
					<>
						<RouteSeo />
						<Suspense>
							<AppShell {...props} />
						</Suspense>
					</>
				)}
			>
				<FileRoutes />
			</Router>
		</AppMetaProvider>
	);
}
