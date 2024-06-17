import { memo } from "react";
import { tss } from "tss";
import { declareComponentKeys, useTranslation } from "i18n";
import { DraggableSliderWrapper } from "components/DraggableSliderWrapper";
import { SliderCard } from "components/SliderCard";
import { ClickableCard } from "components/ClickableCard";
import { CardWrapper } from "components/CardWrapper";
import prog1Jpg from "assets/jpg/pass-culture/program/program-1-img.jpg";
import prog1Webp from "assets/webp/pass-culture/program/program-1-img.webp";
import prog2Jpg from "assets/jpg/pass-culture/program/program-2-img.jpg";
import prog2Webp from "assets/webp/pass-culture/program/program-2-img.webp";
import prog3Jpg from "assets/jpg/pass-culture/program/program-3-img.jpg";
import prog3Webp from "assets/webp/pass-culture/program/program-3-img.webp";
import prog4Jpg from "assets/jpg/pass-culture/program/program-4-img.jpg";
import prog4Webp from "assets/webp/pass-culture/program/program-4-img.webp";
import { LinkButton } from "components/LinkButton";

export const PassCulture = memo(() => {
    const { t } = useTranslation("PassCulture");
    const { classes, windowInnerWidth, theme } = useStyles();

    return <div>
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
        }
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

>()({ PassCulture })

export type I18n = typeof i18n