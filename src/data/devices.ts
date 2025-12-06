// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Xiaomi: [
		{
			name: "Xiaomi 15 Ultra",
			image: "/images/device/Xiaomi 15 Ultra.webp",
			specs: "白色 / 16G + 1TB",
			description: "骁龙8至尊版芯片，徕卡夜神四摄，强续航金沙江电池",
			link: "https://www.mi.com/prod/xiaomi-15-ultra",
		},
	],
};
