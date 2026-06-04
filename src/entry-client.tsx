import { mount, StartClient } from "@solidjs/start/client";

const rootElement = document.getElementById("app");

if (!rootElement) {
	throw new Error("App root element not found");
}

mount(() => <StartClient />, rootElement);
