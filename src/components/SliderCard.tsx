import { memo } from "react";
import { tss } from "tss";
import Typography from "@mui/material/Typography";
import { ReactSVG } from "react-svg";
import starSvg from "assets/svg/pink-glitter.svg";


export type SliderCardProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    title: string;
    subTitle: string;
    imageSrc: string;
    sources?: {srcSet: string; type: string}[];
    hover?: {
        paragraph: string;
        bulletPoint1: string;
        bulletPoint2: string;
    };
};





export const SliderCard = memo((props: SliderCardProps) => {
    const { className, title, imageSrc, subTitle, hover, sources } = props;
    const { classes, cx } = useStyles({
        "hasHoverContent": hover !== undefined,
        "classesOverrides": props.classes,

    })


    return <div
        className={cx(classes.root, className)}
    >
        <div className={classes.content}>
            <Typography variant="highLight3">{title}</Typography>
            <Typography variant="paragraph1">{subTitle}</Typography>
            <ReactSVG className={classes.star} src={starSvg} />
        </div>
        {
            hover !== undefined &&
            <div className={classes.hoverContent}>
                <Typography variant="paragraph1">{hover.paragraph}</Typography>
                <div className={classes.bulletPoints}>
                    {
                        [hover.bulletPoint1, hover.bulletPoint2].map((bulletPoint) =>
                            <div key={bulletPoint} className={classes.bulletPoint}>
                                <ReactSVG className={cx(classes.star, classes.starBulletPoint)} src={starSvg} />
                                <Typography variant="paragraph1">{bulletPoint}</Typography>
                            </div>)
                    }

                </div>


            </div>
        }

        <div className={classes.pictureWrapper}>
            <picture>
                {
                    sources !== undefined &&
                    sources.map((source, index) => <source key={index} {...source} />)
                }
                <img className={classes.image} src={imageSrc} alt="miniature" />
            </picture>

        </div>

    </div>

})

const useStyles = tss
    .withNestedSelectors<"hoverContent" | "content">()
    .withParams<{ hasHoverContent: boolean; }>()
    .withName("SliderCard").create(({ theme, classes, hasHoverContent }) => {
        return ({

            "root": {
                "width": 450,
                "maxWidth": `calc(100vw - ${theme.spacing(4)})`,
                "minHeight": 390,
                "borderRadius": 55,
                "backgroundColor": theme.palette.lightOrange.main,
                "position": "relative",
                ...(hasHoverContent ? {
                    [`&:hover .${classes.content}`]: {
                        "opacity": 0,
                        "pointerEvents": "none"
                    },
                    [`&:hover .${classes.hoverContent}`]: {
                        "opacity": 1,
                        "pointerEvents": "all"
                    }
                } : {}),

            },
            "content": {
                ...(() => {
                    const value = theme.spacing(5);
                    return {
                        "paddingLeft": value,
                        "paddingRight": value
                    }
                })(),
                "display": "flex",
                "flexDirection": "column",
                "gap": theme.spacing(3),
                "justifyContent": "center",
                "width": "100%",
                "minHeight": 390,
                "boxSizing": "border-box",
                "transition": "opacity 700ms"
            },
            "star": {
                "& svg": {
                    "fill": theme.palette.white.main
                }

            },
            "pictureWrapper": {
                ...(()=>{
                    const value = theme.spacing(20);
                    return {
                        "width": value,
                        "height": value,

                    }

                })(),
                "borderRadius": `${theme.spacing(8)} 0px`,
                "overflow": "hidden",
                "position": "absolute",
                ...(() => {
                    const value = `-${theme.spacing(4)}`;
                    return {
                        "bottom": value,
                        "right": value
                    }
                })()
            },
            "image": {
                "objectFit": "cover",
                "width": "100%",
                "height": "100%"

            },
            "hoverContent": {
                "position": "absolute",
                "top": "0",
                "left": 0,
                "width": "100%",
                "height": "100%",
                "pointerEvents": "none",
                "opacity": 0,
                "transition": "opacity 700ms",
                ...(() => {
                    const value = theme.spacing(5);
                    return {
                        "paddingLeft": value,
                        "paddingRight": value
                    }
                })(),
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "center",
                "boxSizing": "border-box",
                "gap": theme.spacing(6)
            },
            "bulletPoint": {
                "display": "flex",
                "gap": theme.spacing(4),
                "alignItems": "center",
                "& p": {
                    "color": theme.palette.white.main
                }
            },
            "bulletPoints": {
                "display": "flex",
                "flexDirection": "column",
                "gap": theme.spacing(1)
            },
            "starBulletPoint": {
                "& svg": {
                    ...(()=>{
                        const value = theme.spacing(2);
                        return {

                            "width": value,
                            "height": value,
                        }
                    })()
                }
            }
        })

    })