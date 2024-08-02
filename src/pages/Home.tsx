import { memo } from "react";
import { declareComponentKeys } from "i18n";
import {useTranslation} from "i18n"
import { tss } from "tss";
import { Hero } from "components/Hero";
import heroJpg from "assets/jpg/home/accueil-hero-image.jpg";
import heroWebp from "assets/webp/home/accueil-hero-image.webp";
import titleCapsule from "assets/jpg/home/title-capsule-croped.jpg";
import Typo from "@mui/material/Typography";
import { CircularButton } from "components/CircularButton";
import arrowSvg from "assets/svg/icons/arrows/badge-arrow.svg";
import { AnimatedBanner } from "components/AnimatedBanner";
import svgAcademie from "assets/svg/home/logo-academie-bordeaux.svg";
import svgBordeaux from "assets/svg/home/logo-bordeaux.svg";
import svgCredit from "assets/svg/home/logo-creditmutuel.svg";
import svgGironde from "assets/svg/home/logo-gironde.svg";
import svgMecenart from "assets/svg/home/logo-mecenart.svg";
import svgMuseeAqui from "assets/svg/home/logo-musee-aquitaine.svg";
import svgNouvAqui from "assets/svg/home/logo-nouvelle-aquitaine.svg";
import svgPassCult from "assets/svg/home/logo-passculture.svg";
import { Surtitle } from "components/Surtitle";
import { LinkButton } from "components/LinkButton";
import { routes } from "router";
import { ParagraphList } from "components/ParagraphList";
import { CommentCard } from "components/CommentCard";
import raphaelPortraitJpg from "assets/jpg/home/raphael-portrait.jpg";
import raphaelPortraitWebp from "assets/webp/home/raphael-portrait.webp";
import { PictureAnimator } from "components/PictureAnimator";
import valuesJpg from "assets/jpg/home/valeurs-image.jpg";
import valuesWebp from "assets/webp/home/valeurs-image.webp";
import bigTrLogoSvg from "assets/svg/big-transparent-logo.svg";
import { ReactSVG } from "react-svg";
import { PortraitGallery } from "components/PortraitGallery";
import benevoleJpg1 from "assets/jpg/home/benevoles/benevole-img-1.jpg";
import benevoleJpg2 from "assets/jpg/home/benevoles/benevole-img-2.jpg";
import benevoleJpg3 from "assets/jpg/home/benevoles/benevole-img-3.jpg";
import benevoleJpg4 from "assets/jpg/home/benevoles/benevole-img-4.jpg";
import benevoleJpg5 from "assets/jpg/home/benevoles/benevole-img-5.jpg";
import benevoleJpg6 from "assets/jpg/home/benevoles/benevole-img-6.jpg";
import benevoleJpg7 from "assets/jpg/home/benevoles/benevole-img-7.jpg";
import benevoleJpg8 from "assets/jpg/home/benevoles/benevole-img-8.jpg";
import benevoleWebp1 from "assets/webp/home/benevoles/benevole-img-1.webp";
import benevoleWebp2 from "assets/webp/home/benevoles/benevole-img-2.webp";
import benevoleWebp3 from "assets/webp/home/benevoles/benevole-img-3.webp";
import benevoleWebp4 from "assets/webp/home/benevoles/benevole-img-4.webp";
import benevoleWebp5 from "assets/webp/home/benevoles/benevole-img-5.webp";
import benevoleWebp6 from "assets/webp/home/benevoles/benevole-img-6.webp";
import benevoleWebp7 from "assets/webp/home/benevoles/benevole-img-7.webp";
import benevoleWebp8 from "assets/webp/home/benevoles/benevole-img-8.webp";
import { CardWrapper } from "components/CardWrapper";
import { LoopedVideo } from "components/LoopedVideo";
import cubeMp4 from "assets/mp4/cube.mp4";
import { ClickableCard } from "components/ClickableCard";
import starSvg from "assets/svg/pink-glitter.svg";

