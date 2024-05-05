import { memo, useRef } from "react";
import { tss } from "tss";
import type { Link } from "tools/link";
import Typography from "@mui/material/Typography";
import { Logo } from "components/Logo";
import bulletPointSvg from "assets/svg/pink-glitter.svg";


export type MenuLinkProps = Link & {
    className?: string;
    classes?: {
        link?: string;
        underline?: string;
    };
    isActive: boolean;
    variants: "primary" | "secondary"
};





export const MenuLink = memo((props: MenuLinkProps) => {
    const { href, label, onClick, className, isActive, variants } = props;
    const { classes, cx, theme } = useStyles({ isActive, variants, "classesOverrides": props.classes })
    const ref = useRef<HTMLDivElement>(null);


    return <div
        className={cx(classes.root, className)}
        ref={ref}
        role="menuitem"
    >
        <a
            href={href}
            onClick={onClick}
            className={classes.link}
        >
            <Logo
                className={classes.bulletPoint}
                logoUrl={bulletPointSvg}
                width={parseInt(theme.spacing(3))}
                height={parseInt(theme.spacing(3))}
                fill={
                    (() => {
                        switch (variants) {
                            case "primary": return theme.palette.lightOrange.main;
                            case "secondary": return theme.palette.pink.main;
                        }
                    })()
                }
            />

            <Typography
                variant={(() => {
                    switch (variants) {
                        case "primary": return "menu";
                        case "secondary": return "label";
                    }
                })()}
                className={classes.text}
            >
                {label}
            </Typography>

        </a>
    </div>

})

const useStyles = tss
    .withNestedSelectors<"text" | "bulletPoint">()
    .withParams<{ isActive: boolean; variants: MenuLinkProps["variants"] }>()
    .create(({ classes, theme, isActive, variants }) => {
        const hoverColor = (() => {
            switch (variants) {
                case "primary": return theme.palette.lightOrange.main;
                case "secondary": return theme.palette.pink.main;
            }
        })()
        return ({

            "root": {
                "position": "relative",

            },
            "link": {
                "display": "flex",
                "alignItems": "center",
                "textDecoration": "none",
                [`&:hover .${classes.text}`]: {
                    "color": hoverColor
                },
                [`&:hover .${classes.bulletPoint}`]: {
                    "opacity": 1,
                }

            },
            "text": {
                "transition": "color 500ms",
                "color": !isActive ? undefined : hoverColor,
                "marginLeft": (()=>{
                    switch(variants){
                        case "primary": return theme.spacing(4);
                        case "secondary": return theme.spacing(3);
                    }
                })()
            },
            "bulletPoint": {
                "opacity": 0,
                "transition": "opacity 500ms"

            }
        })

    })


