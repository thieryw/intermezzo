import type { GenericTranslations } from "i18nifty";
import type { Language } from "./i18n";
export const languages = ["fr"] as const;

//If the user's browser language doesn't match any 
//of the languages above specify the language to fallback to:  
export const fallbackLanguage = "fr";


export type ComponentKeyHome =
    | import("pages/Home").I18n

export type ComponentKeyPassCulture = 
    | import("pages/PassCulture").I18n

export type ComponentKeyMediation = 
    | import("pages/Mediation").I18n

export type ComponentKeyRp =
    | import("pages/Rp").I18n

export type ComponentKeyHeaderFooter =
    | import("Header").I18n
    | import("Footer").I18n


export type TranslationHeaderFooter<L extends Language> = GenericTranslations<
    ComponentKeyHeaderFooter,
    Language,
    typeof fallbackLanguage,
    L
>

export type TranslationHome<L extends Language> = GenericTranslations<
    ComponentKeyHome,
    Language,
    typeof fallbackLanguage,
    L
>

export type TranslationPassCulture<L extends Language> = GenericTranslations<
    ComponentKeyPassCulture,
    Language,
    typeof fallbackLanguage,
    L
>

export type TranslationMediation<L extends Language> = GenericTranslations<
    ComponentKeyMediation,
    Language,
    typeof fallbackLanguage,
    L
>

export type TranslationRp<L extends Language> = GenericTranslations<
    ComponentKeyRp,
    Language,
    typeof fallbackLanguage,
    L
>