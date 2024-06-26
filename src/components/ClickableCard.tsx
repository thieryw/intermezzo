import { CSSProperties, memo } from "react";
import { tss } from "tss";
import Typography from "@mui/material/Typography";
import { ReactSVG } from "react-svg";
import cardSvg from "assets/svg/card.svg";
import starSvg from "assets/svg/pink-glitter.svg";
import { CircledArrow } from "components/CircledArrow";
import { Link } from "tools/link";


export type ClickableCardProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    surTitle: string;
    title: string;
    paragraph: string;
    backgroundColor?: string;
    link: Omit<Link, "label">;
    style?: CSSProperties;
};





export const ClickableCard = memo((props: ClickableCardProps) => {
    const { className, paragraph, surTitle, title, backgroundColor, link, style } = props;
    const { classes, cx } = useStyles({
        "classesOverrides": props.classes,
        backgroundColor

    })


    return <div
        className={cx(classes.root, className)}
        style={style}
    >
        <a className={classes.link} {...link}>

            <ReactSVG
                src={cardSvg}
                className={classes.cardSvg}
            />
            <div className={classes.content}>

                <div className={classes.surtitleWrapper}>
                    <ReactSVG
                        src={starSvg}
                        className={classes.starSvg}

                    />
                    <Typography className={classes.typo} variant="label">{surTitle}</Typography>
                </div>
                <div className={classes.titleAndParagraph}>
                    <Typography className={cx(classes.title, classes.typo)} variant="heading3">{title}</Typography>
                    <Typography className={cx(classes.paragraph, classes.typo)} variant="paragraph1">{paragraph}</Typography>
                </div>
            </div>
            <CircledArrow classes={{
                "arrow": classes.arrowSvg
            }} className={classes.arrow} />
        </a>

    </div>

})

const useStyles = tss
    .withParams<{ backgroundColor?: string }>()
    .withName("ClickableCard").create(({ theme, backgroundColor, windowInnerWidth }) => {
        const scale = windowInnerWidth / 400 - 0.05
        return ({

            "root": {
                "width": 450,
                "height": 390,
                "maxWidth": "100vw",
                "maxHeight": "86vw",
                "position": "relative",
                "transition": "transform 300ms",
                ":hover": {
                    ...(windowInnerWidth < 400 ? {} : {
                        "transform": "scale(1.02)"

                    })
                },
                ...(windowInnerWidth < 400 ? {
                    "width": 400,
                    "maxWidth": 400,
                    "maxHeight": 360,
                    "transform": `scale(${scale})`,
                    "transformOrigin": "bottom left",
                    "position": "relative",
                    "left": 10
                } : {})

            },
            "cardSvg": {
                "& svg": {
                    "position": "absolute",
                    "top": 0,
                    "left": 0,
                    "fill": backgroundColor ?? theme.palette.pink.main,
                    "width": "100%",
                    "height": "100%",
                }

            },
            "surtitleWrapper": {
                "display": "flex",
                "alignItems": "center"
            },
            "starSvg": {
                "marginRight": theme.spacing(3),
                "& svg": {
                    "fill": theme.palette.white.main,
                }
            },
            "typo": {},
            "content": {
                "position": "relative",
                "width": "100%",
                "height": "100%",
                "paddingTop": theme.spacing(6),
                "boxSizing": "border-box",

                ...(() => {
                    const value = windowInnerWidth >= theme.breakpoints.values.lg ? theme.spacing(4) : theme.spacing(8);
                    return {
                        "paddingLeft": value,
                        "paddingRight": value,
                        "paddingBottom": value
                    }
                })(),
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "space-between"

            },
            "titleAndParagraph": {},
            "title": {
                "marginBottom": theme.spacing(2)
            },
            "paragraph": {
                "color": theme.palette.purple.main
            },
            "arrow": {
                "position": "absolute",
                "top": 0,
                "right": 0,
                "width": "22%",
                "height": "25.6%",
                "transition": "transform 300ms",
                ":hover": {
                    ...(windowInnerWidth < 400 ? {}: {

                        "transform": "scale(1.05)"
                    })
                },
                backgroundColor,
            },
            "arrowSvg": {

            },
            "link": {
                "textDecoration": "none",
            }
        })

    })