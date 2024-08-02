import { memo } from "react";
import { tss } from "tss";
import Typo from "@mui/material/Typography";
import { declareComponentKeys, useTranslation } from "i18n";
import { DraggableSliderWrapper } from "components/DraggableSliderWrapper";
import { SliderCard } from "components/SliderCard";
import { ClickableCard } from "components/ClickableCard";
import { CardWrapper } from "components/CardWrapper";
import { routes } from "router";
import prog1Jpg from "assets/jpg/pass-culture/program/program-1-img.jpg";
import prog1Webp from "assets/webp/pass-culture/program/program-1-img.webp";
import prog2Jpg from "assets/jpg/pass-culture/program/program-2-img.jpg";
import prog2Webp from "assets/webp/pass-culture/program/program-2-img.webp";
import prog3Jpg from "assets/jpg/pass-culture/program/program-3-img.jpg";
import prog3Webp from "assets/webp/pass-culture/program/program-3-img.webp";
import prog4Jpg from "assets/jpg/pass-culture/program/program-4-img.jpg";
import prog4Webp from "assets/webp/pass-culture/program/program-4-img.webp";
import { LinkButton } from "components/LinkButton";
import { Hero } from "components/Hero";
import heroJpg from "assets/jpg/pass-culture/pass-culture-hero-image.jpg";
import heroWebp from "assets/webp/pass-culture/pass-culture-hero-image.webp";
import bigTrLogoSvg from "assets/svg/big-transparent-logo.svg";
import { ReactSVG } from "react-svg";
import { CommentCard } from "components/CommentCard";
import { PictureAnimator } from "components/PictureAnimator";
import raphaelPortraitWebp from "assets/webp/pass-culture/raphaelle-portrait.webp";
import raphaelPortraitJpg from "assets/jpg/pass-culture/raphaelle-portrait.jpg";
import passCtWebp from "assets/webp/pass-culture/pass-culture-image-2.webp";
import passCtjpg from "assets/jpg/pass-culture/pass-culture-image-2.jpg";
import { PortraitGallery } from "components/PortraitGallery";
import souv1Jpg from "assets/jpg/pass-culture/souvenir/souvenir-1-img.jpg";
import souv2Jpg from "assets/jpg/pass-culture/souvenir/souvenir-2-img.jpg";
import souv3Jpg from "assets/jpg/pass-culture/souvenir/souvenir-3-img.jpg";
import souv4Jpg from "assets/jpg/pass-culture/souvenir/souvenir-4-img.jpg";
import souv5Jpg from "assets/jpg/pass-culture/souvenir/souvenir-5-img.jpg";
import souv6Jpg from "assets/jpg/pass-culture/souvenir/souvenir-6-img.jpg";
import souv7Jpg from "assets/jpg/pass-culture/souvenir/souvenir-7-img.jpg";
import souv8Jpg from "assets/jpg/pass-culture/souvenir/souvenir-8-img.jpg";
import souv1Webp from "assets/webp/pass-culture/souvenir/souvenir-1-img.webp";
import souv2Webp from "assets/webp/pass-culture/souvenir/souvenir-2-img.webp";
import souv3Webp from "assets/webp/pass-culture/souvenir/souvenir-3-img.webp";
import souv4Webp from "assets/webp/pass-culture/souvenir/souvenir-4-img.webp";
import souv5Webp from "assets/webp/pass-culture/souvenir/souvenir-5-img.webp";
import souv6Webp from "assets/webp/pass-culture/souvenir/souvenir-6-img.webp";
import souv7Webp from "assets/webp/pass-culture/souvenir/souvenir-7-img.webp";
import souv8Webp from "assets/webp/pass-culture/souvenir/souvenir-8-img.webp";

const souvImages = {
    "webp": [
        souv1Webp,
        souv2Webp,
        souv3Webp,
        souv4Webp,
        souv5Webp,
        souv6Webp,
        souv7Webp,
        souv8Webp,
    ],
    "jpg": [
        souv1Jpg,
        souv2Jpg,
        souv3Jpg,
        souv4Jpg,
        souv5Jpg,
        souv6Jpg,
        souv7Jpg,
        souv8Jpg,
    ],
}


