export const HOME_PATH = "/";
export const ABOUT_PATH = "/about";
export const PROJECTS_PATH = "/projects";
export const SKILLS_PATH = "/skills";
export const CONTACT_PATH = "/contact";
export const STITCH_COUNTER_PATH = "/stitch-counter";
export const STITCH_COUNTER_V2_PATH = "/stitch-counter-v2";
export const STITCH_COUNTER_V2_EULA_PATH = "/stitch-counter-v2/eula";
export const STITCH_COUNTER_V2_PRIVACY_POLICY_PATH =
	"/stitch-counter-v2/privacy-policy";
export const STITCH_COUNTER_V2_BETA_PATH = "/beta";
export const HPF_PULSE_PATH = "/hpf-pulse";
export const SOLITAIRE_PATH = "/solitaire";

export const ROUTES = {
	HOME: HOME_PATH,
	ABOUT: ABOUT_PATH,
	PROJECTS: PROJECTS_PATH,
	SKILLS: SKILLS_PATH,
	CONTACT: CONTACT_PATH,
	STITCH_COUNTER: STITCH_COUNTER_PATH,
	STITCH_COUNTER_V2: STITCH_COUNTER_V2_PATH,
	STITCH_COUNTER_V2_EULA: STITCH_COUNTER_V2_EULA_PATH,
	STITCH_COUNTER_V2_PRIVACY_POLICY: STITCH_COUNTER_V2_PRIVACY_POLICY_PATH,
	STITCH_COUNTER_V2_BETA: STITCH_COUNTER_V2_BETA_PATH,
	HPF_PULSE: HPF_PULSE_PATH,
	SOLITAIRE: SOLITAIRE_PATH,
} as const;

/** Hash ids on {@link ROUTES.STITCH_COUNTER_V2} for in-page case studies */
export const STITCH_COUNTER_V2_CASE_STUDY_HASHES = {
	OVERVIEW: "stitch-counter-case-studies",
	ENGINEERING_DELIVERY: "case-study-engineering-delivery",
	FEATURE_DEVELOPMENT: "case-study-feature-development",
	APP_ARCHITECTURE: "case-study-app-architecture",
	UI_UX: "case-study-android-ui-ux",
} as const;
