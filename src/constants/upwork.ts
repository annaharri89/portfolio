export const UPWORK_PROFILE_URL =
	"https://www.upwork.com/freelancers/annah80";

function readUpworkModeFlag(): boolean {
	if (typeof process !== "undefined" && process.env.VITE_UPWORK_MODE === "true") {
		return true;
	}
	return import.meta.env?.VITE_UPWORK_MODE === "true";
}

export const isUpworkMode = readUpworkModeFlag();
