import { memo } from "react";
import { declareComponentKeys } from "i18n";
//import { tss } from "tss";


export const Contact = memo(()=>{
    return <div>

    </div>
})


export const { i18n } = declareComponentKeys<
    | "heroSurtitle"
    | "heroTitle"
    | "heroHighlight"
    | "assoTitle1"
    | "assoTitle2"
    | "addressLine1"
    | "addressLine2"
    | "addressLine3"
    | "gmail"
    | "facebook"
    | "insta"
    | "rpTitle"
    | "rpEmail"
    | "rpInsta"
    | "siteButtonLabel"
    | "circularText"
>()({ Contact });

export type I18n = typeof i18n