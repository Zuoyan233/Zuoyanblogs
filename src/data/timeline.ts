// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "计算机应用技术",
		description:
			"就读于计算机技术，专注于 Web 开发和UI设计，现在毕业后的兴趣爱好学习HTML前端开发",
		type: "education",
		startDate: "2021-09-01",
		location: "广东-广州-从化",
		organization: "广州城建职业学院（毕业）",
		skills: ["JavaScript", "HTML/CSS", "UI"],
		achievements: [
			"Current GPA: 3.6/4.0",
			"Completed data structures and algorithms course project",
			"Participated in multiple course project developments",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "work",
		title: "中国邮政",
		description:
			"人生第一份工作，7月底最后一天离职后几个月深造自己",
		type: "work",
		startDate: "2024-11-14",
		location: "广东-佛山-顺德",
		organization: "开始工作",
		skills: ["邮件日常", "开验单", "售后"],
		achievements: [
			"Current GPA: 3.6/4.0",
			"Completed data structures and algorithms course project",
			"Participated in multiple course project developments",
		],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	{
		id: "web-develop",
		title: "Zuoyan研究部",
		description:
			"里程碑：开始基于Misuki开源项目二次开发网站，目前网站成功上线",
		type: "project",
		startDate: "2025-10-01",
		location: "广东-佛山-顺德",
		organization: "在家开发",
		skills: ["JavaScript", "HTML/CSS", "UI"],
		achievements: [
			"Current GPA: 3.6/4.0",
			"Completed data structures and algorithms course project",
			"Participated in multiple course project developments",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
