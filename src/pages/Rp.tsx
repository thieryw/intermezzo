import { memo } from "react";
import { tss } from "tss";
import { declareComponentKeys, useTranslation } from "i18n";
import { Hero } from "components/Hero";
import Typo from "@mui/material/Typography";
import heroJpg from "assets/jpg/rp/recital-prod-hero-image.jpg";
import heroWebp from "assets/webp/rp/recital-prod-hero-image.webp";
import rpMp4 from "assets/mp4/recital-prod-video.mp4";
import { ReactSVG } from "react-svg";
import selectionPng from "assets/png/rp/recitalprod-transparent-img-1.png";
import { AnimatedBanner } from "components/AnimatedBanner";
import sponsorSvg1 from "assets/svg/rp/logo-academie-bordeaux.svg";
import sponsorSvg2 from "assets/svg/rp/logo-candlelight.svg";
import sponsorSvg3 from "assets/svg/rp/logo-espace-beaulieu.svg";
import sponsorSvg4 from "assets/svg/rp/logo-fever.svg";
import sponsorSvg5 from "assets/svg/rp/logo-maison-mariage.svg";
import sponsorSvg6 from "assets/svg/rp/logo-martignas.svg";
import sponsorSvg7 from "assets/svg/rp/logo-mc2.svg";
import sponsorSvg8 from "assets/svg/rp/logo-mce.svg";
import { CardWrapper } from "components/CardWrapper";
import { DraggableSliderWrapper } from "components/DraggableSliderWrapper";
import { SliderCard } from "components/SliderCard";
import presJpg1 from "assets/jpg/rp/Prestations/prestation-1-img.jpg";
import presJpg2 from "assets/jpg/rp/Prestations/prestation-2-img.jpg";
import presJpg3 from "assets/jpg/rp/Prestations/prestation-3-img.jpg";
import presJpg4 from "assets/jpg/rp/Prestations/prestation-4-img.jpg";
import presJpg5 from "assets/jpg/rp/Prestations/prestation-5-img.jpg";
import presWebp1 from "assets/webp/rp/Prestations/prestation-1-img.webp";
import presWebp2 from "assets/webp/rp/Prestations/prestation-2-img.webp";
import presWebp3 from "assets/webp/rp/Prestations/prestation-3-img.webp";
import presWebp4 from "assets/webp/rp/Prestations/prestation-4-img.webp";
import presWebp5 from "assets/webp/rp/Prestations/prestation-5-img.webp";
import m1jpg from "assets/jpg/rp/Médias/medias-1-img.jpg";
import m2jpg from "assets/jpg/rp/Médias/medias-2-img.jpg";
import m3jpg from "assets/jpg/rp/Médias/medias-3-img.jpg";
import m4jpg from "assets/jpg/rp/Médias/medias-4-img.jpg";
import m5jpg from "assets/jpg/rp/Médias/medias-5-img.jpg";
import m6jpg from "assets/jpg/rp/Médias/medias-6-img.jpg";
import m7jpg from "assets/jpg/rp/Médias/medias-7-img.jpg";
import m8jpg from "assets/jpg/rp/Médias/medias-8-img.jpg";
import m1Webp from "assets/webp/rp/Médias/medias-1-img.webp";
import m2Webp from "assets/webp/rp/Médias/medias-2-img.webp";
import m3Webp from "assets/webp/rp/Médias/medias-3-img.webp";
import m4Webp from "assets/webp/rp/Médias/medias-4-img.webp";
import m5Webp from "assets/webp/rp/Médias/medias-5-img.webp";
import m6Webp from "assets/webp/rp/Médias/medias-6-img.webp";
import m7Webp from "assets/webp/rp/Médias/medias-7-img.webp";
import m8Webp from "assets/webp/rp/Médias/medias-8-img.webp";
import { PortraitGallery } from "components/PortraitGallery";
import { Surtitle } from "components/Surtitle";
import rpPng2 from "assets/png/rp/recitalprod-transparent-img-2.png";
import { LinkButton } from "components/LinkButton";
import instaSvg from "assets/svg/icons/fInsta.svg";
import emailSvg from "assets/svg/icons/emailIcon.svg";
import { VideoSecondary } from "components/VideoSecondary";
import { routes } from "router";

