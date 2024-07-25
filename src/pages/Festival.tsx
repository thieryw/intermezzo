import { memo } from "react";
import { declareComponentKeys, useTranslation } from "i18n";
import { Hero } from "components/Hero";
import { routes } from "router";
import { tss } from "tss";
import cubeMp4 from "assets/mp4/cubeBig.mp4";
import Typo from "@mui/material/Typography";


export const Festival = memo(() => {
    const { t } = useTranslation("Festival");
    const { classes } = useStyles();
    return <div>
        <Hero
            classes={{
                "loopedVideo": classes.cube,
                "textAndButtonWrapperInner": classes.heroText,
                "statisticCard": classes.statCard
            }}
            surtitle={t("heroSurtitle")}
            title={{
                "title": t("heroTitle"),
                "highLightTitle": t("heroHighLightTitle")
            }}
            paragraph={t("heroParagraph")}
            button1={{
                "href": "",
                "label": t("heroButton1")
            }}
            button2={{
                "label": t("heroButton2"),
                ...routes.contact().link
            }}
            statisticCard={{
                "stats": [
                    {
                        "statNumber": t("heroStatNumber1"),
                        "statSign": t("heroStatSign1"),
                        "statDesc": t("heroStatDesc1")
                    },
                    {
                        "statNumber": t("heroStatNumber2"),
                        "statSign": t("heroStatSign2"),
                        "statDesc": t("heroStatDesc2")
                    },
                    {
                        "statNumber": t("heroStatNumber3"),
                        "statSign": t("heroStatSign3"),
                        "statDesc": t("heroStatDesc3")
                    },
                    {
                        "statNumber": <Typo className={classes.cardNumber} variant="cardNumber">{t("heroStatNumber4")}</Typo>,
                        "statSign": <Typo className={classes.cardNumber} variant="cardSign">{t("heroStatSign4")}</Typo>,
                        "statDesc": t("heroStatDesc4")
                    },
                ]
            }}
            loopedVideo={{
                "src": cubeMp4,
            }}





        />

    </div>
});

const useStyles = tss.create(({ theme }) => {
    return ({
        "cube": {
            "position": "relative",
            "zIndex": -2,
            "top": -50,
            [theme.breakpoints.up("md")]: {
                "top": -100
            }
        },
        "cardNumber": {
            "color": "transparent",
            "background": theme.palette.gradient1.main,
            "backgroundClip": "text"
        },
        "heroText": {
            "maxWidth": 700
        },
        "statCard": {
            [theme.breakpoints.up("md")]: {
                "position": "relative",
                "top": -270
            }

        }
    })
})


const { i18n } = declareComponentKeys<
    | "heroSurtitle"
    | "heroTitle"
    | "heroHighLightTitle"
    | "heroParagraph"
    | "heroStatNumber1"
    | "heroStatSign1"
    | "heroStatDesc1"
    | "heroStatNumber2"
    | "heroStatSign2"
    | "heroStatDesc2"
    | "heroStatNumber3"
    | "heroStatSign3"
    | "heroStatDesc3"
    | "heroStatNumber4"
    | "heroStatSign4"
    | "heroStatDesc4"
    | "heroButton1"
    | "heroButton2"
    | "festivalDescTitleStart"
    | "festivalDescTitleHighlight"
    | "festivalDescTitleEnd"
    | "festivalDescParagraph"
    | "readVid"
    | "missionSurtitle"
    | "missionTitle"
    | "missionParagraphTitle1"
    | "missionParagraph1"
    | "missionParagraphTitle2"
    | "missionParagraph2"
    | "missionParagraphTitle3"
    | "missionParagraph3"
    | "archivesSurtitle"
    | "archivesTitle"
    | "archivesHighlight"
    | "2022Date"
    | "2022Title"
    | "2022PressTitle"
    | "2022PressName1"
    | "2022PressName2"
    | "2022PressName3"
    | "2022PressName4"
    | "2022PressName5"
    | "2022PressName6"
    | "2022PressName7"
    | "2022PressName8"
    | "2022PressName9"
    | "2022PressName10"
    | "2022PressName11"
    | "2022PressName12"
    | "2022PressName13"
    | "2022PressName14"
    | "2022PressName15"
    | "2022PressName16"
    | "2022PressName17"
    | "2022ParagraphTitle1"
    | "2022Paragraph1"
    | "2022SubParagraph1"
    | "2022ParagraphTitle2"
    | "2022Paragraph2"
    | "2022SubParagraph2"
    | "2022ParagraphTitle3"
    | "2022Paragraph3"
    | "2022SubParagraph3"
    | "2022ParagraphTitle4"
    | "2022Paragraph4"
    | "2022SubParagraph4"
    | "2022ParagraphTitle5"
    | "2022Paragraph5"
    | "2022SubParagraph5"
    | "2021Date"
    | "2021Title"
    | "2021PressTitle"
    | "2021PressName1"
    | "2021PressName2"
    | "2021PressName3"
    | "2021PressName4"
    | "2021PressName5"
    | "2021PressName6"
    | "2021PressName7"
    | "2021PressName8"
    | "2021PressName9"
    | "2021PressName10"
    | "2021PressName11"
    | "2021PressName12"
    | "2021PressName13"
    | "2021PressName14"
    | "2021PressName15"
    | "2021PressName16"
    | "2021PressName17"
    | "2021ParagraphTitle1"
    | "2021Paragraph1"
    | "2021SubParagraph1"
    | "2021ParagraphTitle2"
    | "2021Paragraph2"
    | "2021SubParagraph2"
    | "2021ParagraphTitle3"
    | "2021Paragraph3"
    | "2021SubParagraph3"
    | "2021ParagraphTitle4"
    | "2021Paragraph4"
    | "2021SubParagraph4"
    | "2020Date"
    | "2020Title"
    | "2020PressTitle"
    | "2020PressName1"
    | "2020PressName2"
    | "2020PressName3"
    | "2020PressName4"
    | "2020PressName5"
    | "2020PressName6"
    | "2020PressName7"
    | "2020PressName8"
    | "2020PressName9"
    | "2020PressName10"
    | "2020PressName11"
    | "2020PressName12"
    | "2020PressName13"
    | "2020PressName14"
    | "2020PressName15"
    | "2020PressName16"
    | "2020PressName17"
    | "2020PressName18"
    | "2020PressName19"
    | "2020PressName20"
    | "2020PressName21"
    | "2020PressName22"
    | "2020ParagraphTitle1"
    | "2020Paragraph1"
    | "2020SubParagraph1"
    | "2020ParagraphTitle2"
    | "2020Paragraph2"
    | "2020SubParagraph2"
    | "2020ParagraphTitle3"
    | "2020Paragraph3"
    | "2020SubParagraph3"
    | "2020ParagraphTitle4"
    | "2020Paragraph4"
    | "2020SubParagraph4"

>()({ Festival })

export type I18n = typeof i18n