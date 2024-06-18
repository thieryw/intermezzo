import { memo } from "react";
import { tss } from "tss";
import { PictureAnimator } from "components/PictureAnimator"
import type { PictureAnimatorProps } from "components/PictureAnimator"
import { StatisticsCard } from "components/StatisticsCard";
import type { StatisticsCardProps } from "components/StatisticsCard";
import { LinkButton } from "components/LinkButton";
import { Link } from "tools/link";
import Typography from "@mui/material/Typography";
import starSvg from "assets/svg/pink-glitter.svg";
import { ReactSVG } from "react-svg";


export type HeroProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    surtitle: string;
    title: string;
    highLightTitle: string;
    highLightTitleImageUrl?: string;
    paragraph: string;
    button1: Link;
    button2: Link;
    animatedPicture: Pick<PictureAnimatorProps, "src" | "alt" | "sources">;
    statisticCard: Omit<StatisticsCardProps, "className" | "classes">;
}

export const Hero = memo((props: HeroProps)=>{
    const {
        animatedPicture,
        button1,
        button2,
        highLightTitle,
        paragraph,
        statisticCard,
        surtitle,
        title, 
        className,
        highLightTitleImageUrl
    } = props;

    const {classes, cx, theme, windowInnerWidth} = useStyles();

    return <section className={cx(classes.root, className)}>
        {
            (()=>{
                if (window.innerWidth < theme.breakpoints.values.md) {
                    return <div className={classes.mobileTitleWrapper}>
                        <div className={classes.mobileSurtitle}>
                            <ReactSVG src={starSvg} className={classes.starSvg} />
                            <Typography variant="label">{surtitle}</Typography>
                        </div>
                        <div className={classes.mobileTitle}>
                            <Typography className={classes.mobileHeading1} variant="heading1">{title}</Typography>
                            <Typography variant="highLight">{highLightTitle}</Typography>

                        </div>

                    </div>
                }

                return <div className={classes.textAndButtonWrapper}>
                    <div className={classes.textAndButtonWrapperInner}>
                        <div className={classes.surtitle}>
                            <ReactSVG src={starSvg} className={classes.starSvg} />
                            <Typography variant="label">{surtitle}</Typography>
                        </div>
                        <div className={classes.titleWrapper}>
                            <Typography variant="heading1">{title}</Typography>
                            <div className={classes.highLightTitle}>
                                {
                                    highLightTitleImageUrl !== undefined &&
                                    <div className={classes.highLightImageWrapper}>
                                        <img className={classes.highLightImage} src={highLightTitleImageUrl} alt="high light image for title" />
                                    </div>
                                }
                                <Typography variant="highLight">{highLightTitle}</Typography>
                            </div>

                        </div>
                        <Typography className={classes.paragraph} variant="paragraph1">{paragraph}</Typography>
                        <div className={classes.buttonWrapper}>
                            <LinkButton
                                {...button1}
                                variant="filled"
                            />
                            <LinkButton
                                {...button2}
                                variant="outlinedDark"
                            />
                        </div>

                    </div>

                </div>
            })()

        }
        <div className={classes.imageAndStatisticsWrapper}>

            <PictureAnimator
                {...animatedPicture}
                width={parseInt(theme.spacing(93))}
                height={parseInt(theme.spacing(93)) / 100 * 85}
                borderRadius={windowInnerWidth < theme.breakpoints.values.md ? "0px" : "0px 44%"}
            />
            <div className={classes.statisticCard}>
                <StatisticsCard
                    {...statisticCard}
                />

            </div>

        </div>
        {
            window.innerWidth < theme.breakpoints.values.md &&
            <div className={classes.mobileParagraphAndButtons}>
                <Typography className={classes.mobileParagraph} variant="paragraph1">{paragraph}</Typography>
                <div className={classes.mobileButtonWrapper}>
                    <LinkButton
                        {...button1}
                        variant="filled"
                        className={classes.mobileLinkButton}
                    />
                    <LinkButton
                        {...button2}
                        variant="outlinedDark"
                        className={classes.mobileLinkButton}
                    />
                </div>

            </div>
        }

    </section>

})

const useStyles = tss.withName("Hero").create(({ theme, windowInnerWidth }) => {
    return ({
        "root": {
            "width": "100vw",
            "maxWidth": 1920,
            "position": "relative",
            "display": "grid",
            "gridTemplateColumns": "repeat(2, 1fr)",
            ...(() => {
                const value = theme.spacing(15);
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }
            })(),
            "boxSizing": "border-box",
            [theme.breakpoints.down("lg")]: {
                "gap": theme.spacing(5)
            },
            [theme.breakpoints.down("md")]: {
                "display": "flex",
                "flexDirection": "column",
                "padding": 0
            }
        },
        "mobileTitleWrapper": {
            "paddingTop": theme.spacing(12),
            "marginBottom": theme.spacing(8)
        },
        "textAndButtonWrapper": {
            "paddingTop": theme.spacing(6)
        },
        "paragraph": {
            ...(windowInnerWidth < 1500 ? {
                "maxWidth": 400
            } : {
                "maxWidth": 572,
            })

        },
        "textAndButtonWrapperInner": {
            "maxWidth": 666,
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-start",
            "gap": theme.spacing(6)

        },
        "imageAndStatisticsWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-end",
            [theme.breakpoints.down("md")]: {
                "alignItems": "center",
                "marginBottom": theme.spacing(6)
            },
            [theme.breakpoints.down("sm")]: {
                "marginBottom": 0
            },

        },
        "mobileParagraphAndButtons": {
            ...(()=>{
                const value = theme.spacing(4);
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }
            })()
        },
        "mobileParagraph": {
            "textAlign": "center",
            "marginBottom": theme.spacing(10)
        },
        "mobileButtonWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(3),
            "alignItems": "center"
        },
        "mobileLinkButton": {
            "width": 270,

        },
        "surtitle": {
            "display": "flex",
            "alignItems": "center",
            "gap": theme.spacing(3)
        },
        "starSvg": {
            "& svg": {
                "fill": theme.palette.lightOrange.main
            }
        },
        "titleWrapper": {},
        "highLightTitle": {
            "display": "flex",
            "gap": theme.spacing(4),
            "alignItems": "center"
        },
        "highLightImageWrapper": {
            "height": theme.spacing(8),
            "overflow": "hidden",
            "borderRadius": theme.spacing(6)
        },
        "highLightImage": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"
        },
        "buttonWrapper": {
            "display": "flex",
            "gap": theme.spacing(3)
        },
        "statisticCard": {
            "position": "relative",
            "bottom": theme.spacing(10),
            "right": theme.spacing(6),
            [theme.breakpoints.down("lg")]: {
                "right": theme.spacing(3)
            },
            [theme.breakpoints.down("md")]: {
                "right": 0,
                "bottom": 0,
                "marginTop": theme.spacing(12),
                "paddingLeft": theme.spacing(5),
                "paddingRight": theme.spacing(5)
            },
            [theme.breakpoints.down("sm")]: {
                "bottom": theme.spacing(10),
                "marginTop": 0
            }
        },
        "mobileSurtitle": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "gap": theme.spacing(3),
            "marginBottom": theme.spacing(7)
        },
        "mobileTitle": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            ...(() => {
                const value = theme.spacing(4);
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })()
        },
        "mobileHeading1": {
            "textAlign": "center"
        }

    })
})