const benevImages = {
    "webp": [
        benevoleWebp1,
        benevoleWebp2,
        benevoleWebp3,
        benevoleWebp4,
        benevoleWebp5,
        benevoleWebp6,
        benevoleWebp7,
        benevoleWebp8,
    ],
    "jpg": [
        benevoleJpg1,
        benevoleJpg2,
        benevoleJpg3,
        benevoleJpg4,
        benevoleJpg5,
        benevoleJpg6,
        benevoleJpg7,
        benevoleJpg8,
    ],
}


export const Home = memo(() => {
    const { t } = useTranslation("Home");
    const { classes, theme, cx, windowInnerWidth } = useStyles()
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
            title={{
                "title": t("heroTitle"),
                "highLightTitle": t("heroHighLightTitle"),
                "highLightTitleImageUrl": titleCapsule

            }
            }
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
        <section className={classes.partnerSection}>
            <CircularButton
                className={classes.circularButton}
                logoSvgSrc={arrowSvg}
                circularText={t("circularText")}
            />
            <div className={classes.sponsors}>
                <Surtitle
                    className={classes.partnerSurtitle}
                    surtitle={t("partnerBullet")}
                />
                <AnimatedBanner
                    className={classes.animatedBanner}
                    slides={[
                        <img src={svgNouvAqui} alt="sponsor" />,
                        <img src={svgGironde} alt="sponsor" />,
                        <img src={svgPassCult} alt="sponsor" />,
                        <img src={svgMecenart} alt="sponsor" />,
                        <img src={svgCredit} alt="sponsor" />,
                        <img src={svgMuseeAqui} alt="sponsor" />,
                        <img src={svgAcademie} alt="sponsor" />,
                        <img src={svgBordeaux} alt="sponsor" />,
                    ]}
                />
            </div>
        </section>
        <section className={classes.sliderSection}>
            <div className={classes.titleAndButtonWrapper}>
                <div className={classes.titleWrapper}>
                    <Surtitle
                        surtitle={t("valuesBullet")}
                    />
                    <div className={classes.title}>
                        <Typo className={classes.positionedTitle} variant="heading2">{t("reasonsTitleTop")}</Typo>
                        <Typo variant="heading2">{t("reasonsTitleBottom")}</Typo>
                    </div>

                </div>
                <LinkButton
                    {...routes.contact().link}
                    label={t("heroButton2")}
                    className={classes.contactButton}

                />
            </div>
            <ParagraphList
                paragraphs={[
                    {
                        "title": t("reasonsCard1Title"),
                        "paragraph": t("reasonsCard1Paragraph")
                    },
                    {
                        "title": t("reasonsCard2Title"),
                        "paragraph": t("reasonsCard2Paragraph")
                    },
                    {
                        "title": t("reasonsCard3Title"),
                        "paragraph": t("reasonsCard3Paragraph")
                    },
                    {
                        "title": t("reasonsCard4Title"),
                        "paragraph": t("reasonsCard4Paragraph")
                    },
                    {
                        "title": t("reasonsCard5Title"),
                        "paragraph": t("reasonsCard5Paragraph")
                    },
                ]}
            />

        </section>
        <section className={classes.reasonsSection}>
            <ReactSVG
                src={bigTrLogoSvg}
                className={classes.bigTrLogo}
            />
            <div className={classes.stepsTextWrapper}>
                <Typo className={classes.stepsText} variant="heading3">
                    {t("stepsParagraphBeginning")}
                    <span className={classes.stepsHighlight}> {t("stepsParagraphHighLight")} </span>
                    {t("stepsParagraphEnd")}
                </Typo>

            </div>
            <div className={classes.stepsImageAndComment}>
                <CommentCard
                    className={classes.commentCard}
                    portraitSrc={raphaelPortraitWebp}
                    portraitSources={[
                        {
                            "srcSet": raphaelPortraitWebp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": raphaelPortraitJpg,
                            "type": "image/jpg"
                        }
                    ]}
                    name={t("raphaelName")}
                    jobDesc={t("raphaelTitle")}
                    paragraph={t("raphaelComment")}
                />
                <PictureAnimator
                    src={valuesWebp}
                    sources={[
                        {
                            "srcSet": valuesWebp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": valuesJpg,
                            "type": "image/jpeg"
                        }
                    ]}
                    width={parseInt(theme.spacing(100))}
                    height={parseInt(theme.spacing(80))}
                    borderRadius={`0px ${theme.spacing(40)}`}
                />

            </div>

            <CardWrapper
                className={classes.cardWrapper}
                title={t("servicesTitle")}
                titleHighlight={t("servicesTitleHighLight")}
                paragraph={t("servicesParagraph")}
                isScaled={true}
                cards={[
                    <ClickableCard
                        link={{
                            "href": ""
                        }}
                        backgroundColor={theme.palette.pink.main}
                        surTitle={t("servicesCard1Surtitle")}
                        title={t("servicesCard1Title")}
                        paragraph={t("servicesCard1Paragraph")}
                    />,
                    <ClickableCard
                        link={{
                            "href": ""
                        }}
                        backgroundColor={theme.palette.pink.main}
                        surTitle={t("servicesCard2Surtitle")}
                        title={t("servicesCard2Title")}
                        paragraph={t("servicesCard2Paragraph")}
                    />,
                    <ClickableCard
                        link={{
                            "href": ""
                        }}
                        backgroundColor={theme.palette.pink.main}
                        surTitle={t("servicesCard3Surtitle")}
                        title={t("servicesCard3Title")}
                        paragraph={t("servicesCard3Paragraph")}
                    />,
                    (() => {
                        if (windowInnerWidth >= 400) {

                            return undefined;
                        }
                        return <ClickableCard
                            link={{
                                "href": ""
                            }}
                            surTitle={t("festivalCardSurtitle")}
                            title={t("festivalCardTitle")}
                            paragraph={t("festivalCardParagraph")}
                            backgroundColor="#4E2D84"
                            classes={{
                                "arrowSvg": classes.cubeCardArrow,
                                "typo": classes.cubeTypo,
                                "starSvg": classes.cubeStar

                            }}

                        />
                    })()
                ]}

            />
            <section className={classes.cubeSection}>
                <div className={classes.cubeTitleWrapper}>
                    <div className={classes.cubeTitleInnerWrapper}>
                        <Typo variant="heading2">{t("festivalTitle")}</Typo>
                        <Typo variant="highLight2">{t("festivalTitleHighLight")}</Typo>
                    </div>
                </div>

                <div className={classes.cubeCards}>
                    <LoopedVideo
                        src={cubeMp4}
                        width={440}
                        height={390}
                        className={cx(classes.cubeMp4, classes.cubeTopMp4)}
                    />
                    <ClickableCard
                        className={classes.cubeCard}
                        link={{
                            "href": ""
                        }}
                        surTitle={t("festivalCardSurtitle")}
                        title={t("festivalCardTitle")}
                        paragraph={t("festivalCardParagraph")}
                        backgroundColor="#4E2D84"
                        classes={{
                            "arrowSvg": classes.cubeCardArrow,
                            "typo": classes.cubeTypo,
                            "starSvg": classes.cubeStar
                        }}
                    />
                    <LoopedVideo
                        src={cubeMp4}
                        width={440}
                        height={390}
                        className={cx(classes.cubeMp4, classes.cubeBottomMp4)}
                    />

                </div>
                <AnimatedBanner
                    className={classes.textAnimatedBanner}

                    slides={[t("assemble"), t("reveal"), t("experiment")].map((text, index) =>
                        <div
                            key={index}
                            className={classes.textAnimatedBannerContent}
                        >
                            <Typo className={classes.animatedBannerText} variant="heading2">{text}</Typo>
                            <ReactSVG
                                className={classes.animatedBannerStar}
                                src={starSvg}
                            />
                        </div>)}

                />

            </section>




            <PortraitGallery
                images={benevImages.webp.map((image, index) => ({
                    "alt": "portrait",
                    "src": image,
                    "sources": [
                        {
                            "srcSet": image,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": benevImages.jpg[index],
                            "type": "image/jpeg"
                        }
                    ]
                }))}
                button={{
                    "href": "",
                    "label": t("joinButtonLabel")
                }}
                surtitle={t("voluntarySurtitle")}
                title={t("voluntaryTitle")}
                highlight={t("voluntaryHighLight")}
                mobilePictures={[
                    {
                        "src": benevoleWebp7,
                        "sources": [
                            {
                                "srcSet": benevoleWebp7,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": benevoleJpg7,
                                "type": "image/jpeg"
                            }
                        ],
                        "alt": "portrait"
                    }
                ]}

            />
        </section>

    </div>
})


