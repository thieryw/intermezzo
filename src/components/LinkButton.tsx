import { memo } from "react";
import type { Link } from "../tools/link";
import { tss } from "tss";
import { useDomRect } from "powerhooks/useDomRect";
import Typography from "@mui/material/Typography";


export type LinkButtonProps = Link & {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    variant?: "filled" | "outlinedLight" | "outlinedDark";
    openInNewTab?: boolean;
}





export const LinkButton = memo((props: LinkButtonProps) => {
    const { href, label, onClick, className, variant, openInNewTab = false } = props;
    const { ref, domRect: { height } } = useDomRect();
    const { classes, cx } = useStyles({
        "variant": variant ?? "outlinedDark",
        "textHeight": height,
        "classesOverrides": props.classes
    });
    return <a className={cx(classes.root, className)} onClick={onClick} href={href} {...openInNewTab ? {"target": "_blank"}: {}}>
        <div className={classes.inner}>

            <div className={classes.textWrapper}>
                <div ref={ref}>
                    <Typography className={classes.linkLabel} variant="paragraph1">{label}</Typography>
                </div>
                <Typography className={classes.linkLabel} variant="paragraph1">{label}</Typography>
            </div>
        </div>
    </a>
});

const useStyles = tss.withParams<Required<Pick<LinkButtonProps, "variant">> & { textHeight: number }>().withNestedSelectors<"linkLabel">().create(({ theme, classes, variant, textHeight }) => ({
    "root": {
        "textDecoration": "none",
        "position": "relative"
    },
    "textWrapper": {
        "height": textHeight,
        "overflow": "hidden"

    },
    "inner": {
        ...(() => {
            const topBottom = theme.spacing(3);
            const leftRight = theme.spacing(7);
            return {
                "paddingLeft": leftRight,
                "paddingRight": leftRight,
                "paddingTop": topBottom,
                "paddingBottom": topBottom
            }

        })(),
        "boxSizing": "border-box",
        ...(()=>{
            switch(variant){
                case "filled": return {};
                case "outlinedDark": return {
                    "border": `solid ${theme.palette.purple.main} 1px`
                };
                case "outlinedLight": return {
                    "border": `solid ${theme.palette.white.main} 1px`,

                }
            }
        })(),
        "backgroundColor": (() => {
            switch (variant) {
                case "filled": return theme.palette.lightOrange.main;
                default: return undefined;
            }

        })(),
        [`&:hover .${classes.linkLabel}`]: {
            "transform": `translateY(${-textHeight}px)`,
        },
        "borderRadius": "50px"

    },
    "linkLabel": {
        "color": (() => {
            switch (variant) {
                case "filled": return theme.palette.white.main;
                case "outlinedDark": return theme.palette.purple.main;
                case "outlinedLight": return theme.palette.white.main;
            }

        })(),
        "marginBlock": 0,
        "transition": "transform 500ms",
        "textAlign": "center"
    }

}))