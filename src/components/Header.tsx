import { useState, memo, useRef, useEffect } from 'react';
import type { ReactNode } from "react";
import { tss } from "tss";
import { useConstCallback } from "powerhooks/useConstCallback";
import { Logo } from "./Logo";
import type { Link } from "../tools/link";
import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { getScrollableParent } from "powerhooks/getScrollableParent";
import type { LinkButtonProps } from "./LinkButton";
import {MenuLink} from "./MenuLink";
import Typography from "@mui/material/Typography";


const linksVariants: Variants = {
    "hidden": {
        "opacity": 1
    },
    "visible": {
        "opacity": 1,
        "transition": {
            "staggerChildren": 0.1,
            "delay": 1.2
        }

    }
}

const linkVariants: Variants = {
    "hidden": {
        "y": "100%"
    },
    "visible": {
        "y": 0
    }
}

const buttonVariants: Variants = {
    "hidden": {
        "opacity": 0
    },
    "visible": {
        "opacity": 1
    }

}
const logoVariants: Variants = {
    "hidden": {
        "opacity": 0,
        "scale": 0.8
    },
    "visible": {
        "opacity": 1,
        "scale": 1

    }
}

const socialLinksVariants: Variants = {
    "hidden": {
        "opacity": 1
    },
    "visible": {
        "opacity": 1,
        "transition": {
            "delay": 1.8,
            "staggerChildren": 0.1
        }
    }
}
const socialLinkVariants: Variants = {
    "hidden": {
        "x": "-100%"
    },
    "visible": {
        "x": 0
    }
}


export type HeaderProps = {
    links: Link[];
    currentLinkLabel?: string;
    logo?: ReactNode;
    contact?: ReactNode;
    smallPrint?: ReactNode;
    buttonLink?: LinkButtonProps;
    logoLinks?: ({
        logo: ReactNode;
    } & Link)[],
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
}

