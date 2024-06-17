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
    const { classes, theme } = useStyles()
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
                    images={[
                        {
                            "src": svgNouvAqui,
                            "alt": "sponsor"
                        },
                        {
                            "src": svgGironde,
                            "alt": "sponsor"
                        },
                        {
                            "src": svgPassCult,
                            "alt": "sponsor"
                        },
                        {
                            "src": svgMecenart,
                            "alt": "sponsor"
                        },
                        {
                            "src": svgCredit,
                            "alt": "sponsor"
                        },
                        {
                            "src": svgMuseeAqui,
                            "alt": "sponsor"
                        },
                        {
                            "src": svgAcademie,
                            "alt": "sponsor"
                        },
                        {
                            "src": svgBordeaux,
                            "alt": "sponsor"
                        },
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
                cards={[
                    {
                        "link": {
                            "href": ""
                        },
                        "backgroundColor": theme.palette.pink.main,
                        "surTitle": t("servicesCard1Surtitle"),
                        "title": t("servicesCard1Title"),
                        "paragraph": t("servicesCard1Paragraph")
                    },
                    {
                        "link": {
                            "href": ""
                        },
                        "backgroundColor": theme.palette.lightOrange.main,
                        "surTitle": t("servicesCard2Surtitle"),
                        "title": t("servicesCard2Title"),
                        "paragraph": t("servicesCard2Paragraph")
                    },
                    {
                        "link": {
                            "href": ""
                        },
                        "backgroundColor": theme.palette.pink.main,
                        "surTitle": t("servicesCard3Surtitle"),
                        "title": t("servicesCard3Title"),
                        "paragraph": t("servicesCard3Paragraph")
                    },
                ]}

            />




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