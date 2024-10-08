import { memo, useRef } from "react";
import { tss } from "tss";
import { useContext } from "theme"
import { PictureAnimator } from "components/PictureAnimator";
import { LinkButton } from "components/LinkButton"
import Typography from "@mui/material/Typography";
import { Surtitle } from "components/Surtitle";
import type { LinkButtonProps } from "components/LinkButton";

export type PortraitGalleryProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    images: {
        src: string;
        alt?: string;
        sources?: {
            srcSet: string;
            type: string;
        }[]
    }[];
    surtitle: string;
    title: string;
    highlight: string;
    button?: LinkButtonProps;
    mobilePictures: {
        src: string;
        alt?: string;
        sources?: {
            srcSet: string;
            type: string;

        }[]
    }[]
};

export const PortraitGallery = memo((props: PortraitGalleryProps) => {
    const { button, highlight, images, surtitle, title, className, mobilePictures } = props
    const { theme } = useContext()
    const widthLargeRef = useRef(theme.spacing(67));
    const widthRef = useRef(theme.spacing(49));
    const heightRef = useRef(theme.spacing(49));
    const { classes, cx, windowInnerWidth } = useStyles({
        "classesOverrides": props.classes,
        "columnWidth": parseInt(widthRef.current),
        "largeColumnWidth": parseInt(widthLargeRef.current)
    });



    function getImageDim(isLarge: boolean): {
        width: number;
        height: number;
    } {
        if (windowInnerWidth >= theme.breakpoints.values.lg) {
            return {
                "width": parseInt(isLarge ? widthLargeRef.current : widthRef.current),
                "height": parseInt(heightRef.current),
            }
        }

        return {
            "width": isLarge ? windowInnerWidth / 100 * 36 : windowInnerWidth / 100 * 27,
            "height": windowInnerWidth / 100 * 19
        }



    }



    return <div className={cx(classes.root, className)}>
        {
            (() => {
                if (windowInnerWidth < theme.breakpoints.values.md) {
                    return <div className={classes.mobileWrapper}>
                        <Surtitle
                            surtitle={surtitle}
                            className={classes.mobileSurtitle}
                        />
                        <div className={classes.mobileTitleWrapper}>
                            <Typography className={classes.mobileTitle} variant="heading2">{title}</Typography>
                            <Typography className={classes.mobileTitle} variant="highLight2">{highlight}</Typography>
                        </div>
                        <div style={{
                            ...(() => {
                                if (mobilePictures.length < 2) {
                                    return {}
                                }
                                return {
                                    "paddingLeft": theme.spacing(5),
                                    "paddingRight": theme.spacing(5),
                                    "position": "relative",
                                    "boxSizing": "border-box",
                                    "width": "100vw"
                                }
                            })()
                        }} className={classes.mobilePictureWrapper}
                        >
                            {
                                ...mobilePictures.map((picture, index) => <PictureAnimator
                                    {
                                    ...picture
                                    }
                                    width={400}
                                    height={400 / 3 * 2.1}
                                    borderRadius={mobilePictures.length > 1 ? "30px" : "0px"}
                                    key={index}
                                    className={classes.pictureMobile}
                                />)
                            }
                        </div>
                        {
                            button !== undefined &&
                            <LinkButton
                                {...button}
                            />
                        }
                    </div>
                }

                return <div className={classes.gallery}>
                    {
                        images.slice(0, 3).map((images, index) => <PictureAnimator
                            {...images}
                            key={index}
                            {...getImageDim(index === 1)}
                            borderRadius={theme.spacing(8)}

                        />)
                    }
                    <PictureAnimator
                        borderRadius={theme.spacing(8)}
                        {...getImageDim(false)}
                        {
                        ...images[3]
                        }
                    />
                    <div className={classes.titleWrapper}>
                        <div className={classes.titleInner}>
                            <Surtitle
                                surtitle={surtitle}
                                className={classes.surtitle}
                            />
                            <div>
                                <Typography variant="heading2">{title}</Typography>
                                <Typography variant="highLight2">{highlight}</Typography>
                            </div>

                        </div>

                    </div>
                    <PictureAnimator
                        borderRadius={theme.spacing(8)}
                        {...getImageDim(false)}
                        {
                        ...images[4]
                        }
                    />
                    {
                        images.slice(5, 8).map((images, index) => <PictureAnimator
                            {...images}
                            {...getImageDim(index === 1)}
                            key={index}
                            borderRadius={theme.spacing(8)}

                        />)
                    }

                </div>
            })()
        }
        {
            (windowInnerWidth >= theme.breakpoints.values.md && button !== undefined) &&
            <LinkButton
                className={classes.button}
                {...button}
                variant="outlinedDark"
            />
        }

    </div>
});

const useStyles = tss.withName("PortraitGallery").withParams<{ columnWidth: number; largeColumnWidth: number; }>().create(({ theme, columnWidth, largeColumnWidth }) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",

        },
        "button": {
            "marginTop": theme.spacing(13)


        },
        "gallery": {
            "display": "grid",
            "gridTemplateColumns": `${columnWidth}px ${largeColumnWidth}px ${columnWidth}px`,
            "gap": theme.spacing(5),
            "justifyContent": "center",
            [theme.breakpoints.down("lg")]: {
                //"gridTemplateColumns" "27vw 36vw 27vw"
                "gridTemplateColumns": "27vw 36vw 27vw"
            }
        },
        "titleWrapper": {
            "display": "flex",
            "justifyContent": "center"
        },
        "titleInner": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",


        },
        "surtitle": {
            "marginBottom": theme.spacing(5)

        },
        "mobileWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "justifyContent": "center"
        },
        "mobileSurtitle": {
            "marginBottom": 50
        },
        "mobileTitleWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            ...(() => {
                const value = theme.spacing(5);
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),
            "marginBottom": theme.spacing(10)

        },
        "mobileTitle": {
            "textAlign": "center",
        },
        "mobilePictureWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
        },
        "pictureMobile": {
            "marginBottom": theme.spacing(10)
        }
    })
})