export const PassCulture = memo(() => {
    const { t } = useTranslation("PassCulture");
    const { classes, windowInnerWidth, theme } = useStyles();

    return <div>
        <Hero
            animatedPicture={{
                "alt": "pass culture hero",
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
            surtitle={t("heroSurtitle")}
            paragraph={t("heroParagraph")}
            title={
                {
                    "title": t("heroTitle"),
                    "highLightTitle": t("heroHighLightTitle"),

                }
            }
            button1={{
                "href": "",
                "label": t("heroButton1")
            }}
            button2={{
                ...routes.contact().link,
                "label": t("heroButton2")

            }}
            statisticCard={{
                "stats": [
                    {
                        "statNumber": t("heroEstablishmentStatNumber"),
                        "statSign": t("heroEstablishmentStatSign"),
                        "statDesc": t("heroEstablishmentStatDesc"),
                    },
                    {
                        "statNumber": t("heroMediationStatNumber"),
                        "statSign": t("heroMediationStatSign"),
                        "statDesc": t("heroMediationStatDesc"),
                    },
                    {
                        "statNumber": t("heroFinanceStatNumber"),
                        "statSign": t("heroFinanceStatSign"),
                        "statDesc": t("heroFinanceStatDesc"),
                    },
                ]
            }}


        />

        <section className={classes.reasonsSection}>
            <ReactSVG
                src={bigTrLogoSvg}
                className={classes.bigTrLogo}
            />
            <div className={classes.stepsTextWrapper}>
                <ClickableCard
                    link={{
                        "href": ""
                    }}
                    surTitle={t("financeCardSurtitle")}
                    title={t("financeCardTitle")}
                    paragraph={t("financeCardParagraph")}
                    backgroundColor={theme.palette.lightOrange.main}
                    className={classes.financeClickableCard}
                />
                <Typo className={classes.stepsText} variant="heading3">
                    {t("financeParagraphStart")}
                    <span className={classes.stepsHighlight}> {t("financeParagraphHighlight")} </span>
                    {t("financeParagraphEnd")}
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
                            "type": "image/jpeg"
                        }
                    ]}
                    name={t("raphaelName")}
                    jobDesc={t("raphaelTitle")}
                    paragraph={t("raphaelComment")}
                />
                <PictureAnimator
                    src={passCtWebp}
                    sources={[
                        {
                            "srcSet": passCtWebp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": passCtjpg,
                            "type": "image/jpeg"
                        }
                    ]}
                    width={parseInt(theme.spacing(100))}
                    height={parseInt(theme.spacing(80))}
                    borderRadius={`${theme.spacing(40)} 0px`}
                />

            </div>
        </section>
        {
            (() => {
                if (windowInnerWidth < theme.breakpoints.values.md) {
                    return <div className={classes.cardsMobile}>
                        <CardWrapper
                            className={classes.mobileCardWrapper}
                            classes={{
                                "backgroundInner": classes.mobileCardsBackground
                            }}
                            isScaled={false}
                            title={t("voyageTitle")}
                            titleHighlight={t("voyageTitleHighlight")}
                            paragraph={t("voyageParagraph")}
                            cards={[
                                <SliderCard
                                    imageSrc={prog1Webp}
                                    subTitle={t("voyageCard1Paragraph")}
                                    title={t("voyageCard1Title")}
                                    className={classes.cardMobile}
                                    sources={[
                                        {
                                            "srcSet": prog1Webp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": prog1Jpg,
                                            "type": "image/jpeg"
                                        },
                                    ]}
                                    hover={{
                                        "paragraph": t("voyageCard1HoverParagraph"),
                                        "bulletPoint1": t("voyageCard1HoverDetail1"),
                                        "bulletPoint2": t("voyageCard1HoverDetail2")
                                    }}
                                />,
                                <SliderCard
                                    className={classes.cardMobile}
                                    imageSrc={prog2Webp}
                                    subTitle={t("voyageCard2Paragraph")}
                                    title={t("voyageCard2Title")}
                                    sources={[
                                        {
                                            "srcSet": prog2Webp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": prog2Jpg,
                                            "type": "image/jpeg"
                                        },
                                    ]}
                                    hover={{
                                        "paragraph": t("voyageCard2HoverParagraph"),
                                        "bulletPoint1": t("voyageCard2HoverDetail1"),
                                        "bulletPoint2": t("voyageCard2HoverDetail2")
                                    }}
                                />,
                                <SliderCard
                                    className={classes.cardMobile}
                                    imageSrc={prog3Webp}
                                    subTitle={t("voyageCard3Paragraph")}
                                    title={t("voyageCard3Title")}
                                    sources={[
                                        {
                                            "srcSet": prog3Webp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": prog3Jpg,
                                            "type": "image/jpeg"
                                        },
                                    ]}
                                    hover={{
                                        "paragraph": t("voyageCard3HoverParagraph"),
                                        "bulletPoint1": t("voyageCard3HoverDetail1"),
                                        "bulletPoint2": t("voyageCard3HoverDetail2")
                                    }}
                                />,
                                <SliderCard
                                    className={classes.cardMobile}
                                    imageSrc={prog4Webp}
                                    subTitle={t("voyageCard4Paragraph")}
                                    title={t("voyageCard4Title")}
                                    sources={[
                                        {
                                            "srcSet": prog4Webp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": prog4Jpg,
                                            "type": "image/jpeg"
                                        },
                                    ]}
                                    hover={{
                                        "paragraph": t("voyageCard4HoverParagraph"),
                                        "bulletPoint1": t("voyageCard4HoverDetail1"),
                                        "bulletPoint2": t("voyageCard4HoverDetail2")
                                    }}
                                />,

                            ]}
                        />
                        <LinkButton
                            variant="outlinedLight"
                            href=""
                            label={t("voyageButtonMore")}
                            className={classes.cardButtonMobile}
                        />
                        <ClickableCard
                            link={{
                                "href": ""
                            }}
                            title={t("voyageCard5Title")}
                            paragraph={t("voyageCard5Paragraph")}
                            surTitle=""
                            className={classes.clickableCardMobile}
                        />
                    </div>
                }

                return <DraggableSliderWrapper
                    title={t("voyageTitle")}
                    titleHighLight={t("voyageTitleHighlight")}
                    paragraph={t("voyageParagraph")}
                    subtitle="Programmes d’Intervention"
                    slides={[
                        <SliderCard
                            imageSrc={prog1Webp}
                            subTitle={t("voyageCard1Paragraph")}
                            title={t("voyageCard1Title")}
                            sources={[
                                {
                                    "srcSet": prog1Webp,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": prog1Jpg,
                                    "type": "image/jpeg"
                                },
                            ]}
                            hover={{
                                "paragraph": t("voyageCard1HoverParagraph"),
                                "bulletPoint1": t("voyageCard1HoverDetail1"),
                                "bulletPoint2": t("voyageCard1HoverDetail2")
                            }}
                        />,
                        <SliderCard
                            imageSrc={prog2Webp}
                            subTitle={t("voyageCard2Paragraph")}
                            title={t("voyageCard2Title")}
                            sources={[
                                {
                                    "srcSet": prog2Webp,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": prog2Jpg,
                                    "type": "image/jpeg"
                                },
                            ]}
                            hover={{
                                "paragraph": t("voyageCard2HoverParagraph"),
                                "bulletPoint1": t("voyageCard2HoverDetail1"),
                                "bulletPoint2": t("voyageCard2HoverDetail2")
                            }}
                        />,
                        <SliderCard
                            imageSrc={prog3Webp}
                            subTitle={t("voyageCard3Paragraph")}
                            title={t("voyageCard3Title")}
                            sources={[
                                {
                                    "srcSet": prog3Webp,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": prog3Jpg,
                                    "type": "image/jpeg"
                                },
                            ]}
                            hover={{
                                "paragraph": t("voyageCard3HoverParagraph"),
                                "bulletPoint1": t("voyageCard3HoverDetail1"),
                                "bulletPoint2": t("voyageCard3HoverDetail2")
                            }}
                        />,
                        <SliderCard
                            imageSrc={prog4Webp}
                            subTitle={t("voyageCard4Paragraph")}
                            title={t("voyageCard4Title")}
                            sources={[
                                {
                                    "srcSet": prog4Webp,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": prog4Jpg,
                                    "type": "image/jpeg"
                                },
                            ]}
                            hover={{
                                "paragraph": t("voyageCard4HoverParagraph"),
                                "bulletPoint1": t("voyageCard4HoverDetail1"),
                                "bulletPoint2": t("voyageCard4HoverDetail2")
                            }}
                        />,
                        <ClickableCard
                            link={{
                                "href": ""
                            }}
                            title={t("voyageCard5Title")}
                            paragraph={t("voyageCard5Paragraph")}
                            surTitle=""
                        />


                    ]}
                    link1={{
                        "href": "",
                        "label": t("voyageButtonMore")
                    }}
                    link2={{
                        "href": "",
                        "label": t("voyageButtonProject")
                    }}
                />


            })()
        }
        <PortraitGallery
            className={classes.portraits}
            images={souvImages.webp.map((image, index) => ({
                "alt": "portrait",
                "src": image,
                "sources": [
                    {
                        "srcSet": image,
                        "type": "image/webp"
                    },
                    {
                        "srcSet": souvImages.jpg[index],
                        "type": "image/jpeg"
                    }
                ]
            }))}
            button={{
                "href": "",
                "label": t("heroButton2")
            }}
            surtitle={t("souvSurtitle")}
            title={t("souvTitle")}
            highlight={t("souvHighlight")}
            mobilePictures={[
                {
                    "src": souv8Webp,
                    "sources": [
                        {
                            "srcSet": souv8Webp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": souv8Jpg,
                            "type": "image/jpeg"
                        }
                    ],
                    "alt": "portrait"
                },
                {
                    "src": souv2Webp,
                    "sources": [
                        {
                            "srcSet": souv2Webp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": souv2Jpg,
                            "type": "image/jpeg"
                        }
                    ],
                    "alt": "portrait"
                },
                {
                    "src": souv5Webp,
                    "sources": [
                        {
                            "srcSet": souv5Webp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": souv5Jpg,
                            "type": "image/jpeg"
                        }
                    ],
                    "alt": "portrait"
                }
            ]}

        />

    </div>

})

