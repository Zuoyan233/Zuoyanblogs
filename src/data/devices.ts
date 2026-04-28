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
			name: "Xiaomi 17 Pro Max",
			image: "/images/device/Xiaomi 17 Pro Max.webp",
			specs: "黑色 / 16G + 1TB",
			description:
				"第五代骁龙 8 至尊版移动平台，徕卡光影大师，小米金沙江电池，妙享背屏",
			link: "https://www.mi.com/prod/xiaomi-17-pro-max",
		},
	],
};
