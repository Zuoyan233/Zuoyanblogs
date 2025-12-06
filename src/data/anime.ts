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
		title: "宝可梦",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/pokemon.webp",
		description: "“我得到宝可梦了！！”",
		episodes: "271 episodes",
		year: "1997",
		genre: ["热血 ", "战斗", "励志", "少儿"],
		studio: "OLM TEAM OTA",
		link: "https://www.bilibili.com/bangumi/media/md5761",
		progress: 271,
		totalEpisodes: 271,
		startDate: "1997-04",
		endDate: "2001-09",
	},
	{
		title: "干物妹！小埋",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/xm.webp",
		description: "完美的妹妹，完美的高中生，家里是超懒的干物妹。",
		episodes: "12 episodes",
		year: "2015",
		genre: ["日常", "萌系"],
		studio: "どうがこうぼう",
		link: "https://www.bilibili.com/bangumi/media/md2580",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2015-07",
		endDate: "2015-09",
	},
	{
		title: "学园偶像 阳光!!",
		status: "watching",
		rating: 9.7,
		cover: "/assets/anime/sunshine.webp",
		description: "九位少女以光芒为目标勇往直前的故事。",
		episodes: "13 episodes",
		year: "2016",
		genre: ["音乐", "偶像"],
		studio: "SUNRISE",
		link: "https://www.bilibili.com/bangumi/media/md5062",
		progress: 5,
		totalEpisodes: 13,
		startDate: "2016-01",
		endDate: "2016-03",
	},
	{
		title: "日常",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/rc.webp",
		description: "今天也是温馨治愈、悠闲自在的一天呢	。",
		episodes: "26 episodes",
		year: "2011",
		genre: ["萌系", "搞笑", "日常", "漫改"],
		studio: "京都アニメーション",
		link: "https://www.bilibili.com/bangumi/media/md844",
		progress: 26,
		totalEpisodes: 26,
		startDate: "2011-04",
		endDate: "2011-06",
	},
	{
		title: "小城日常 ",
		status: "planned",
		rating: 9.8,
		cover: "/assets/anime/xcrc.webp",
		description: "欢迎来到心跳连发的奇妙CITY！",
		episodes: "13 episodes",
		year: "2025",
		genre: ["漫改", "日常", "搞笑"],
		studio: "京都アニメーション",
		link: "https://www.bilibili.com/bangumi/media/md26367205",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2025-07",
		endDate: "2025-10",
	},
];

export default localAnimeList;