const medias = {
    "jpg": [
        m1jpg,
        m2jpg,
        m3jpg,
        m4jpg,
        m5jpg,
        m6jpg,
        m7jpg,
        m8jpg,
    ],
    "webp": [
        m1Webp,
        m2Webp,
        m3Webp,
        m4Webp,
        m5Webp,
        m6Webp,
        m7Webp,
        m8Webp,
    ]
}




export const Rp = memo(() => {

    const { t } = useTranslation("Rp");

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
                "href": "#selection",
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
        <section className={classes.videoSection}>
            <VideoSecondary 
                playVideoMsg={t("playVideo")}
                previewScr={rpMp4}
                videoId="oQgddMWwxKM"
            />
        </section>
        <section id="selection" className={classes.selectionSection}>
            <img className={classes.selectionImage} src={selectionPng} alt="selection background" />
            <div className={classes.selectionText}>
                <Typo className={classes.selectionHeading} variant="heading3">{t("selectionTitleStart")} <span style={{ ...theme.typography.highLight4 }}>{t("selectionTitleHighlight")}</span> {t("selectionTitleEnd")}</Typo>
                <Typo variant="paragraph1">{t("selectionParagraph")}</Typo>
            </div>
            <AnimatedBanner
                slides={[
                    <img src={sponsorSvg1} alt="sponsor" />,
                    <img src={sponsorSvg2} alt="sponsor" />,
                    <img src={sponsorSvg3} alt="sponsor" />,
                    <img src={sponsorSvg4} alt="sponsor" />,
                    <img src={sponsorSvg5} alt="sponsor" />,
                    <img src={sponsorSvg6} alt="sponsor" />,
                    <img src={sponsorSvg7} alt="sponsor" />,
                    <img src={sponsorSvg8} alt="sponsor" />

                ]}
            />
        </section>
        {
            (() => {
                if (windowInnerWidth < theme.breakpoints.values.md) {
                    return <CardWrapper
                        isScaled={false}
                        title={t("servicesTitle")}
                        titleHighlight={t("servicesHighlight")}
                        paragraph={t("servicesParagraph")}
                        classes={{
                            "cards": classes.mobileCards,
                            "backgroundInner": classes.backgroundMobileCards
                        }}
                        cards={[
                            <SliderCard
                                imageSrc={presWebp1}
                                sources={[
                                    {
                                        "srcSet": presWebp1,
                                        "type": "image/webp"
                                    },
                                    {
                                        "srcSet": presJpg1,
                                        "type": "image/jpeg"
                                    }
                                ]}
                                title={t("serviceCard1Title")}
                                subTitle={t("serviceCard1Paragraph")}
                                className={classes.sliderCard}
                            />,
                            <SliderCard
                                imageSrc={presWebp5}
                                sources={[
                                    {
                                        "srcSet": presWebp5,
                                        "type": "image/webp"
                                    },
                                    {
                                        "srcSet": presJpg5,
                                        "type": "image/jpeg"
                                    }
                                ]}
                                title={t("serviceCard5Title")}
                                subTitle={t("serviceCard5Paragraph")}
                                className={classes.sliderCard}
                            />,
                            <SliderCard
                                imageSrc={presWebp2}
                                sources={[
                                    {
                                        "srcSet": presWebp2,
                                        "type": "image/webp"
                                    },
                                    {
                                        "srcSet": presJpg2,
                                        "type": "image/jpeg"
                                    }
                                ]}
                                title={t("serviceCard2Title")}
                                subTitle={t("serviceCard2Paragraph")}
                                className={classes.sliderCard}
                            />,
                            <SliderCard
                                imageSrc={presWebp3}
                                sources={[
                                    {
                                        "srcSet": presWebp3,
                                        "type": "image/webp"
                                    },
                                    {
                                        "srcSet": presJpg3,
                                        "type": "image/jpeg"
                                    }
                                ]}
                                title={t("serviceCard3Title")}
                                subTitle={t("serviceCard3Paragraph")}
                                className={classes.sliderCard}
                            />,
                            <SliderCard
                                imageSrc={presWebp4}
                                sources={[
                                    {
                                        "srcSet": presWebp4,
                                        "type": "image/webp"
                                    },
                                    {
                                        "srcSet": presJpg4,
                                        "type": "image/jpeg"
                                    }
                                ]}
                                title={t("serviceCard4Title")}
                                subTitle={t("serviceCard4Paragraph")}
                            />,
                        ]}
                    />
                }

                return <DraggableSliderWrapper

                    title={t("servicesTitle")}
                    titleHighLight={t("servicesHighlight")}
                    paragraph={t("servicesParagraph")}
                    subtitle={t("servicesSurtitle")}
                    link1={{
                        "href": "https://recital-production.fr/",
                        "label": t("servicesButton1"),
                        "openInNewTab": true
                    }}
                    link2={{
                        "label": t("servicesButton2"),
                        ...routes.contact().link
                    }}
                    slides={[

                        <SliderCard
                            imageSrc={presWebp1}
                            sources={[
                                {
                                    "srcSet": presWebp1,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": presJpg1,
                                    "type": "image/jpeg"
                                }
                            ]}
                            title={t("serviceCard1Title")}
                            subTitle={t("serviceCard1Paragraph")}
                        />,
                        <SliderCard
                            imageSrc={presWebp5}
                            sources={[
                                {
                                    "srcSet": presWebp5,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": presJpg5,
                                    "type": "image/jpeg"
                                }
                            ]}
                            title={t("serviceCard5Title")}
                            subTitle={t("serviceCard5Paragraph")}
                        />,
                        <SliderCard
                            imageSrc={presWebp2}
                            sources={[
                                {
                                    "srcSet": presWebp2,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": presJpg2,
                                    "type": "image/jpeg"
                                }
                            ]}
                            title={t("serviceCard2Title")}
                            subTitle={t("serviceCard2Paragraph")}
                        />,
                        <SliderCard
                            imageSrc={presWebp3}
                            sources={[
                                {
                                    "srcSet": presWebp3,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": presJpg3,
                                    "type": "image/jpeg"
                                }
                            ]}
                            title={t("serviceCard3Title")}
                            subTitle={t("serviceCard3Paragraph")}
                        />,
                        <SliderCard
                            imageSrc={presWebp4}
                            sources={[
                                {
                                    "srcSet": presWebp4,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": presJpg4,
                                    "type": "image/jpeg"
                                }
                            ]}
                            title={t("serviceCard4Title")}
                            subTitle={t("serviceCard4Paragraph")}
                        />,
                    ]}

                />
            })()
        }
        <section style={{
            "marginTop": theme.spacing(27)
        }}>
            <PortraitGallery
                surtitle={t("mediaSurtitle")}
                title={t("mediaTitle")}
                highlight={t("mediaHighlight")}
                button={{
                    "href": "https://recital-production.fr/",
                    "label": t("mediaButton"),
                    "openInNewTab": true
                }}
                mobilePictures={[
                    {
                        "alt": "Récital production",
                        "src": m1Webp,
                        "sources": [
                            {
                                "srcSet": m1Webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": m1jpg,
                                "type": "image/jpeg"
                            },
                        ]
                    }
                ]}
                images={medias.webp.map((webp, index) => {
                    return {
                        "alt": "Récital production",
                        "src": webp,
                        "sources": [
                            {
                                "srcSet": webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": medias.jpg[index],
                                "type": "image/jpeg"
                            }
                        ]

                    }
                })}
            />

        </section>
        <section className={classes.contact}>
            <img className={classes.contactImage} src={rpPng2} alt="contact background" />

            <div className={classes.content}>
                <Surtitle
                    surtitle={t("contactSurtitle")}
                    className={classes.contactSurtitle}
                    classes={{
                        "star": classes.contactStar
                    }}
                />
                <div className={classes.contactTitleWrapper}>
                    <Typo variant="heading2">{t("contactTitle")}</Typo>
                    <Typo variant="highLight2">{t("contactHighlight")}</Typo>
                </div>
                <div className={classes.links}>
                    <a href="mailto:contact@recital-production.fr" className={classes.link} style={{
                        "marginBottom": theme.spacing(1)
                    }}>
                        <ReactSVG src={emailSvg} className={classes.socialSvg} />
                        <Typo className={classes.linkText} variant="paragraph1">{t("email")}</Typo>
                    </a>
                    <a href="https://www.instagram.com/intermezzo_bordeaux/" target="_blank" className={classes.link}>
                        <ReactSVG src={instaSvg} className={classes.socialSvg} />
                        <Typo className={classes.linkText} variant="paragraph1">{t("instaLinkLabel")}</Typo>
                    </a>

                </div>
                <LinkButton
                    href="https://recital-production.fr/"
                    label={t("websiteLinkLabel")}
                />

            </div>

        </section>
    </div>
})

