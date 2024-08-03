import { memo, useEffect, useState } from "react";
import { tss } from "tss";
import useCarousel from "embla-carousel-react";
import Typography from "@mui/material/Typography";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";

export type SwipeSliderProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    slides: {
        title: string;
        paragraph: string;
    }[]
};


export const SwipeSlider = memo((props: SwipeSliderProps) => {
    const { slides, className } = props;
    const [sliderRef, sliderApi] = useCarousel({
        "loop": true
    });
    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        if (sliderApi === undefined) {
            return;
        }
        sliderApi.on("select", () => {
            setCurrentSlide(sliderApi.selectedScrollSnap())
        })

    }, [sliderApi])

    const handleDotClick = useCallbackFactory((
        [index]: [number]
    )=>{
        if(sliderApi === undefined){
            return;
        }

        setCurrentSlide(index);
        sliderApi?.scrollTo(index);

    })
    const { classes, cx, theme } = useStyles({
        "classesOverrides": props.classes
    })
    return <div className={cx(classes.root, className)}>
        <div className={classes.viewport} ref={sliderRef}>
            <div className={classes.container}>
                {
                    slides.map(({ paragraph, title }, index) => (
                        <div
                            key={index}
                            className={classes.slide}
                        >
                            <Typography
                                variant="highLight3"
                                className={classes.title}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="paragraph1"
                                className={classes.paragraph}
                            >
                                {paragraph}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className={classes.dots}>
            {
                slides.map((_, index) => <div
                    onClick={handleDotClick(index)}
                    className={classes.dot}
                    key={index}
                    style={{
                        "backgroundColor": currentSlide === index ? theme.palette.darkGray.main : undefined,
                        "opacity": 0.7

                    }}
                ></div>)
            }
        </div>


    </div>
})

const useStyles = tss.withName("SwipeSlider").create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "boxSizing": "border-box",
            ...(() => {
                const value = theme.spacing(4);
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),

        },
        "viewport": {
            "overflow": "hidden",
            "userSelect": "none",
            "width": 343,
            "height": 367,
            "maxWidth": "100vw",
            "maxHeight": `${367 / (343 / 100)}vw`
        },
        "container": {
            "display": "flex",
            "alignItems": "center",
            "height": "100%"
        },
        "slide": {
            "minWidth": "100%",
            "height": "100%",
            "borderRadius": "50px",
            "backgroundColor": theme.palette.lightOrange.main,
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center",
            "overflow": "hidden",
            "boxSizing": "border-box",
            "& > p": {
                "textAlign": "center"
            },
            ...(() => {
                const value = 29;
                const marginValue = 7;
                return {
                    "paddingLeft": value,
                    "paddingRight": value,
                    "marginLeft": marginValue,
                    "marginRight": marginValue
                }
            })()
        },
        "title": {
            "marginBottom": 50

        },
        "paragraph": {
            "textAlign": "center"

        },
        "dots": {
            "display": "flex",
            "marginTop": 51
        },
        "dot": {
            "width": 12,
            "height": 12,
            "borderRadius": "50%",
            "backgroundColor": theme.palette.lightGray.main,
            "transition": "background-color 500ms",
            ":hover": {
                "cursor": "pointer"
            },
            ...(()=>{
                const value = 12;
                return {
                    "marginLeft": value,
                    "marginRight": value
                }
            })()
        }

    })
})