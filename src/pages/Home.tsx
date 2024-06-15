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
import svgAcademie from "assets/svg/sponsors/logo-academie.svg";
import svgBordeaux from "assets/svg/sponsors/logo-bordeaux.svg";
import svgCredit from "assets/svg/sponsors/logo-creditmutuel.svg";
import svgGironde from "assets/svg/sponsors/logo-gironde.svg";
import svgMecenart from "assets/svg/sponsors/logo-mecenart.svg";
import svgMuseeAqui from "assets/svg/sponsors/logo-musee-aquitaine.svg";
import svgNouvAqui from "assets/svg/sponsors/logo-nouvelle-aquitaine.svg";
import svgPassCult from "assets/svg/sponsors/logo-passculture.svg";
import { Surtitle } from "components/Surtitle";
import { LinkButton } from "components/LinkButton";
import { routes } from "router";
import { ParagraphList } from "components/ParagraphList";


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

    </div>
})


const useStyles = tss.withName("Home").create(({ theme }) => {
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
            "right": "2.5vw",
            [theme.breakpoints.down("sm")]: {
                "right": 0,
            }
        },
        "sliderSection": {
            "marginTop": theme.spacing(20)


        },
        "titleAndButtonWrapper": {
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "flex-end",
            ...(()=>{
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