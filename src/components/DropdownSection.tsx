import { memo, useState, useEffect } from "react";
import type { ReactNode } from "react";
import Typo from "@mui/material/Typography";
import { tss } from "tss";
import { useDomRect } from "powerhooks/useDomRect";
import { useConstCallback } from "powerhooks/useConstCallback";
import toggleSvg from "assets/svg/openClose.svg";
import { ReactSVG } from "react-svg";
import { Link } from "tools/link";
import { LinkButton } from "./LinkButton";



export type DropdownSectionProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    isInitiallyOpen?: boolean;
    isStateBlocked?: boolean;
    openMessage?: string;
    closeMessage?: string;
    title?: ReactNode | string;
    aside?: ReactNode;
    media?: ReactNode;
    paragraphTitle?: ReactNode
    paragraphs: {
        title?: string;
        paragraph?: string;
        subtitle?: string;
        media?: ReactNode;
    }[];
    date?: string;
    event?: string;
    button?: Link;

};


export const DropdownSection = memo((props: DropdownSectionProps) => {
    const {
        closeMessage,
        openMessage,
        paragraphs,
        title,
        aside,
        className,
        date,
        event,
        isInitiallyOpen = true,
        isStateBlocked = true,
        media,
        paragraphTitle,
        button


    } = props;

    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    const { ref, domRect: { height: bodyHeight } } = useDomRect();

    useEffect(()=>{
        if(isInitiallyOpen === isOpen){
            return;
        }
        setIsOpen(isInitiallyOpen);

    }, [isStateBlocked])

    const toggleOpen = useConstCallback(()=>{
        if(isStateBlocked){
            return;
        }
        setIsOpen(!isOpen);
    })

    const { classes, cx } = useStyles({
        "classesOverrides": props.classes,
        isOpen,
        bodyHeight
    })

    return <div className={cx(classes.root, className)}>
        {
            title !== undefined &&
            <div onClick={toggleOpen} className={classes.banner}>
                <div className={classes.bannerBackground}>

                </div>
                {
                    (()=>{
                        if(typeof title === "string"){
                            return <Typo className={classes.bannerText} variant="heading1">{title}</Typo>
                        }
                        return title
                    })()
                }
                {
                    (openMessage !== undefined && closeMessage !== undefined && !isStateBlocked) &&
                    <div className={classes.openCloseMessage}>
                        <ReactSVG
                            className={classes.openCloseIcon}
                            src={toggleSvg}
                        />
                        <Typo className={classes.toggleText} variant="paragraph1">{isOpen ? openMessage : closeMessage}</Typo>

                    </div>
                }
            </div>
        }
        <div className={classes.bodyWrapper}>
            <div ref={ref} className={classes.body}>
                {
                    aside !== undefined &&
                    <div className={classes.aside}>
                        {aside}
                    </div>
                }
                <div className={classes.content}>
                    {
                        media !== undefined &&
                        <div className={classes.media}>
                            {media}
                        </div>
                    }
                    <div className={classes.textContent}>
                        {
                            paragraphTitle !== undefined &&
                            <div className={classes.paragraphsTitle}>
                                {
                                    paragraphTitle
                                }

                            </div>
                        }
                        {
                            paragraphs.map(({ media, paragraph, subtitle, title }, index) => <div className={classes.paragraphWrapper} key={index}>
                                {
                                    title !== undefined &&
                                    <Typo className={classes.paragraphTitle} variant="heading3">{title}</Typo>
                                }
                                {
                                    paragraph !== undefined &&
                                    <Typo variant="paragraph1" className={classes.paragraph}>{paragraph}</Typo>
                                }
                                {
                                    subtitle !== undefined &&
                                    <Typo variant="paragraph1" className={classes.subtitle}>{subtitle}</Typo>
                                }
                                {
                                    media !== undefined &&
                                    <div className={classes.paragraphMedia}>{media}</div>
                                }

                            </div>)
                        }
                        <div className={classes.interSectionLine}></div>
                        {
                            (date !== undefined || event !== undefined) &&
                            <div className={classes.dateAndEventWrapper}>
                                {
                                    date !== undefined &&
                                    <Typo className={classes.date} variant="paragraph1">{date}</Typo>
                                }
                                {
                                    event !== undefined &&
                                    <Typo className={classes.event} variant="paragraph1">{event}</Typo>
                                }

                            </div>
                        }

                        {
                            button !== undefined &&
                            <LinkButton 
                                {...button}
                                variant="outlinedDark"
                                className={classes.button}

                            />
                        }



                    </div>

                </div>

            </div>

        </div>



    </div>

})


const useStyles = tss.withName("DropdownSection").withParams<
    { bodyHeight: number; isOpen: boolean; }