const useStyles = tss.withName("PassCulture").create(({ theme, windowInnerWidth }) => {
    return ({
        "root": {

        },
        "cardsMobile": {
            "display": "flex",
            "flexDirection": "column",
            [theme.breakpoints.between("xs", "md")]: {
                "alignItems": "center",
            }
        },
        "mobileCardWrapper": {
            [theme.breakpoints.between("xs", "md")]: {
                "width": "100vw"
            }

        },
        "cardMobile": {
            "marginBottom": theme.spacing(8),
            "width": "380px",
            "height": "300px",
            "minHeight": 350,
            [theme.breakpoints.down("xs")]: {

            }
        },
        "mobileCardsBackground": {
            "height": "115%"
        },
        "cardButtonMobile": {
            "alignSelf": "center",
            "marginTop": 30,
            "marginBottom": 40
        },
        "clickableCardMobile": {
            "position": "relative",
            "width": 380,
            "height": 340,
            [theme.breakpoints.down("xs")]: {
                "bottom": `${400 - windowInnerWidth}px`,
                "width": 400,
                "height": 360
            }
        },

        "reasonsSection": {
            "position": "relative",
            "marginBottom": theme.spacing(31),
            [theme.breakpoints.down("md")]: {
                "marginTop": theme.spacing(20)
            },
            [theme.breakpoints.down("xs")]: {
                "marginTop": theme.spacing(3)
            },



        },
        "financeClickableCard": {
            [theme.breakpoints.between("md", "xl")]: {
                "minWidth": 400,
                "width": 400,
                "height": 360
            },
            [theme.breakpoints.down("xs")]: {
                "left": 0
            }

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
                const value = windowInnerWidth < theme.breakpoints.values.sm ? theme.spacing(2) : theme.spacing(15);
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),
            "marginBottom": theme.spacing(21),
            "boxSizing": "border-box",
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "flex-end",
            "gap": theme.spacing(10),
            [theme.breakpoints.down("md")]: {
                "flexDirection": "column",
                "justifyContent": "center",
                "alignItems": "center"
            },
            [theme.breakpoints.down("xs")]: {
                "alignItems": "flex-start"
            }

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
        "portraits": {
            [theme.breakpoints.down("md")]: {
                "paddingLeft": theme.spacing(5),
                "paddingRight": theme.spacing(5),
            },
            "boxSizing": "border-box",
            "marginTop": theme.spacing(25)
        },
    })

})


