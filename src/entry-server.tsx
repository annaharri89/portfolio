import { createHandler, StartServer } from "@solidjs/start/server";

function Document(props: {
	assets?: import("solid-js").JSX.Element;
	scripts?: import("solid-js").JSX.Element;
	children?: import("solid-js").JSX.Element;
}) {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#faf7f2" />
				<link rel="icon" type="image/svg+xml" href="/vite.svg" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				{props.assets}
			</head>
			<body>
				<div id="app">{props.children}</div>
				{props.scripts}
			</body>
		</html>
	);
}

export default createHandler(() => <StartServer document={Document} />);