export function Header(props: HeaderProps) {
    const { links, className, logoLinks, currentLinkLabel, logo, contact, smallPrint, buttonLink } = props;
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isOpen) {
            controls.start("visible");
            return;
        };
        controls.start("hidden")

    }, [isOpen, controls])



    const toggleMenu = useConstCallback(() => {
        setIsOpen(!isOpen);
    })

    const handleMenuItemClick = useConstCallback(() => {
        setIsOpen(false);
    })

    const { classes, cx, theme } = useStyles({ isOpen, "classesOverrides": props.classes });


    return (
        <header className={cx(classes.root, className)}>
            <div className={classes.buttonWrapper}>
                {
                    (() => {
                        if (window.innerWidth < theme.breakpoints.values.sm) {
                            return undefined
                        }
                        return <>
                            {
                                buttonLink !== undefined &&
                                <motion.div
                                    initial="hidden"
                                    variants={buttonVariants}
                                    animate={controls}
                                    transition={{
                                        "ease": "easeInOut",
                                        "duration": 0.9,
                                        "delay": 1.4
                                    }}
                                >
                                    <a href={buttonLink.href}
                                        className={classes.linkButton}
                                    >

                                        <Typography
                                            variant="paragraph1Purple"
                                        >
                                            {buttonLink.label}

                                        </Typography>
                                    </a>
                                </motion.div>

                            }
                        </>
                    })()

                }
                <ToggleMenuButton
                    isActive={isOpen}
                    onClick={toggleMenu}
                    className={classes.toggleMenuButton}
                />

            </div>
            <div className={classes.menu} role="menu">

                <div className={classes.menuInner}>

                    {
                        (() => {
                            if (window.innerWidth < theme.breakpoints.values.sm) {
                                return undefined;
                            }
                            return <div className={classes.contactWrapper}>

                                {
                                    logo !== undefined &&
                                    <motion.div
                                        initial="hidden"
                                        variants={logoVariants}
                                        animate={controls}
                                        transition={{
                                            "ease": "easeInOut",
                                            "delay": 0.9,
                                            "duration": 0.8
                                        }}
                                    >
                                        {
                                            typeof logo === "string" ?
                                                <Logo width={119} logoUrl={logo} /> :
                                                logo
                                        }
                                    </motion.div>
                                }
                                {

                                    contact !== undefined &&
                                    <motion.div
                                        className={classes.contact}
                                        initial="hidden"
                                        variants={buttonVariants}
                                        animate={controls}
                                        transition={{
                                            "ease": "easeInOut",
                                            "delay": 0.7,
                                            "duration": 0.9
                                        }}

                                    >
                                        {
                                            contact
                                        }
                                    </motion.div>
                                }

                                {
                                    logoLinks !== undefined &&
                                    <motion.div
                                        className={classes.logoLinks}
                                        initial="hidden"
                                        animate={controls}
                                        variants={socialLinksVariants}
                                    >
                                        {
                                            logoLinks.map(({ logo, label, ...rest }, index) => <div
                                                className={classes.logoLink}
                                                key={label}
                                                style={{
                                                    "overflow": "hidden",
                                                    "marginRight": index === logoLinks.length - 1 ? undefined : theme.spacing(6),
                                                }}
                                            >
                                                <motion.div
                                                    variants={socialLinkVariants}
                                                    transition={{
                                                        "ease": "easeInOut",
                                                        "duration": 0.8
                                                    }}
                                                >
                                                    <a
                                                        {...rest}
                                                        aria-label={label}
                                                    >{typeof logo === "string" ?
                                                        <Logo width={62} logoUrl={logo} /> :
                                                        logo
                                                        }
                                                    </a>
                                                </motion.div>
                                            </div>)
                                        }
                                    </motion.div>
                                }
                                {
                                    smallPrint !== undefined &&
                                    <motion.div
                                        initial="hidden"
                                        variants={buttonVariants}
                                        animate={controls}
                                        transition={{
                                            "ease": "easeInOut",
                                            "duration": 0.9,
                                            "delay": 0.8
                                        }}
                                        onClick={handleMenuItemClick}
                                    >
                                        {smallPrint}
                                    </motion.div>

                                }


                            </div>
                        })()
                    }
                    <div className={classes.mobileWrapper}>
                        {
                            (() => {
                                if (logo === undefined || window.innerWidth >= theme.breakpoints.values.sm) {
                                    return undefined;
                                }
                                return <div className={classes.mobileLogoWrapper}>
                                    {
                                        typeof logo === "string" ?
                                            <Logo width={90} logoUrl={logo} /> :
                                            logo
                                    }
                                </div>


                            })()
                        }

                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={linksVariants}
                            className={classes.linksWrapper}
                        >
                            {
                                links.map(({ href, label, onClick }, index) => <div
                                    onClick={handleMenuItemClick}
                                    key={label}
                                    style={{
                                        "marginBottom": index === links.length - 1 ? undefined : theme.spacing(8),
                                        "overflow": "hidden"
                                    }}
                                >
                                    <motion.div
                                        variants={linkVariants}
                                        transition={{
                                            "ease": "easeInOut",
                                            "duration": 0.9
                                        }}

                                    >
                                        <MenuLink
                                            variants="primary"
                                            key={label}
                                            href={href}
                                            onClick={onClick}
                                            label={label}
                                            isActive={label === currentLinkLabel}
                                        />

                                    </motion.div>
                                </div>)
                            }

                        </motion.div>

                        {
                            (() => {
                                if (logoLinks === undefined || window.innerWidth >= theme.breakpoints.values.sm) {
                                    return undefined;
                                }
                                return <div className={classes.logoLinks}>
                                    {
                                        logoLinks.map(({ logo, label, ...rest }, index) => <a
                                            key={label}
                                            {...rest}
                                            aria-label={label}
                                            style={{
                                                "marginRight": index === logoLinks.length - 1 ? undefined : theme.spacing(6)

                                            }}
                                        >{typeof logo === "string" ?
                                            <Logo width={62} logoUrl={logo} /> :
                                            logo
                                            }
                                        </a>)
                                    }
                                </div>
                            })()
                        }
                        {
                            (() => {
                                if (smallPrint === undefined || window.innerWidth >= theme.breakpoints.values.sm) {
                                    return undefined;
                                }
                                return <div onClick={handleMenuItemClick}>
                                    {smallPrint}
                                </div>
                            })()
                        }

                    </div>
                </div>

            </div>

        </header>
    );
}



