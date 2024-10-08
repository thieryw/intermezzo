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
import { DropdownSection } from "components/DropdownSection";
import { Video } from "components/Video";
import { PictureAnimator } from "components/PictureAnimator";
import gestJpg from "assets/jpg/mediation/gestuelles-image.jpg"
import gestWebp from "assets/webp/mediation/gestuelles-image.webp"
import gestMobileJpg from "assets/jpg/mediation/gestuelles-image-mobile.jpg";
import gestMobileWebp from "assets/webp/mediation/gestuelles-image-mobile.webp";
import videoPreviewJpg from "assets/jpg/mediation/carnet-video-preview.jpg";
import videoPreviewWebp from "assets/webp/mediation/carnet-video-preview.webp";
import { Surtitle } from "components/Surtitle";
import bTLogo from "assets/svg/big-transparent-logo.svg";
import { ReactSVG } from "react-svg";
import elderJpg from "assets/jpg/mediation/ehpad-image.jpg";
import elderWebp from "assets/webp/mediation/ehpad-image.webp";
import { routes, social } from "router";
import bilanCdv from "assets/downloadables/bilan-carnet-de-voyage.pdf";
import bilanGestu from "assets/downloadables/bilan-gestu-elles.docx";


export const Mediation = memo(() => {
    const { t } = useTranslation("Mediation");
    const { classes, theme, windowInnerWidth } = useStyles();
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
                "href": "#museum",
                "label": t("heroButton1")
            }}
            button2={{
                "label": t("heroButton2"),
                ...routes.contact().link
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
        <section id="museum" className={classes.textSection}>
            <div className={classes.textSectionInner}>
                <ReactSVG
                    src={bTLogo}
                    className={classes.bTLogo}
                />
                <Surtitle
                    surtitle={t("museumSurtitle")}
                    className={classes.surtitle}
                />
                <div className={classes.title}>
                    <Typo className={classes.textSectionText} variant="heading2">{t("museumTitle")}</Typo>
                    <Typo className={classes.textSectionText} variant="highLight2">{t("museumHighligh")}</Typo>
                </div>
                <Typo className={classes.textSectionText} variant="heading3">{t("museumParagraph")}</Typo>

            </div>
        </section>
        <DropdownSection
            isStateBlocked={windowInnerWidth >= theme.breakpoints.values.md}
            aside={
                <PressFile
                    link={{
                        "href": bilanCdv,
                        "label": t("voyagePressTitle"),
                    }}
                    download="bilan-carnet-de-voyage.pdf"
                    organizations={[
                        t("voyagePressName1"),
                        t("voyagePressName2"),
                        t("voyagePressName3"),
                        t("voyagePressName4"),
                        t("voyagePressName5"),
                        t("voyagePressName6"),
                    ]}
                    socialIcons={[
                        {
                            "href": social.facebook,
                            "iconSrc": fbSvg,
                            "target": "_blank"
                        },
                        {
                            "href": social.insta,
                            "iconSrc": instaSvg,
                            "target": "_blank"
                        },
                        {
                            "href": social.youtube,
                            "iconSrc": ytSvg,
                            "target": "_blank"
                        }
                    ]}
                />
            }
            media={
                <Video
                    src={videoPreviewWebp}
                    sources={[
                        {
                            "srcSet": videoPreviewWebp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": videoPreviewJpg,
                            "type": "image/jpeg"
                        }
                    ]}
                    width={windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))}
                    height={(windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))) / 100 * (windowInnerWidth < theme.breakpoints.values.sm ? 110 : 40)}
                    borderRadius={`${windowInnerWidth < theme.breakpoints.values.md ? "0px" : theme.spacing(25)} 0px`}
                    videoId="qwRJNDrjGuM"
                    alt="video preview"
                />


            }
            closeMessage="Ouvrir"
            openMessage="Réduire"
            title={t("voyageTitle")}
            paragraphTitle={<Typo variant="heading3">{t("voyageParagraphTitle")} <span style={{ ...theme.typography.highLight4 }}>{t("voyageParagraphHighlight")}</span></Typo>}
            paragraphs={[
                {
                    "paragraph": t("voyageParagraph1")
                },
                {
                    "paragraph": t("voyageParagraph2")
                },
                {
                    "paragraph": t("voyageParagraph3")
                },
            ]}
            date={t("voyageDate")}
            event={t("voyageEvent")}
        />
        <DropdownSection
            isStateBlocked={windowInnerWidth >= theme.breakpoints.values.md}
            title={t("gestureTitle")}
            closeMessage="Ouvrir"
            openMessage="Réduire"
            paragraphTitle={<Typo variant="heading3">{t("gestureParagraphTitleStart")} <span style={{ ...theme.typography.highLight4 }}>{t("gestureParagraphHighlight")}</span> {t("gestureParagraphTitleEnd")}</Typo>}
            media={<PictureAnimator
                /*src={gestWebp}
                sources={[
                    {
                        "srcSet": gestWebp,
                        "type": "image/webp"
                    },
                    {
                        "srcSet": gestJpg,
                        "type": "image/jpeg"
                    }
                ]}*/
                {
                    ...(()=>{
                        if(windowInnerWidth < theme.breakpoints.values.sm){
                            return {
                                "src": gestMobileWebp,
                                "sources": [
                                    {
                                        "srcSet": gestMobileWebp,
                                        "type": "image/webp"
                                    },
                                    {
                                        "srcSet": gestMobileJpg,
                                        "type": "image/jpeg"
                                    }
                                ]
                            }
                        }
                        return {
                                "src": gestWebp,
                                "sources": [
                                    {
                                        "srcSet": gestWebp,
                                        "type": "image/webp"
                                    },
                                    {
                                        "srcSet": gestJpg,
                                        "type": "image/jpeg"
                                    }
                                ]

                        }
                    })()
                }
                width={windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))}
                height={(windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))) / 100 * (windowInnerWidth < theme.breakpoints.values.sm ? 110 : 40)}
                borderRadius={`${windowInnerWidth < theme.breakpoints.values.md ? "0px" : theme.spacing(25)} 0px`}
                alt="gesture"
            />}
            aside={
                <PressFile
                    link={{
                        "href": bilanGestu,
                        "label": t("voyagePressTitle")
                    }}
                    download="bilan-gestu-elles.docx"
                    organizations={[
                        t("gesturePressName1"),
                        t("gesturePressName2"),
                        t("gesturePressName3"),
                        t("gesturePressName4"),
                    ]}
                    socialIcons={[
                        {
                            "href": social.facebook,
                            "iconSrc": fbSvg,
                            "target": "_blank"
                        },
                        {
                            "href": social.insta,
                            "iconSrc": instaSvg,
                            "target": "_blank"
                        },
                        {
                            "href": social.youtube,
                            "iconSrc": ytSvg,
                            "target": "_blank"
                        }
                    ]}
                />
            }
            paragraphs={[
                {
                    "paragraph": t("gestureParagraph1")
                },
                {
                    "paragraph": t("gestureParagraph2")
                },

            ]}
            date={t("gestureDate")}
            event={t("gestureEvent")}
        />
        <section className={classes.textSection}>
            <div className={classes.textSectionInner}>
                <Surtitle
                    surtitle={t("socialSurtitle")}
                    className={classes.textSectionSurtitle}
                />
                <Typo className={classes.textSectionText} variant="heading2"><span style={{ ...theme.typography.highLight2 }}>{t("socialHighlight")}</span> {t("socialTitle")}</Typo>
                <Typo className={classes.textSectionText} variant="heading3">{t("socialParagraphStart")} <span style={{ ...theme.typography.highLight4 }}>{t("socialParagraphHighlight")}</span> {t("socialParagraphEnd")}</Typo>

            </div>
        </section>

        <div className={classes.imageSection}>
            <picture>
                <source
                    srcSet={elderWebp}
                    type="image/webp"
                />
                <source
                    srcSet={elderJpg}
                    type="image/jpeg"
                />
                <img className={classes.backgroundImage} src={elderWebp} alt="ephad" />
            </picture>

        </div>

        <DropdownSection
            isInitiallyOpen={true}
            isStateBlocked={true}
            classes={{
                "interSectionLine": classes.elderIntersection
            }}
            aside={<div style={{ "paddingTop": theme.spacing(5) }}>
                <Typo variant="italicP">{t("elderSmall1")}</Typo>
                <Typo variant="italicP">{t("elderSmall2")}</Typo>
                <Typo variant="italicP">{t("elderSmall3")}</Typo>
            </div>}
            paragraphTitle={<Typo variant="heading3">{t("elderTitle")}</Typo>}
            paragraphs={[
                {
                    "paragraph": t("elderParagraph1")
                },
                {
                    "paragraph": t("elderParagraph2")
                },

            ]}
            button={{
                "label": t("contact"),
                ...routes.contact().link
            }}

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
        },
        "textSection": {
            "display": "flex",
            "justifyContent": "center",
            "position": "relative"

        },
        "bTLogo": {
            "& svg": {

                "position": "absolute",
                "top": 0,
                "left": 0,
                "width": "100%",
                "height": "100%"

            }
        },
        "surtitle": {
            "marginBottom": theme.spacing(7)

        },
        "title": {
            "marginBottom": theme.spacing(7)

        },
        "textSectionInner": {
            "display": "flex",
            "flexDirection": "column",
            "maxWidth": 635,
            "alignItems": "center",
            "paddingLeft": theme.spacing(5),
            "paddingRight": theme.spacing(5),
            [theme.breakpoints.down("md")]: {
                "paddingTop": theme.spacing(7)
            },
            "paddingBottom": theme.spacing(17)
        },
        "textSectionSurtitle": {
            "marginBottom": theme.spacing(4)

        },
        "textSectionText": {
            "textAlign": "center",
            "marginBottom": theme.spacing(4)
        },
        "imageSection": {

            "overflow": "hidden",
            "position": "relative",
            [theme.breakpoints.down("md")]: {

                "marginBottom": theme.spacing(19)
            },
            [theme.breakpoints.down("xl")]: {
                "width": "100vw",
            },
            "aspectRatio": 2.5

        },
        "backgroundImage": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%",
        },
        "elderIntersection": {
            "display": "none"
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
    | "elderSmall1"
    | "elderSmall2"
    | "elderSmall3"
    | "elderTitle"
    | "elderParagraph1"
    | "elderParagraph2"
    | "contact"



>()({ Mediation })

export type I18n = typeof i18n
