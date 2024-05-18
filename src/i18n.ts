import { createI18nApi, declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

//List the languages you with to support
export const languages = ["fr"] as const;

//If the user's browser language doesn't match any 
//of the languages above specify the language to fallback to:  
export const fallbackLanguage = "fr";

export type Language = typeof languages[number];

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
	| import("Footer").I18n
	| import("Header").I18n
>()(
	{
		languages,
		fallbackLanguage
	},
	{
		/* spell-checker: disable */
		"fr": {
			"Footer": {
				"siteTitle": "Intermezzo",
				"copyRight": "© 2024 Association Musicale Intermezzo",
				"copyRightLine2": "Tous droits réservés",
				"descriptiveTitle": "Incubatrice de Projets",
				"descriptiveTitleLine2": "Culturels",
				"descriptiveTitleItalic": "Innovants",
				"assoLink": "Association",
				"passCultureLink": "Pass Culture",
				"partnerLink": "Partenariat & Médiations",
				"recitalPLink": "Récital Production",
				"festivalLink": "Festival",
				"contactLink": "Contact",
				"assoTitle": "Association Musicale Intermezzo",
				"assoAddressLine1": "60 Boulevard Joliot Curie",
				"assoAddressLine2": "33100 Bordeaux",
				"assoEmail": "intermezzo.association33@gmail.com",
				"legalLink": "Mentions légales",
				"siteDesigner": "Conçu & développé par",
				"ideaArtLink": "IdeaArt"
			},
			"Header": {
				"assoLink": "L’Association",
				"passCultureLink": "Pass Culture",
				"mediationLink": "Médiation",
				"rPLInk": "Récital Production",
				"festivalLink": "Festival",
				"contactLink": "Contact",
				"legalLink": "Mentions légales",
				"copyRight": "© 2024 Association Musicale Intermezzo",
				"siteDesigner": "Conçu & développé par",
				"ideaArtLink": "IdeaArt",
				"joinUsLink": "Nous Rejoindre",
			}
		}
		/* spell-checker: enable */
	}
);