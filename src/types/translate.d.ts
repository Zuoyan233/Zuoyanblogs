declare global {
	interface Window {
		translate?: {
			reset: any;
			changeLanguage: (language: string) => void;
			service: {
				use: (service: string) => void;
			};
			language: {
				translateLocal: boolean;
				setLocal: (language: string) => void;
				getCurrent: () => string;
				getLocal: () => string;
			};
			setAutoDiscriminateLocalLanguage: () => void;
			ignore: {
				class: string[];
				tag: string[];
			};
			selectLanguageTag: {
				show: boolean;
				refreshRender?: () => void;
			};
			listener: {
				start: () => void;
			};
			execute: () => void;
			to: string;
			storage: {
				set: (key: string, value: string) => void;
			};
		};
		loadTranslateScript?: () => Promise<void>;
	}
}

export {};
