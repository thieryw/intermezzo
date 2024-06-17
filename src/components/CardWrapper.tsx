import { memo } from "react";
import { tss } from "tss";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export type CardWrapperProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    title: string;
    titleHighlight: string;
    paragraph: string;
    cards: (ReactNode | undefined)[];
    isScaled: boolean;
}


export const CardWrapper = memo((props: CardWrapperProps) => {
    const {
        cards,
        paragraph,
        title,
        titleHighlight,
        isScaled,
        className

    } = props;

    const { classes, cx, theme, windowInnerWidth } = useStyles(
        {
            "classesOverrides": props.classes
        }
    );
    return <div className={cx(classes.root, className)}>
        <div className={classes.inner}>
            {
                windowInnerWidth < theme.breakpoints.values.md &&
                <div className={classes.backgroundInner}></div>

            }
            <div className={classes.textWrapper}>
                <div className={classes.titleWrapper}>
                    <Typography className={classes.title} variant="heading2">{title}</Typography>
                    <Typography className={classes.highlight} variant="highLight2">{titleHighlight}</Typography>
                </div>
                <Typography className={classes.paragraph} variant="paragraph1">{paragraph}</Typography>
            </div>
            <div className={classes.cards}>
                {
                    cards.map((card, index) => {
                        if (card === undefined) {
                            return;
                        }
                        return <div
                            key={index}
                            style={ isScaled ? {
                                ...(windowInnerWidth < 400 ? {
                                    "position": "relative",
                                    "bottom": `${(400 - windowInnerWidth) * (index + 1)}px`
                                } : {})
                            }: undefined}
                        >
                            {card}
                        </div>
                    })
                }
            </div>
        </div>

    </div>
})

const useStyles = tss.withName("CardWrapper").create(({ theme, windowInnerWidth }) => {
    return ({
        "root": {
            "position": "relative",
            [theme.breakpoints.up("md")]: {

                ...(() => {
                    const value = theme.spacing(11);
                    return {
                        "paddingRight": value,
                        "paddingLeft": value
                    }
                })()
            },
            "boxSizing": "border-box",

        },
        "inner": {
            [theme.breakpoints.up("md")]: {
                //"padding": theme.spacing(18),
                "borderRadius": 93,
                "background": theme.palette.gradient2.main,
                ...(() => {
                    const value = theme.spacing(18);
                    return {
                        "paddingTop": value,
                        "paddingLeft": value,
                        "paddingRight": value,
                    }
                })()
            },
            [theme.breakpoints.up("lgPlus")]: {
                "paddingBottom": theme.spacing(16)

            },
            "boxSizing": "border-box",
            "paddingTop": theme.spacing(20),
            "position": "relative",
        },
        "backgroundInner": {
            "position": "absolute",
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": "70%",
            "background": theme.palette.gradient2.main

        },
        "textWrapper": {
            "display": "flex",
            "position": "relative",
            "gap": theme.spacing(26),
            "alignItems": "center",
            "marginBottom": theme.spacing(14),
            ...(()=>{
                const value = theme.spacing(5);
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }
            })(),
            [theme.breakpoints.down("md")]: {
                "gap": theme.spacing(12),
                "flexDirection": "column",
                "alignItems": "center"
            },
        },
        "title": {
            "color": theme.palette.white.main,
            "textAlign": "center"
        },
        "highlight": {
            "textAlign": "center"

        },
        "paragraph": {
            "width": theme.spacing(70),
            "position": "relative",
            "top": theme.spacing(2),
            "color": theme.palette.white.main,
            "textAlign": "center",
            [theme.breakpoints.down("md")]: {
                "width": 600,
                "maxWidth": "95vw"
            }
        },
        "titleWrapper": {},
        "cards": {
            "display": "flex",
            [theme.breakpoints.down("md")]: {
                "flexDirection": "column",
                "alignItems": "center",
            },
            ...((windowInnerWidth >= theme.breakpoints.values.md && windowInnerWidth < theme.breakpoints.values.xl) ? {
                "transform": `scale(${windowInnerWidth / theme.breakpoints.values.xl})`,
                "transformOrigin": "top left",
                "width": 1980,
                //"justifyContent": "center"
            } : {
                "flexWrap": "wrap"
            }),
            ...(windowInnerWidth < 400 ? {

            } : {
                "gap": theme.spacing(5),
            }),



        },
    })
})
