import { useRef, useMemo, useEffect } from 'react';
import { useConstCallback } from "powerhooks";
import { tss } from "tss";
import { useDomRect } from "powerhooks/useDomRect";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";
import ArrowIcon from 'assets/svg/icons/arrows/arrow-white.svg';
import { ReactSVG } from "react-svg";
import { SliderCard } from "components/SliderCard";
import type { SliderCardProps } from "components/SliderCard";


export type DraggableSliderProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    startingPercentage?: number;
    slides: SliderCardProps[];
};

export const DraggableSlider = (props: DraggableSliderProps) => {
    const { slides, className, startingPercentage = 0 } = props;
    const trackRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    //const percentageBarRef = useRef<HTMLDivElement>(null);

    const { ref: slideRef, domRect: { width: slideWidth } } = useDomRect()

    const { classes, cx, theme } = useStyles({
        "numberOfSlides": slides.length,
        slideWidth,
        "classesOverrides": props.classes,

    });


    const animate = useConstCallback((nextPercentage: number) => {
        if (trackRef.current === null) {
            return;
        };

        trackRef.current.style.transform = `translate(${nextPercentage}%)`;

    });

    useEffect(() => {
        if (!trackRef.current || startingPercentage === undefined) {
            return;
        }
        trackRef.current.dataset.percentage = `-${startingPercentage}`;
        trackRef.current.dataset.prevPercentage = `-${startingPercentage}`;
        animate(-startingPercentage);

    }, [animate, startingPercentage])

    const navigateFactory = useCallbackFactory((
        [direction]: ["back" | "forwards"]
    ) => {
        if (!trackRef.current) {
            return;
        }
        const percentage = parseFloat(trackRef.current.dataset.percentage ?? "0");
        if (direction === "back" && (percentage === 0 || percentage === undefined)) {
            return;
        }
        if (direction === "forwards" && percentage <= -100) {
            return;
        }


        const getNextPercentage = () => {
            switch (direction) {
                case "back": return (() => {
                    if (percentage + 100 / 3 > 0) {
                        return 0;
                    }
                    return percentage + 100 / 3;
                })()
                case "forwards": return (() => {
                    if (percentage - 100 / 3 < -100) {
                        return - 100;
                    }
                    return percentage - 100 / 3;
                })();
            };
        };
        const nextPercentage = getNextPercentage();

        trackRef.current.dataset.percentage = nextPercentage.toString();
        trackRef.current.dataset.prevPercentage = nextPercentage.toString();

        animate(nextPercentage);

    })

    const nextPercentageFactor = useMemo(() => {
        if (window.innerWidth < theme.breakpoints.values.md && window.innerWidth >= theme.breakpoints.values.sm) {
            return 2;
        }

        if (window.innerWidth < theme.breakpoints.values.sm) {
            return 4;
        };

        return 1;

    }, [window.innerWidth])


    const handleOnDown = useConstCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
        if (!trackRef.current) {
            return;
        }
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        trackRef.current.dataset.mouseDownAt = `${clientX}`;
    });

    const handleOnUp = useConstCallback(() => {
        if (!trackRef.current) {
            return;
        }
        trackRef.current.dataset.mouseDownAt = "0";
        trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage || "0";
    });

    const handleOnMove = useConstCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
        if (!trackRef.current || trackRef.current.dataset.mouseDownAt === "0" || trackRef.current.dataset.mouseDownAt === undefined) {
            return;
        }


        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100;
        const prevPercentage = parseFloat(trackRef.current.dataset.prevPercentage || "0");
        const nextPercentageUnconstrained = prevPercentage + percentage / nextPercentageFactor;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        trackRef.current.dataset.percentage = `${nextPercentage}`;
        animate(nextPercentage);

    });



    return (
        <div className={cx(classes.root, className)}>

            <div className={classes.arrows}>
                <div
                    className={classes.arrowWrapper}
                    onClick={navigateFactory("forwards")}
                >
                    <ReactSVG
                        src={ArrowIcon}
                        className={cx(classes.arrow, classes.back)}
                    />

                </div>
                <div
                    className={cx(classes.arrowWrapper, classes.arrowWrapperForwards)}
                    onClick={navigateFactory("back")}
                >

                    <ReactSVG
                        src={ArrowIcon}
                        className={cx(classes.arrow, classes.forwards)}
                    />
                </div>
            </div>

            <div
                ref={carouselRef}
                className={classes.carousel}
                onMouseDown={handleOnDown}
                onMouseUp={handleOnUp}
                onMouseMove={handleOnMove}
                onTouchStart={handleOnDown}
                onTouchEnd={handleOnUp}
                onTouchMove={handleOnMove}
                onTouchCancel={handleOnUp}
                onMouseLeave={handleOnUp}
            >
                <div
                    className={classes.track}
                    ref={trackRef}
                >
                    {
                        slides.map((slide, index) => <div ref={index === 0 ? slideRef : undefined} key={index} className={classes.slide}>
                            <SliderCard
                                {...slide}
                            />
                        </div>)
                    }
                </div>

            </div>

        </div>
    );
};


const useStyles = tss.withParams<{ numberOfSlides: number; slideWidth: number; }>().create(({ theme, numberOfSlides, slideWidth }) => {
    const gap = 50;
    return ({
        "root": {
        },
        "carousel": {
            "width": "100vw",
            "position": "relative",
            "overflow": "hidden",
            "paddingBottom": 60
        },
        "arrows": {
            "display": "flex",
            "marginBottom": theme.spacing(13),
            "justifyContent": "flex-end",

        },
        "arrowWrapper": {

            "cursor": "pointer",
            "transition": "border-color 400ms",
            ":hover": {
                "borderColor": theme.palette.white.main
            },

            "border": "solid transparent 1px",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "padding": 35,
            "borderRadius": "50%",
            "boxSizing": "border-box"
        },
        "arrowWrapperForwards": {
            "position": "relative",
            "right": 20

        },
        "arrow": {
            "& svg": {
                "width": 25,
                "height": 25
            }
        },
        "back": {
            "transform": "rotate(-135deg)",
            "position": "relative",
            "bottom": 2
        },
        "forwards": {
            "transform": "rotate(45deg)"

        },
        "track": {
            "display": "flex",
            "flexWrap": "nowrap",
            "position": "relative",
            "left": "50%",
            "transition": "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
            "userSelect": "none",
            "cursor": "grab",
            gap,
            ":active": {
                "cursor": "grabbing"

            },
            "width": slideWidth * numberOfSlides + (() => {
                if (numberOfSlides === 1) {
                    return 0;
                }
                if (numberOfSlides === 2) {
                    return gap;
                }
                return (numberOfSlides - 1) * gap
            })()
        },
        "slide": {
            "position": "relative",
            "display": "flex",
            "flexDirection": "column",
            "flex": "0 0 auto"

        },
    })
})