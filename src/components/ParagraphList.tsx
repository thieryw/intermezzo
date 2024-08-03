import { memo } from "react";
import { tss } from "tss";
import { SwipeSlider } from "components/SwipeSlider";
import type { SwipeSliderProps } from "components/SwipeSlider";
import Typography from "@mui/material/Typography";

export type ParagraphListProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    paragraphs: SwipeSliderProps["slides"];
}

export const ParagraphList = memo((props: ParagraphListProps) => {
    const { paragraphs, className } = props;
    const {classes, cx, theme, windowInnerWidth} = useStyles();
    return <div className={cx(classes.root, className)}>

        {
            (()=>{
                if(windowInnerWidth < theme.breakpoints.values.sm){
                    return <SwipeSlider 
                        slides={paragraphs}
                    />
                }

                return <div className={classes.paragraphs}>
                    <div className={classes.inner}>
                        {
                            paragraphs.map(({paragraph, title}, index) => <div className={classes.paragraphWrapper} key={index}>
                                <Typography className={classes.title} variant="highLight3">{title}</Typography>
                                <Typography className={classes.paragraph} variant="paragraph1">{paragraph}</Typography>
                            </div>)
                        }

                    </div>

                </div>
            })()
        }


    </div>
})

const useStyles = tss.withName("ParagraphList").create(({theme})=>{
    return ({
        "root": {
            "position": "relative"
        },
        "paragraphs": {
            ...(()=>{
                const value = theme.spacing(10);
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }
            })()
        },
        "inner": {

            "display": "grid",
            "gridTemplateColumns": "repeat(5, 1fr)",
            "backgroundColor": theme.palette.lightOrange.main,
            ...(()=>{
                const rightLeft = theme.spacing(7);
                const topBottom = theme.spacing(12);
                return {
                    "paddingRight": rightLeft,
                    "paddingLeft": rightLeft,
                    "paddingTop": topBottom,
                    "paddingBottom": topBottom
                }
            })(),
            "borderRadius": theme.spacing(11),
            [theme.breakpoints.down("lg")]: {
                "gridTemplateColumns": "repeat(3, 1fr)"
            },
            [theme.breakpoints.down("md")]: {
                "gridTemplateColumns": "repeat(2, 1fr)"
            }
        },
        "paragraph": {},
        "paragraphWrapper": {
            "margin": theme.spacing(3)
        },
        "title": {
            "marginBottom": theme.spacing(3)
        },
    })
})