const useStyles = tss.withName("Home").create(({ theme, windowInnerWidth }) => {
    return ({
        "cardNumber": {
            "color": "transparent",
            "background": theme.palette.gradient1.main,
            "backgroundClip": "text"
        },
        "partnerSection": {
            "position": "relative",
            "marginTop": theme.spacing(6),
            [theme.breakpoints.down("mdPlus")]: {
                "marginTop": theme.spacing(8)
            },

        },
        "sponsors": {
            "transform": "rotate(-4deg)",
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "gap": theme.spacing(5),
            [theme.breakpoints.down("sm")]: {
                "transform": "none"
            }

        },
        "circularButton": {
            "position": "absolute",
            "bottom": theme.spacing(12),
            "left": theme.spacing(12),
            "zIndex": 1,
            [theme.breakpoints.down("mdPlus")]: {
                "display": "none"
            }

        },
        "partnerSurtitle": {
            "position": "relative",
            "right": theme.spacing(40),
            [theme.breakpoints.down("mdPlus")]: {
                "right": 0
            }

        },
        "animatedBanner": {
            "background": theme.palette.gradient2.main,
            ...(() => {
                const value = theme.spacing(6);
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }

            })(),
            //"width": "105vw",
            "width": "105vw",
            "position": "relative",
            "transform": "translateX(-2vw)",
            [theme.breakpoints.down("sm")]: {
                "right": 0,
            }
        },
        "sliderSection": {
            "marginTop": theme.spacing(20),
            "position": "relative",
            "zIndex": 1


        },
        "titleAndButtonWrapper": {
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "flex-end",
            ...(() => {
                const value = theme.spacing(32);
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }
            })(),
            "marginBottom": theme.spacing(12),
            [theme.breakpoints.down("md")]: {
                "flexDirection": "column",
                "justifyContent": "center",
                "alignItems": "center",
                "padding": 0
            }
        },
        "titleWrapper": {},
        "title": {
            "marginTop": theme.spacing(4),
            [theme.breakpoints.down("md")]: {
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center"
            }
        },
        "positionedTitle": {
            "position": "relative",
            "left": theme.spacing(6),
            [theme.breakpoints.down("md")]: {
                "left": 0
            }

        },
        "contactButton": {
            [theme.breakpoints.down("md")]: {
                "display": "none"
            }
        },
        "reasonsSection": {
            "position": "relative",
            "marginTop": theme.spacing(31)

        },
        "bigTrLogo": {
            "position": "relative",
            "& svg": {
                "position": "absolute",
                "top": `-${theme.spacing(28)}`,
                "right": 0,
                "width": "100vw",
                [theme.breakpoints.down("sm")]: {
                    "width": "200vw",
                    //"top": "-200%"
                    "top": -300

                }

            }

        },
        "stepsTextWrapper": {
            ...(() => {
                const value = windowInnerWidth < theme.breakpoints.values.sm ? theme.spacing(2) : theme.spacing(31);
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),
            "marginBottom": theme.spacing(21),
            "boxSizing": "border-box"

        },
        "stepsText": {
            "width": 800,
            "maxWidth": "100%",
            [theme.breakpoints.down("md")]: {
                "textAlign": "center"
            }
        },
        "stepsHighlight": {
            ...theme.typography.highLight4
        },
        "stepsImageAndComment": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            [theme.breakpoints.down("md")]: {
                "display": "none"
            }
        },
        "commentCard": {
            "position": "relative",
            "left": theme.spacing(12),
            "top": theme.spacing(10),
            "zIndex": 1
        },
        "cardWrapper": {
            "marginBottom": theme.spacing(25),
            "marginTop": theme.spacing(25)
        },
        "cubeSection": {
            "position": "relative",
            "marginBottom": theme.spacing(30),
            [theme.breakpoints.down("xs")]: {

                "bottom": `${((400 - windowInnerWidth)) * 5.1}px`,
                "marginBottom": 0
            }
        },
        "cubeTitleWrapper": {
            "display": "flex",
            "justifyContent": "center",
            "marginBottom": theme.spacing(20),
            [theme.breakpoints.between("md", "lgPlus")]: {
                "marginBottom": 0
            },
            [theme.breakpoints.down("xs")]: {
                "display": "none"
            }
        },
        "cubeTitleInnerWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-end",

        },
        "cubeCards": {
            "display": "flex",
            "gap": 42,
            "flexWrap": "wrap",
            //"width": "100vw",
            "justifyContent": "center",
            [theme.breakpoints.between("md", "xl")]: {
                "transform": `scale(${windowInnerWidth / 1980})`,
                "transformOrigin": "bottom left",
                "width": 1980,
                "position": "relative",
                "left": "13.5%"
            },
            [theme.breakpoints.down("md")]: {
            }
        },
        "cubeCard": {
            ...(windowInnerWidth < 400 ? {
                "display": "none"
            } : {})
        },
        "cubeCardArrow": {
            "& svg": {
                "fill": theme.palette.white.main
            }
        },
        "cubeTypo": {
            "color": theme.palette.white.main
        },
        "cubeStar": {
            "& svg": {
                "fill": theme.palette.darkGray.main
            }
        },
        "cubeMp4": {
            "borderRadius": 55,
            [theme.breakpoints.down("xs")]: {
                "borderRadius": 0,
            },
        },
        "cubeTopMp4": {
            [theme.breakpoints.down("md")]: {
                "display": "none"
            }
        },
        "cubeBottomMp4": {
        },
        "textAnimatedBannerContent": {
            "display": "flex",
            "alignItems": "center",
            "gap": theme.spacing(20),

        },
        "textAnimatedBanner": {
            "display": "flex",
            "alignItems": "center",
            "backgroundColor": theme.palette.lightOrange.main,
            "position": "absolute",
            [theme.breakpoints.up("xs")]: {

                "transform": "rotate(6deg) translateX(-2vw)",
                "bottom": -100,
                "width": "105vw",
            },
            [theme.breakpoints.up("xl")]: {
                "left": -(windowInnerWidth - theme.breakpoints.values.xl) / 2

            }
        },
        "animatedBannerText": {
            "color": theme.palette.white.main,
        },
        "animatedBannerStar": {
            "& svg": {
                "fill": theme.palette.white.main
            }
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
    | "circularText"
    | "partnerBullet"
    | "valuesBullet"
    | "reasonsTitleTop"
    | "reasonsTitleBottom"
    | "reasonsCard1Title"
    | "reasonsCard1Paragraph"
    | "reasonsCard2Title"
    | "reasonsCard2Paragraph"
    | "reasonsCard3Title"
    | "reasonsCard3Paragraph"
    | "reasonsCard4Title"
    | "reasonsCard4Paragraph"
    | "reasonsCard5Title"
    | "reasonsCard5Paragraph"
    | "stepsParagraphBeginning"
    | "stepsParagraphHighLight"
    | "stepsParagraphEnd"
    | "raphaelComment"
    | "raphaelName"
    | "raphaelTitle"
    | "servicesTitle"
    | "servicesTitleHighLight"
    | "servicesParagraph"
    | "servicesCard1Surtitle"
    | "servicesCard1Title"
    | "servicesCard1Paragraph"
    | "servicesCard2Surtitle"
    | "servicesCard2Title"
    | "servicesCard2Paragraph"
    | "servicesCard3Surtitle"
    | "servicesCard3Title"
    | "servicesCard3Paragraph"
    | "festivalTitle"
    | "festivalTitleHighLight"
    | "festivalCardSurtitle"
    | "festivalCardTitle"
    | "festivalCardParagraph"
    | "assemble"
    | "reveal"
    | "experiment"
    | "voluntarySurtitle"
    | "voluntaryTitle"
    | "voluntaryHighLight"
    | "joinButtonLabel"

>()({ Home })

export type I18n = typeof i18n