const useStyles = tss.withParams<{ isOpen: boolean }>().create(({ isOpen, theme }) => {
    const transitionTime = 600;
    return ({
        "root": {
            "position": "relative",
            "top": 0,
            "left": 0,
            ...(() => {
                if (window.innerWidth < theme.breakpoints.values.sm) {
                    return {
                        "width": "100vw"

                    }
                }
                return {
                    "width": "100%",

                }
            })(),

        },
        "logoLink": {
            "transition": "transform 600ms",
            ":hover": {
                "transform": "scale(1.1)",
            },

        },
        "mobileWrapper": {
            ...(() => {
                if (window.innerWidth < theme.breakpoints.values.sm) {
                    return {
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "flex-start",
                        "paddingLeft": 25,
                        "position": "absolute",
                        "top": 0,
                        "left": 0

                    }
                }
                return {

                }
            })()

        },
        "buttonWrapper": {
            "position": "absolute",
            "top": 0,
            "right": 0,
            "zIndex": 4002,
            "display": "flex",
            "gap": theme.spacing(4),
            "alignItems": "center",
            "paddingTop": theme.spacing(7),
            "paddingRight": theme.spacing(21)

        },
        "toggleMenuButton": {
        },
        "linkButton": {
            "transition": `opacity ${transitionTime}ms, background-color 300ms`,
            "opacity": isOpen ? 1 : 0,
            "pointerEvents": isOpen ? undefined : "none"


        },
        "logoLinks": {
            "display": "flex",
            "marginTop": theme.spacing(8),
            "marginBottom": theme.spacing(8)
        },
        "mobileLogoWrapper": {
            "marginTop": 20,
            "marginBottom": 60,

        },
        "menuInner": {

            "display": "flex",
            "position": "relative",
            "height": "100%",
        },
        "menu": {
            "position": "fixed",
            "zIndex": 4001,
            "top": 0,
            "left": 0,
            "transition": `height ${transitionTime}ms`,
            "width": "100%",
            "backgroundColor": theme.palette.lightGray.main,
            "overflow": "hidden",
            ...(() => {

                if (window.innerWidth < theme.breakpoints.values.sm) {
                    return {
                        "overflow": "auto"
                    }
                }
                return {
                    "height": isOpen ? "100%" : 0,
                }

            })(),
            /*...(theme.windowInnerWidth > 2000 ? {
                "display": "flex",
                "justifyContent": "center"
            } : {})*/
            [theme.breakpoints.up("xl")]: {
                "display": "flex",
                "justifyContent": "center"
            }
        },
        "contactWrapper": {
            "marginRight": 320,
            "marginLeft": 243,
            "transition": `opacity ${transitionTime}ms`,
            "opacity": isOpen ? 1 : 0,
            "transitionDelay": !isOpen ? undefined : `${transitionTime / 2}ms`

        },
        "contact": {
            "marginTop": theme.spacing(6),

        },
        "linksWrapper": {
            "transition": `opacity ${transitionTime}ms`,
            "opacity": isOpen ? 1 : 0,
            "transitionDelay": !isOpen ? undefined : `${transitionTime / 2}ms`,
            "marginBottom": (() => {
                if (window.innerWidth < theme.breakpoints.values.sm) {
                    return 40;
                }
                return undefined;
            })()

        }

    })
})

const { ToggleMenuButton } = (() => {

    type ToggleMenuButtonProps = {
        onClick: () => void;
        isActive: boolean;
        className?: string;
    };

    const ToggleMenuButton = memo((props: ToggleMenuButtonProps) => {

        const { onClick, className, isActive } = props;
        const handleClick = useConstCallback(() => {
            onClick();
        })
        const { classes, cx } = useStyles({ isActive })
        const ref = useRef<HTMLButtonElement>(null);

        useEffect(() => {
            if (ref.current === null) {
                return;
            }
            const scrollableParent = getScrollableParent({
                "doReturnElementIfScrollable": true,
                "element": ref.current
            })
            function preventScroll() {
                scrollableParent.scrollTo({
                    "top": 0,
                    "behavior": "instant"
                })
            }
            (() => {
                if (!isActive) {
                    return;
                }
                scrollableParent.addEventListener("scroll", preventScroll);
            })()

            return () => scrollableParent.removeEventListener("scroll", preventScroll);


        }, [ref.current, isActive])

        return <button
            ref={ref}
            aria-label="drop down menu button"
            onClick={handleClick}
            className={cx(classes.root, className)}
        >
            <div className={classes.inner}>
                <div className={cx(classes.line, classes.line1)}></div>
                <div className={cx(classes.line, classes.line2)}></div>
                <div className={cx(classes.line, classes.line3)}></div>

            </div>
        </button>

    });

    const useStyles = tss.withParams<{ isActive: boolean }>().create(({ isActive, theme }) => ({
        "root": {
            "backgroundColor": theme.palette.lightOrange.main,
            "border": "none",
            "outline": "none",
            "zIndex": 4001,
            "position": "relative",
            "padding": 20,
            "borderRadius": "100% 100% 0% 100%",
            "cursor": "pointer"
        },
        "inner": {
            "width": 20,
            "height": 20,
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-around",

        },
        "line": {
            "display": "block",
            "height": 2,
            "backgroundColor": theme.palette.white.main,
            "borderRadius": "50%",
            "width": "100%",
            //"background": theme.colors.bloodOrange,
            "transition": "all 0.3s ease"
        },
        "line1": {
            "transform": isActive ? "translateY(7px) rotate(45deg)" : undefined,
        },
        "line2": {
            "opacity": isActive ? 0 : undefined
        },
        "line3": {
            "transform": isActive ? "translateY(-7px) rotate(-45deg)" : undefined

        },

    }))

    return { ToggleMenuButton }
})();