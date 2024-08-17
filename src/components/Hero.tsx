import { ReactNode, memo } from "react";
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
import { LoopedVideo, type LoopedVideoProps } from "components/LoopedVideo";

type Title = {
    title?: string;
    highLightTitle?: string;
    highLightTitleImageUrl?: string;
}

export type HeroProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    surtitle: string;
    paragraph: string;
    title: Title | ReactNode;
    button1: Link;
    button2: Link;
    animatedPicture?: Pick<PictureAnimatorProps, "src" | "alt" | "sources">;
    loopedVideo?: Pick<LoopedVideoProps, "src">;
    statisticCard: Omit<StatisticsCardProps, "className" | "classes">;
}

export const Hero = memo((props: HeroProps) => {
    const {
        animatedPicture,
        button1,
        button2,
        paragraph,
        statisticCard,
        surtitle,
        className,
        title,
        loopedVideo
    } = props;

    const { classes, cx, theme, windowInnerWidth, isDark } = useStyles({
        "classesOverrides": props.classes
    });

    return <section className={cx(classes.root, className)}>
        {
            (() => {
                const titleObj = title as Title
                if (window.innerWidth < theme.breakpoints.values.md) {


                    return <div className={classes.mobileTitleWrapper}>
                        <div className={classes.mobileSurtitle}>
                            <ReactSVG src={starSvg} className={classes.starSvg} />
                            <Typography variant="label">{surtitle}</Typography>
                        </div>
                        {
                            (() => {
                                if (
                                    titleObj.highLightTitle === undefined
                                    && titleObj.highLightTitleImageUrl === undefined
                                    && titleObj.title === undefined
                                ) {

                                    return title as ReactNode;
                                }
                                return <div className={classes.mobileTitle}>
                                    <Typography className={classes.mobileHeading1} variant="heading1">{titleObj.title}</Typography>
                                    <Typography className={classes.mobileHighlight} variant="highLight">{titleObj.highLightTitle}</Typography>

                                </div>

                            })()
                        }

                    </div>
                }

                return <div className={classes.textAndButtonWrapper}>
                    <div className={classes.textAndButtonWrapperInner}>
                        <div className={classes.surtitle}>
                            <ReactSVG src={starSvg} className={classes.starSvg} />
                            <Typography variant="label">{surtitle}</Typography>
                        </div>
                        {
                            (() => {

                                if (
                                    titleObj.highLightTitle === undefined
                                    && titleObj.highLightTitleImageUrl === undefined
                                    && titleObj.title === undefined
                                ) {

                                    return <div className={classes.titleWrapper}>{title as ReactNode}</div>;
                                }

                                return <div className={classes.titleWrapper}>
                                    <Typography variant="heading1">{titleObj.title}</Typography>
                                    <div className={classes.highLightTitle}>
                                        {
                                            titleObj.highLightTitleImageUrl !== undefined &&
                                            <div className={classes.highLightImageWrapper}>
                                                <img className={classes.highLightImage} src={titleObj.highLightTitleImageUrl} alt="high light image for title" />
                                            </div>
                                        }
                                        <Typography variant="highLight">{titleObj.highLightTitle}</Typography>
                                    </div>

                                </div>
                            })()

                        }
                        <Typography className={classes.paragraph} variant="paragraph1">{paragraph}</Typography>
                        <div className={classes.buttonWrapper}>
                            <LinkButton
                                {...button1}
                                variant="filled"
                                className={classes.button1}
                            />
                            <LinkButton
                                {...button2}
                                variant={isDark ? "outlinedLight" : "outlinedDark"}
                            />
                        </div>

                    </div>

                </div>
            })()

        }
        <div className={classes.imageAndStatisticsWrapper}>

            {
                (animatedPicture !== undefined && loopedVideo === undefined) &&
                <PictureAnimator
                    {...animatedPicture}
                    width={parseInt(theme.spacing(93))}
                    height={parseInt(theme.spacing(93)) / 100 * 85}
                    borderRadius={windowInnerWidth < theme.breakpoints.values.md ? "0px" : "0px 44%"}
                    className={classes.animatedPicture}
                />
            }

            {
                (loopedVideo !== undefined && animatedPicture === undefined) &&
                <LoopedVideo 
                    className={classes.loopedVideo}
                    width={parseInt(theme.spacing(93))}
                    height={parseInt(theme.spacing(93))}
                    {...loopedVideo}
                />
            }

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
                        className={cx(classes.mobileLinkButton, classes.mobileLinkButton1)}
                        
                    />
                    <LinkButton
                        {...button2}
                        variant={isDark ? "outlinedLight" : "outlinedDark"}
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
            [theme.breakpoints.down("md")]: {
                "display": "flex",
                "flexDirection": "column",
                "padding": 0
            },
            "paddingTop": theme.spacing(7)
        },
        "mobileTitleWrapper": {
            "paddingTop": theme.spacing(12),
            "marginBottom": theme.spacing(13),
        },
        "textAndButtonWrapper": {
            "paddingTop": theme.spacing(6),
            [theme.breakpoints.down("lg")]: {
                "marginRight": theme.spacing(5),
            },
        },
        "paragraph": {
            ...(windowInnerWidth < 1500 ? {
                "maxWidth": 400
            } : {
                "maxWidth": 572,
            }),
            "marginBottom": theme.spacing(6)

        },
        "textAndButtonWrapperInner": {
            "maxWidth": 666,
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-start",

        },
        "imageAndStatisticsWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-end",
            [theme.breakpoints.down("md")]: {
                "alignItems": "center",
                "marginBottom": theme.spacing(11)
            },
            [theme.breakpoints.down("sm")]: {
                "marginBottom": 0
            },

        },
        "mobileParagraphAndButtons": {
            ...(() => {
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
            "alignItems": "center"
        },
        "mobileLinkButton1": {
            "marginBottom": theme.spacing(3)

        },
        "mobileLinkButton": {
            "width": 270,

        },
        "surtitle": {
            "display": "flex",
            "alignItems": "center",
            "marginBottom": theme.spacing(6)
        },
        "starSvg": {
            "& svg": {
                "fill": theme.palette.lightOrange.main
            },
            "marginBottom": theme.spacing(3),
            [theme.breakpoints.up("md")]: {
                "marginRight": theme.spacing(3),
                "marginBottom": 0
            }
        },
        "titleWrapper": {
            "marginBottom": theme.spacing(6)
        },
        "highLightTitle": {
            "display": "flex",
            "alignItems": "center"
        },
        "highLightImageWrapper": {
            "height": theme.spacing(8),
            "overflow": "hidden",
            "borderRadius": theme.spacing(6),
            "marginRight": theme.spacing(4)
        },
        "highLightImage": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"
        },
        "buttonWrapper": {
            "display": "flex",
        },
        "button1": {
            "marginRight": theme.spacing(3)

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
        "mobileHighlight": {
            "textAlign": "center"

        },
        "mobileHeading1": {
            "textAlign": "center"
        },
        "animatedPicture": {},
        "loopedVideo": {}

    })
})

