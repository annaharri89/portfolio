import screenShotMain from '@images/hpf/screen_shot_main.png';
import screenShotMap from '@images/hpf/screen_shot_map.png';
import screenShotAllResources from '@images/hpf/screen_shot_all_resources.png';
import screenShotDomesticViolence from '@images/hpf/screen_shot_domestic_violence.png';
import singleCounter from '@images/stitch_counter/single_counter.png';
import doubleCounter from '@images/stitch_counter/double_counter.png';
import doubleCounter7Inch from '@images/stitch_counter/double_counter_tablet_7_inch.png';
import singleCounterLandscape from '@images/stitch_counter/single_counter_landscape.png';
import doubleCounterLandscape from '@images/stitch_counter/double_counter_landscape.png';
import libraryDefault from '@images/stitch_tracker/library_screen.jpg';
import libraryDark from '@images/stitch_tracker/dark_mode_library_screen.jpg';
import doubleCounterDefault from '@images/stitch_tracker/double_counter.jpg';
import doubleCounterDarkMode from '@images/stitch_tracker/double_counter_dark_mode.jpg';
import doubleCounterSea from '@images/stitch_tracker/double_counter_sea_cottage.png';
import doubleCounterGolden from '@images/stitch_tracker/double_counter_golden_earth.png';
import singleCounterGolden from '@images/stitch_tracker/single_counter_golden_earth.png';
import singleCounterSea from '@images/stitch_tracker/single_counter_sea_cottage.png';
import doubleCounterThemedLandscape from '@images/stitch_tracker/double_counter_landscape.png';
import backupRestore from '@images/stitch_tracker/backup_restore.png';
import themeSettings from '@images/stitch_tracker/theme_settings.png';

export interface Slide {
	id: number
	text: string
	image?: string
	videoSources?: {
		webm?: string
		mp4?: string
	}
}

type SlideMap = Map<Project, Slide[]>;

export enum IconType {
	GITHUB = 'github',
	PLAY = 'google-play'
}

export interface ProjectLink {
	href: string
	label: string
	icon?: IconType
}

export interface ArchiveProject {
	icon: string
	title: string
	year: string
	description: string
	links: ProjectLink[]
	slides?: Slide[]
}

export enum Project {
	HPF_PULSE = 'HPF_PULSE',
	STITCH_COUNTER = 'STITCH_COUNTER',
	STITCH_TRACKER = 'STITCH_TRACKER'
}

export const getProjectSlides = (project: Project): Slide[] => {
	return SLIDES.get(project) ?? [];
}

const SLIDES: SlideMap = new Map();
SLIDES.set(Project.HPF_PULSE, [
	{ id: 0, text: 'Main Page', image: screenShotMain },
	{ id: 1, text: 'Map Page', image: screenShotMap },
	{ id: 2, text: 'All Resources', image: screenShotAllResources },
	{ id: 3, text: 'Category Resources', image: screenShotDomesticViolence },
]);

SLIDES.set(Project.STITCH_COUNTER, [
	{ id: 0, text: 'Single Counter', image: singleCounter },
	{ id: 1, text: 'Double Counter', image: doubleCounter },
	{ id: 2, text: 'Themed Tablet', image: doubleCounter7Inch },
	{ id: 3, text: 'Themed Single Counter Landscape', image: singleCounterLandscape },
	{ id: 4, text: 'Themed Double Counter Landscape', image: doubleCounterLandscape },
]);

SLIDES.set(Project.STITCH_TRACKER, [
	{ id: 0, text: 'Library - Default Theme', image: libraryDefault },
	{ id: 1, text: 'Library - Dark Mode', image: libraryDark },
	{ id: 2, text: 'Double Counter - Default Theme', image: doubleCounterDefault },
	{ id: 3, text: 'Double Counter - Dark Mode', image: doubleCounterDarkMode },
	{ id: 4, text: 'Double Counter - Sea Cottage Theme', image: doubleCounterSea },
	{ id: 5, text: 'Double Counter - Golden Earth Theme', image: doubleCounterGolden },
	{ id: 6, text: 'Single Counter - Golden Earth Theme', image: singleCounterGolden },
	{ id: 7, text: 'Single Counter - Sea Cottage Theme', image: singleCounterSea },
	{ id: 8, text: 'Double Counter - Landscape Theme', image: doubleCounterThemedLandscape },
	{ id: 9, text: 'Backup Restore and Support', image: backupRestore },
	{ id: 10, text: 'Theme Settings', image: themeSettings },
]);