const { i18n } = declareComponentKeys<
    | "heroSurtitle"
    | "heroTitle"
    | "heroHighLightTitle"
    | "heroParagraph"
    | "heroEstablishmentStatNumber"
    | "heroEstablishmentStatSign"
    | "heroEstablishmentStatDesc"
    | "heroMediationStatNumber"
    | "heroMediationStatSign"
    | "heroMediationStatDesc"
    | "heroFinanceStatNumber"
    | "heroFinanceStatSign"
    | "heroFinanceStatDesc"
    | "heroButton1"
    | "heroButton2"
    | "financeCardSurtitle"
    | "financeCardTitle"
    | "financeCardParagraph"
    | "financeParagraphStart"
    | "financeParagraphHighlight"
    | "financeParagraphEnd"
    | "raphaelComment"
    | "raphaelName"
    | "raphaelTitle"
    | "voyageTitle"
    | "voyageTitleHighlight"
    | "voyageSurtitle"
    | "voyageParagraph"
    | "voyageCard1Title"
    | "voyageCard1Paragraph"
    | "voyageCard2Title"
    | "voyageCard2Paragraph"
    | "voyageCard3Title"
    | "voyageCard3Paragraph"
    | "voyageCard4Title"
    | "voyageCard4Paragraph"
    | "voyageCard5Title"
    | "voyageCard5Paragraph"
    | "voyageCard1HoverParagraph"
    | "voyageCard1HoverDetail1"
    | "voyageCard1HoverDetail2"
    | "voyageCard2HoverParagraph"
    | "voyageCard2HoverDetail1"
    | "voyageCard2HoverDetail2"
    | "voyageCard3HoverParagraph"
    | "voyageCard3HoverDetail1"
    | "voyageCard3HoverDetail2"
    | "voyageCard4HoverParagraph"
    | "voyageCard4HoverDetail1"
    | "voyageCard4HoverDetail2"
    | "voyageButtonMore"
    | "voyageButtonProject"
    | "souvSurtitle"
    | "souvTitle"
    | "souvHighlight"

>()({ PassCulture })

export type I18n = typeof i18n