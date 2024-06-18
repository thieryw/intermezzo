import { memo } from "react";
import { declareComponentKeys, useTranslation } from "i18n"
import { PressFile } from "components/PressFile";
import { tss } from "tss";
import Typo from "@mui/material/Typography";
import fbSvg from "assets/svg/mediation/fb-purple.svg";
import instaSvg from "assets/svg/mediation/insta-purple.svg";
import ytSvg from "assets/svg/mediation/yt-purple.svg";
import { Hero } from "components/Hero";
import heroJpg from "assets/jpg/mediation/mediations-hero-image.jpg"
import heroWebp from "assets/webp/mediation/mediations-hero-image.webp"


export const Mediation = memo(() => {
    const { t } = useTranslation("Mediation");
    const { classes } = useStyles();
    return <div>
        <Hero
            surtitle={t("heroSurtitle")}
            classes={{
                "textAndButtonWrapperInner": classes.heroTextAndButton
            }}
            title={<div>
                <Typo className={classes.heroTitle} variant="heading1">{t("heroTitleStart")} <span className={classes.heroHighlight}>{t("heroHighLightTitle")}</span> {t("heroTitleEnd")}</Typo>
            </div>}
            paragraph={t("heroParagraph")}
            button1={{
                "href": "",
                "label": t("heroButton1")
            }}
            button2={{
                "href": "",
                "label": t("heroButton2")
            }}
            animatedPicture={{
                "alt": "hero",
                "src": heroWebp,
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
            statisticCard={{
                "stats": [
                    {
                        "statNumber": t("heroStat1Number"),
                        "statSign": t("heroStat1Sign"),
                        "statDesc": t("heroStat1Desc")
                    },
                    {
                        "statNumber": t("heroStat2Number"),
                        "statSign": t("heroStat2Sign"),
                        "statDesc": t("heroStat2Desc")
                    },
                    {
                        "statNumber": t("heroStat3Number"),
                        "statSign": t("heroStat3Sign"),
                        "statDesc": t("heroStat3Desc")
                    },
                ]
            }}
        />
        <PressFile
            link={{
                "href": "",
                "label": t("voyagePressTitle")
            }}
            organizations={[
                t("voyagePressName1"),
                t("voyagePressName2"),
                t("voyagePressName3"),
                t("voyagePressName4"),
                t("voyagePressName5"),
                t("voyagePressName6"),
            ]}
            socialIconsUrls={[
                fbSvg,
                instaSvg,
                ytSvg
            ]}
        />

    </div>
})

const useStyles = tss.withName("Mediation").create(({ theme }) => {
    return ({
        "root": {

        },
        "heroTitle": {
            [theme.breakpoints.down("md")]: {
                "textAlign": "center",


            },
            [theme.breakpoints.between("sm", "md")]: {

                "paddingLeft": theme.spacing(5),
                "paddingRight": theme.spacing(5),
            }

        },
        "heroHighlight": {
            ...theme.typography.highLight
        },
        "heroTextAndButton": {
            "maxWidth": 750,
        }

    })
})



const { i18n } = declareComponentKeys<
    | "heroSurtitle"
    | "heroTitleStart"
    | "heroHighLightTitle"
    | "heroTitleEnd"
    | "heroParagraph"
    | "heroStat1Number"
    | "heroStat1Sign"
    | "heroStat1Desc"
    | "heroStat2Number"
    | "heroStat2Sign"
    | "heroStat2Desc"
    | "heroStat3Number"
    | "heroStat3Sign"
    | "heroStat3Desc"
    | "heroButton1"
    | "heroButton2"
    | "museumSurtitle"
    | "museumTitle"
    | "museumHighligh"
    | "museumParagraph"
    | "voyageTitle"
    | "voyagePressTitle"
    | "voyagePressName1"
    | "voyagePressName2"
    | "voyagePressName3"
    | "voyagePressName4"
    | "voyagePressName5"
    | "voyagePressName6"
    | "voyageParagraphTitle"
    | "voyageParagraphHighlight"
    | "voyageParagraph1"
    | "voyageParagraph2"
    | "voyageParagraph3"
    | "voyageDate"
    | "voyageEvent"
    | "gestureTitle"
    | "gesturePressTitle"
    | "gesturePressName1"
    | "gesturePressName2"
    | "gesturePressName3"
    | "gesturePressName4"
    | "gestureParagraphTitleStart"
    | "gestureParagraphHighlight"
    | "gestureParagraphTitleEnd"
    | "gestureParagraph1"
    | "gestureParagraph2"
    | "gestureDate"
    | "gestureEvent"
    | "socialSurtitle"
    | "socialHighlight"
    | "socialTitle"
    | "socialParagraphStart"
    | "socialParagraphHighlight"
    | "socialParagraphEnd"
    | "elderSmallParagraph"
    | "elderTitle"
    | "elderParagraph1"
    | "elderParagraph2"
    | "contact"



>()({ Mediation })

export type I18n = typeof i18n
