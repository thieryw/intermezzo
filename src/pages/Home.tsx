import { memo } from "react";
import { declareComponentKeys } from "i18n";
import {useTranslation} from "i18n"
import { tss } from "tss";
import { Hero } from "components/Hero";
import heroJpg from "assets/jpg/home/accueil-hero-image.jpg";
import heroWebp from "assets/webp/home/accueil-hero-image.webp";
import titleCapsule from "assets/jpg/home/title-capsule-croped.jpg";
import Typo from "@mui/material/Typography";

export const Home = memo(() => {
    const { t } = useTranslation("Home");
    const { classes } = useStyles()
    return <div>
        <Hero
            animatedPicture={{
                "src": heroWebp,
                "alt": "hero image",
                "sources": [
                    {
                        "srcSet": heroWebp,
                        "type": "image/webp"
                    },
                    {
                        "srcSet": heroJpg,
                        "type": "image/jpeg"
                    }
                ]


            }}
            button1={{
                "href": "",
                "label": t("heroButton1")
            }}
            button2={{
                "href": "",
                "label": t("heroButton2")
            }}
            surtitle={t("heroSurtitle")}
            title={t("heroTitle")}
            highLightTitle={t("heroHighLightTitle")}
            highLightTitleImageUrl={titleCapsule}
            paragraph={t("heroParagraph")}
            statisticCard={{
                "stats": [
                    {
                        "statNumber": t("heroConcertStatNumber"),
                        "statSign": t("heroConcertStatSign"),
                        "statDesc": t("heroConcertStatDesc")
                    },
                    {
                        "statNumber": t("heroArtistesStatNumber"),
                        "statSign": t("heroArtistesStatSign"),
                        "statDesc": t("heroArtistesStatDesc")
                    },
                    {
                        "statNumber": t("heroMediationStatNumber"),
                        "statSign": t("heroMediationStatSign"),
                        "statDesc": t("heroMediationStatDesc")
                    },
                    {
                        "statNumber": <Typo className={classes.cardNumber} variant="cardNumber">{t("heroSpectatorsStatNumber")}</Typo>,
                        "statSign": <Typo className={classes.cardNumber} variant="cardSign">{t("heroSpectatorsStatSign")}</Typo>,
                        "statDesc": t("heroSpectatorsStatDesc")
                    },
                ]

            }}

        />
    </div>
})


const useStyles = tss.withName("Home").create(({theme}) => {
    return ({
        "cardNumber": {
            "color": "transparent",
            "background": theme.palette.gradient1.main,
            "backgroundClip": "text"

        }
    })

})



const { i18n } = declareComponentKeys<
    | "heroSurtitle"
    | "heroTitle"
    | "heroHighLightTitle"
    | "heroParagraph"
    | "heroConcertStatNumber"
    | "heroConcertStatSign"
    | "heroConcertStatDesc"
    | "heroArtistesStatNumber"
    | "heroArtistesStatSign"
    | "heroArtistesStatDesc"
    | "heroMediationStatNumber"
    | "heroMediationStatSign"
    | "heroMediationStatDesc"
    | "heroSpectatorsStatNumber"
    | "heroSpectatorsStatSign"
    | "heroSpectatorsStatDesc"
    | "heroButton1"
    | "heroButton2"
>()({ Home })

export type I18n = typeof i18n