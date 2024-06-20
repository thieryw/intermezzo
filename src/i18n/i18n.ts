import { createI18nApi, declareComponentKeys } from "i18nifty";
import type {
	ComponentKeyHome, 
	ComponentKeyHeaderFooter,
	ComponentKeyPassCulture,
	ComponentKeyMediation,
	ComponentKeyRp
} from "./types";
import {translation as homeTranslation} from "./resources/fr/home"
import {translation as headerFooterTranslation} from "./resources/fr/headerAndFooter";
import {translation as passCultureTranslation} from "./resources/fr/passCulture";
import {translation as mediationTranslation} from "./resources/fr/mediation";
import {translation as rpTranslation} from "./resources/fr/rp";
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
	ComponentKeyHome |
	ComponentKeyPassCulture |
	ComponentKeyMediation |
	ComponentKeyRp
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
			"Footer": headerFooterTranslation.Footer,
			"PassCulture": passCultureTranslation.PassCulture,
			"Mediation": mediationTranslation.Mediation,
			"Rp": rpTranslation.Rp
		}
		/* spell-checker: enable */
	}
);