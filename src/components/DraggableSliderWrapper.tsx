import { memo } from "react";
import type { Link } from "tools/link";
import type { DraggableSliderProps } from "components/DraggableSlider";
import { DraggableSlider } from "components/DraggableSlider";
import starSvg from "assets/svg/pink-glitter.svg";
import { LinkButton } from "components/LinkButton";
import Typography from "@mui/material/Typography";
import { tss } from "tss";
import { ReactSVG } from "react-svg";


export type DraggableSliderWrapperProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    title: string;
    titleHighLight: string;
    subtitle: string;
    paragraph: string;
    link1: Link;
    link2: Link;
    slides: DraggableSliderProps["slides"]
}


export const DraggableSliderWrapper = memo((props: DraggableSliderWrapperProps) => {

    const { link1, link2, paragraph, slides, subtitle, title, titleHighLight, className } = props;
    const { classes, cx } = useStyles({
        "classesOverrides": props.classes
    })

    return <div className={cx(classes.root, className)}>
        <div className={classes.inner}>
            <div className={classes.textWrapper}>
                <div className={classes.titleWrapper}>
                    <Typography className={classes.whiteText} variant="heading2">{title}</Typography>
                    <Typography className={classes.highLight} variant="highLight2">{titleHighLight}</Typography>
                </div>
                <div className={classes.paragraphWrapper}>
                    <div className={classes.subtitleWrapper}>
                        <ReactSVG className={classes.starSvg} src={starSvg} />
                        <Typography className={classes.whiteText} variant="label">{subtitle}</Typography>
                    </div>
                    <Typography className={cx(classes.whiteText, classes.paragraph)} variant="paragraph1">{paragraph}</Typography>

                </div>
            </div>
            <DraggableSlider
                slides={slides}
                startingPercentage={50}
                className={classes.slider}

            />
            <div className={classes.links}>
                <LinkButton
                    {...link1}
                    variant="outlinedLight"
                />
                <LinkButton
                    {...link2}
                    variant={"filled"}
                />
            </div>

        </div>

    </div>
});

const useStyles = tss.withName("DraggableSliderWrapper").create(({ theme }) => {
    return ({
        "root": {
            "width": "100vw",
            "position": "relative",
            ...(() => {
                const value = theme.spacing(11);
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }

            })(),
            "boxSizing": "border-box"

        },
        "inner": {
            "borderRadius": theme.spacing(13),
            "background": theme.palette.gradient2.main,
            "width": "100%",
            "height": "100%"

        },
        "slider": {
            "position": "relative",
            "right": theme.spacing(11),
            "top": theme.spacing(2),
            [theme.breakpoints.down("mdPlus")]: {
                "right": 0
            }
        },
        "textWrapper": {
            "display": "flex",
            "paddingLeft": theme.spacing(18),
            "position": "relative",
            "top": theme.spacing(17),
            [theme.breakpoints.down("mdPlus")]: {
                "top": 0,
                "paddingLeft": 0,
                "justifyContent": "center",
                "gap": theme.spacing(10),
                "alignItems": "center",
                "paddingTop": theme.spacing(10),
                "paddingBottom": theme.spacing(5)
            }
        },
        "titleWrapper": {
            "marginRight": theme.spacing(7),
            "display": "flex",
            "flexDirection": "column",
            "width": theme.spacing(50),
            "maxWidth": "100vw"
        },
        "highLight": {
            "alignSelf": "flex-start"

        },
        "paragraphWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(4),
            "position": "relative",
            "top": theme.spacing(5),
            [theme.breakpoints.down("mdPlus")]: {
                "top": 0

            }
        },
        "subtitleWrapper": {
            "display": "flex",
            "gap": theme.spacing(4),
            "alignItems": "center"
        },
        "paragraph": {
            "width": "30vw"

        },
        "starSvg": {
            "& svg": {
                "fill": theme.palette.lightOrange.main,
                "width": 25,
                "height": 25
            }
        },
        "whiteText": {
            "color": theme.palette.white.main
        },
        "links": {
            "display": "flex",
            "justifyContent": "flex-end",
            "paddingRight": theme.spacing(20),
            "paddingTop": theme.spacing(13),
            "paddingBottom": theme.spacing(13),
            "gap": theme.spacing(3)
        }
    })
})