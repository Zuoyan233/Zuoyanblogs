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
		description:
			"《宝可梦》动画改编自同名游戏，讲述了立志成为宝可梦大师的小智和皮卡丘结伴旅行的故事。一路上，小智邂逅了不少同伴、劲敌、好友，和他们展开了一次又一次冒险。《精灵宝可梦 无印》共分为关都地区石英联盟、橘子群岛橘子联盟、城都地区城都联盟三个部分，因本作品无副标题，故又称为无印篇",
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
		description:
			"我的妹妹小埋16岁，完美的妹妹，完美的高中生，但在家里却是个超懒的干物妹。然而妹妹在家的一切她生活中的朋友并不知道，居住在同一栋楼的天然少女，以及无意间来到我家的冷酷少女，她们会发现小埋的真实面目吗？",
		episodes: "12 episodes",
		year: "2015",
		genre: ["日常", "萌系"],
		studio: "集英社",
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
		description:
			"“LoveLive!Sunshine!!”是日升动画、Lantis和《电击G's magazine》共同打造的跨媒体偶像企划“LoveLive!学园偶像计划”于2015年公布的新企划。于2016年7月动画化。《LoveLive!Sunshine!!》讲述了以校园偶像Aqours的身份, 高海千歌为首的九位少女以光芒为目标勇往直前的故事。",
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
		description:
			"祐子是一个爱妄想又心怀梦想的女高中生，她身边充满着机器人啊鹿之类的谜之事物。以时定高中为中心，在这座时不时会天降鲑鱼甚至木偶小人的城市中，奇妙莫测又莫名有些超现实的“日常”即将开始。与此同时，“博士”和“名乃”以及会说话的猫咪“阪本（先生）”居住的“东云研究所”里，今天也是温馨治愈、悠闲自在的一天。",
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
		description:
			"这座城镇，绝非寻常之地。有欢笑（噗嗤嗤！） 有心跳（怦怦♡） 有泪光（扑簌扑簌......）居民们编织出无法预料的平凡日常！欢迎来到心跳连发的奇妙CITY！",
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
