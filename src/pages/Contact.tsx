import { memo } from "react";
import { declareComponentKeys, useTranslation } from "i18n";
import { tss } from "tss";
import Typo from "@mui/material/Typography";
import { Surtitle } from "components/Surtitle";
import emailSvg from "assets/svg/icons/emailIcon.svg"
import instaSvg from "assets/svg/icons/insta-purple.svg";
import fbSvg from "assets/svg/icons/fb-purple.svg";
import { ReactSVG } from "react-svg";
import { LinkButton } from "components/LinkButton";
import logoSvg from "assets/svg/big-transparent-logo.svg";
import { social } from "router";


export const Contact = memo(() => {
    const { t } = useTranslation("Contact");
    const { classes } = useStyles();
    return <div className={classes.root}>
        <div className={classes.titleWrapper}>
            <Surtitle
                surtitle={t("heroSurtitle")}
                className={classes.heroSurtitle}
            />
            <Typo className={classes.heading} variant="heading1">{t("heroTitle")}</Typo>
            <Typo className={classes.heading} variant="highLight">{t("heroHighlight")}</Typo>
        </div>

        <section className={classes.mainSection}>
            <ReactSVG className={classes.logo} src={logoSvg} />
            <div className={classes.credentials}>
                <div className={classes.credTitleWrapper}>
                    <Typo variant="heading3">{t("assoTitle1")}</Typo>
                    <Typo variant="heading3">{t("assoTitle2")}</Typo>
                </div>
                <div className={classes.addressWrapper}>
                    <Typo variant="paragraph1">{t("addressLine1")}</Typo>
                    <Typo variant="paragraph1">{t("addressLine2")}</Typo>
                    <Typo variant="paragraph1">{t("addressLine3")}</Typo>
                </div>

                <div className={classes.socialWrapper}>
                    {
                        [
                            {
                                "icon": emailSvg,
                                "label": t("gmail"),
                                "href": `mailto:${t("gmail")}`
                            },
                            {
                                "icon": fbSvg,
                                "label": t("facebook"),
                                "href": social.facebook
                            },
                            {
                                "icon": instaSvg,
                                "label": t("insta"),
                                "href": social.insta
                            }

                        ].map(({ href, icon, label }) => <a href={href} key={label} className={classes.social}>
                            <ReactSVG src={icon} className={classes.socialSvg} />
                            <Typo className={classes.linkText} variant="paragraph1">{label}</Typo>
                        </a>)
                    }

                </div>

                <Typo className={classes.rpTitle} variant="heading3">{t("rpTitle")}</Typo>

                <div className={classes.socialWrapper}>
                    {
                        [
                            {
                                "icon": emailSvg,
                                "label": t("rpEmail"),
                                "href": `mailto:${t("rpEmail")}`
                            },
                            {
                                "icon": instaSvg,
                                "label": t("rpInsta"),
                                "href": "https://www.instagram.com/recital_production/"
                            }

                        ].map(({ href, icon, label }) => <a href={href} key={label} className={classes.social}>
                            <ReactSVG src={icon} className={classes.socialSvg} />
                            <Typo className={classes.linkText} variant="paragraph1">{label}</Typo>
                        </a>)
                    }

                </div>
                <LinkButton 
                    className={classes.button}
                    href="https://recital-production.fr/"
                    label={t("siteButtonLabel")}
                    variant="outlinedDark"
                />

            </div>

        </section>

    </div>
})

const useStyles = tss.withName("Contact").create(({ theme }) => {
    return ({
        "root": {
            "width": "100vw",
            "maxWidth": theme.breakpoints.values.xl,
            ...(() => {
                const valueXl = theme.spacing(21);
                const valueMd = theme.spacing(14);
                const valueXs = theme.spacing(4);
                return {
                    "paddingLeft": valueXl,
                    "paddingRight": valueXl,
                    [theme.breakpoints.down("md")]: {
                        "paddingLeft": valueMd,
                        "paddingRight": valueMd,
                    },
                    [theme.breakpoints.down("sm")]: {
                        "paddingLeft": valueXs,
                        "paddingRight": valueXs,
                    }
                }
            })(),
            "boxSizing": "border-box",
            "position": "relative"
        },
        "titleWrapper": {
            "display": "flex",
            "justifyContent": "flex-start",
            "flexDirection": "column"
        },
        "heroSurtitle": {
            "marginBottom": theme.spacing(4)
        },
        "heading": {
            [theme.breakpoints.down("md")]: {
                "textAlign": "center"
            }

        },
        "mainSection": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-end",
            "paddingTop": theme.spacing(18),
            "paddingRight": theme.spacing(17),
            [theme.breakpoints.down("md")]: {
                "alignItems": "flex-start"
            }
        },
        "credentials": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-start"
        },
        "credTitleWrapper": {
            "marginBottom": theme.spacing(4)
        },
        "addressWrapper": {
            "marginBottom": theme.spacing(2)

        },
        "socialWrapper": {},
        "social": {
            "textDecoration": "none",
            "display": "flex",
            "alignItems": "center",
            "marginBottom": theme.spacing(2)
        },
        "socialSvg": {
            "marginRight": theme.spacing(2),
            "position": "relative",
            "top": 3,
            "& svg": {
                "width": 20,
            }

        },
        "linkText": {
            "textDecoration": "underline",
            "color": theme.palette.purple.main
        },
        "rpTitle": {
            "marginTop": theme.spacing(7),
            "marginBottom": theme.spacing(3)
        },
        "button": {
            "top": theme.spacing(4)
        },
        "logo": {
            "position": "absolute",
            "top": 0,
            "left": -50,
            /*"& svg": {
                "width": "70vw",
                "height": "70vw"
            }*/
        }
    })
})


export const { i18n } = declareComponentKeys<
    | "heroSurtitle"
    | "heroTitle"
    | "heroHighlight"
    | "assoTitle1"
    | "assoTitle2"
    | "addressLine1"
    | "addressLine2"
    | "addressLine3"
    | "gmail"
    | "facebook"
    | "insta"
    | "rpTitle"
    | "rpEmail"
    | "rpInsta"
    | "siteButtonLabel"
    | "circularText"
>()({ Contact });

export type I18n = typeof i18n