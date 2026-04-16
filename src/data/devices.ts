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
			name: "Xiaomi 17 Ultra by Leica",
			image: "/images/device/Xiaomi 17 Ultra by Leica.webp",
			specs: "黑银色 / 16G + 1TB",
			description:
				"第五代骁龙8至尊版芯片，徕卡APO认证超纯光学系统，徕卡一瞬还原真实相机本色，大师变焦环，双路立体环形冷泵，90W / 50W 有无线极速充电",
			link: "https://www.mi.com/prod/xiaomi-17-ultra-byleica",
		},
	],
};
