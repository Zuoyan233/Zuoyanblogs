// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "",
		status: "completed",
		rating: 1,
		cover: "",
		description: "",
		episodes: "",
		year: "",
		genre: [],
		studio: "",
		link: "",
		progress: 1,
		totalEpisodes: 1,
		startDate: "",
		endDate: "",
	},
];

export default localAnimeList;
