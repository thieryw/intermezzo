import { createI18nApi, declareComponentKeys } from "i18nifty";
import type {
	ComponentKeyHome, ComponentKeyHeaderFooter
} from "./types";
import {translation as homeTranslation} from "./resources/fr/home"
import {translation as headerFooterTranslation} from "./resources/fr/headerAndFooter";
export { declareComponentKeys };

//List the languages you with to support
export const languages = ["fr"] as const;

//If the user's browser language doesn't match any 
//of the languages above specify the language to fallback to:  
export const fallbackLanguage = "fr";

export type Language = "fr";

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const { 
	useTranslation, 
	resolveLocalizedString, 
	useLang, 
	$lang,
	useResolveLocalizedString,
	/** For use outside of React */
	getTranslation 
} = createI18nApi<
	ComponentKeyHeaderFooter |
	ComponentKeyHome
>()(
	{
		languages,
		fallbackLanguage
	},
	{
		/* spell-checker: disable */
		"fr": {
			"Home": homeTranslation.Home,
			"Header": headerFooterTranslation.Header,
			"Footer": headerFooterTranslation.Footer
		}
		/* spell-checker: enable */
	}
);