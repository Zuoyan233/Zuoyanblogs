declare global {
	interface Window {
		translate?: {
			reset: () => void;
			changeLanguage: (language: string) => void;
			service: {
				use: (service: string) => void;
			};
			language: {
				translateLocal: boolean;
				setLocal: (language: string) => void;
				getCurrent: () => string;
				getLocal: () => string;
				setUrlParamControl: (name?: string) => void;
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
				addListener: () => void;
				reset: () => void;
				isStart: boolean;
				use: boolean;
			};
			request: {
				listener: {
					start: () => void;
					use: boolean;
					isStart: boolean;
				};
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
