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
    | import ("Footer").I18n
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
				"copyRight": "© 2024 Association Musicale Intermezzo Tous droits réservés",
				"descriptiveTitle": "Incubatrice de Projets Culturels",
				"descriptiveTitleItalic": "Innovants",
				"assoLink": "Association",
				"passCultureLink": "Pass Culture",
				"partnerLink": "Partenariat & Médiations",
				"recitalPLink": "Récital Production",
				"festivalLink": "Festival",
				"contactLink": "Contact",
				"assoTitle": "Association Musicale Intermezzo",
				"assoAddressLine1": "60 Boulevard Joliot" ,
				"assoAddressLine2": "Curie33100 Bordeaux",
				"assoEmail": "intermezzo.association33@gmail.com",
				"legalLink": "Mentions légales",
				"siteDesigner": "Conçu & développé par IdeaArt"
			}
		}
		/* spell-checker: enable */
	}
);