>().create(({ theme, isOpen, bodyHeight }) => {
    return ({
        "root": {
            "position": "relative"
        },
        "banner": {
            "position": "relative",
            "paddingTop": theme.spacing(3),
            "paddingBottom": theme.spacing(3),
            "paddingLeft": theme.spacing(31),
            "display": "flex",
            "alignItems": "center",
            "cursor": "pointer",
            [theme.breakpoints.down("mdPlus")]: {
                "paddingLeft": 0,
                "justifyContent": "center"
            },
            [theme.breakpoints.down("md")]: {
                "flexDirection": "column",
                "paddingLeft": theme.spacing(5),
                "paddingRight": theme.spacing(5),
                "alignItems": "flex-start"


            },
            [theme.breakpoints.down("sm")]: {
                "justifyContent": "flex-start",
                "paddingLeft": theme.spacing(5),
            }
        },
        "bannerText": {
            "color": theme.palette.white.main,
            "position": "relative",
            "marginRight": theme.spacing(4),
            [theme.breakpoints.down("md")]: {
                "marginRight": 0,
                "marginBottom": theme.spacing(4)
            }

        },
        "openCloseMessage": {
            "display": "flex",
            "alignItems": "center"
        },
        "openCloseIcon": {
            "width": 13,
            "height": 13,
            "marginRight": theme.spacing(2),
            "& svg": {
                "width": 13,
                "position": "relative",
                "fill": "transparent"
            },
            "display": "flex",
            "alignItems": "center",
            "transform": `rotate(${isOpen ? 0 : 180}deg)`,
            "transition": "transform 300ms"

        },
        "toggleText": {
            "color": theme.palette.white.main,
            "textDecoration": "underline"
        },
        "paragraphWrapper": {
            "marginBottom": theme.spacing(5)

        },
        "bannerBackground": {
            "position": "absolute",
            "width": "100%",
            "height": "100%",
            "top": 0,
            "left": 0,
            "backgroundColor": theme.palette.lightOrange.main
        },
        "bodyWrapper": {
            "height": isOpen ? bodyHeight : 0,
            "overflow": "hidden",
            "transition": "height 800ms"
        },
        "body": {
            ...(() => {
                const topBottom = theme.spacing(19);
                const rightLeft = theme.spacing(5);
                return {
                    "paddingTop": topBottom,
                    "paddingBottom": topBottom,
                    "paddingLeft": rightLeft,
                    "paddingRight": rightLeft
                }
            })(),
            "display": "flex",
            [theme.breakpoints.down("mdPlus")]: {
            },
            "justifyContent": "center",
            "boxSizing": "border-box",
            [theme.breakpoints.down("md")]: {
                "flexDirection": "column-reverse",
                "paddingRight": 0,
                "paddingLeft": 0,
                "paddingTop": 0,
            }
        },
        "interSectionLine": {
            "width": "100vw",
            "position": "relative",
            "right": theme.spacing(5),
            "height": 1,
            "backgroundColor": theme.palette.lightGray.main,
            "marginTop": theme.spacing(2),
            [theme.breakpoints.up("md")]: {
                "display": "none"
            }

        },
        "aside": {
            "minWidth": 220,
            "maxWidth": 220,
            "marginRight": theme.spacing(24),
            [theme.breakpoints.down("mdPlus")]: {
                "marginRight": theme.spacing(5),
            },
            [theme.breakpoints.down("md")]: {
                "paddingLeft": theme.spacing(5),
                "marginRight": 0,
                "marginTop": theme.spacing(10)
            }
        },
        "content": {

            [theme.breakpoints.between("md", "mdPlus")]: {
                "maxWidth": 550
            }
        },
        "media": {
            "marginBottom": theme.spacing(14)
        },
        "textContent": {
            "display": "flex",
            "flexDirection": "column",
            "maxWidth": 780,
            [theme.breakpoints.down("md")]: {
                ...(() => {
                    const value = theme.spacing(5);
                    return {
                        "paddingLeft": value,
                        "paddingRight": value
                    }
                })()
            }
        },
        "paragraphsTitle": {
            "marginBottom": theme.spacing(5)

        },
        "paragraphTitle": {
            "marginBottom": theme.spacing(5)
        },
        "paragraph": {
            "marginBottom": theme.spacing(5)
        },
        "subtitle": {
            "color": theme.palette.pink.main,
            "marginBottom": theme.spacing(5)
        },
        "paragraphMedia": {
            "marginTop": theme.spacing(3),
            "marginBottom": theme.spacing(4)
        },
        "dateAndEventWrapper": {
            "marginTop": theme.spacing(2)
        },
        "date": {
            "color": theme.palette.orange.main,
            "marginBottom": theme.spacing(4)
        },
        "event": {
            "color": theme.palette.orange.main
        },
        "button": {
            "alignSelf": "flex-start",
            "marginTop": theme.spacing(2)

        }
    })
})