const useStyles = tss.withName("Rp").create(({ theme }) => {
    return ({
        "root": {},
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
        "videoSection": {
            "marginTop": theme.spacing(12),

        },
        "video": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"
        },
        "playIcon": {
            "& svg": {
                "width": 40,
                "height": 40,
                "fill": theme.palette.white.main
            }
        },
        "selectionSection": {
            "position": "relative",
            "paddingTop": theme.spacing(27),
            "paddingBottom": theme.spacing(22)

        },
        "selectionText": {
            "maxWidth": 680,
            "display": "flex",
            "flexDirection": "column",
            "marginBottom": theme.spacing(17),
            "paddingLeft": theme.spacing(32),
            [theme.breakpoints.down("md")]: {
                "paddingLeft": theme.spacing(5),
                "paddingRight": theme.spacing(5)
            }
        },
        "selectionHeading": {
            "marginBottom": theme.spacing(7)

        },
        "selectionImage": {
            "position": "absolute",
            "top": 0,
            "right": 0,
            "height": "100%",
            "objectFit": "cover",
            "zIndex": -1
        },
        "mobileCards": {},
        "sliderCard": {
            "marginBottom": theme.spacing(2)

        },
        "backgroundMobileCards": {
            "height": "90%"

        },
        "contact": {
            "position": "relative",
            "paddingRight": theme.spacing(32),
            "paddingTop": theme.spacing(38),
            "paddingBottom": theme.spacing(38),
            "display": "flex",
            "justifyContent": "flex-end",
            "marginBottom": `-${theme.spacing(30)}`,
            [theme.breakpoints.down("md")]: {
                "paddingRight": theme.spacing(5),
                "paddingLeft": theme.spacing(5),
            }
        },
        "contactImage": {
            "position": "absolute",
            "height": "100%",
            "objectFit": "cover",
            "top": 0,
            "left": 0,
            "zIndex": -1
        },
        "content": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-start",
            "position": "relative"
        },
        "contactSurtitle": {
            "marginBottom": theme.spacing(4),
            "flexDirection": "row",
            "alignItems": "center"
        },
        "contactStar": {
            "marginBottom": 0,
            "marginRight": theme.spacing(3)

        },
        "contactTitleWrapper": {
            "marginBottom": theme.spacing(4)
        },
        "links": {
            "display": "flex",
            "flexDirection": "column",
            "marginBottom": theme.spacing(4)
        },
        "link": {
            "display": "flex",
            "alignItems": "center",
            "textDecoration": "none",
        },
        "socialSvg": {
            "& svg": {
                "width": 20,
                "height": 20
            },
            "marginRight": theme.spacing(2)
        },
        "linkText": {
            "textDecoration": "underline"

        },
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
    | "circularButton"
    | "playVideo"
    | "selectionTitleStart"
    | "selectionTitleHighlight"
    | "selectionTitleEnd"
    | "selectionParagraph"
    | "servicesTitle"
    | "servicesHighlight"
    | "servicesSurtitle"
    | "servicesParagraph"
    | "servicesButton1"
    | "servicesButton2"
    | "serviceCard1Title"
    | "serviceCard1Paragraph"
    | "serviceCard2Title"
    | "serviceCard2Paragraph"
    | "serviceCard3Title"
    | "serviceCard3Paragraph"
    | "serviceCard4Title"
    | "serviceCard4Paragraph"
    | "serviceCard5Title"
    | "serviceCard5Paragraph"
    | "mediaSurtitle"
    | "mediaTitle"
    | "mediaHighlight"
    | "mediaButton"
    | "contactSurtitle"
    | "contactTitle"
    | "contactHighlight"
    | "email"
    | "instaLinkLabel"
    | "websiteLinkLabel"




>()({ Rp })

export type I18n = typeof i18n