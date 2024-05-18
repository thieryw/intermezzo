import { memo } from "react";
import type { Link } from "../tools/link";
import { tss } from "tss";
import { useDomRect } from "powerhooks/useDomRect";
import Typography from "@mui/material/Typography";


export type LinkButtonProps = Link & {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    variant?: "filled" | "outlined";
    openInNewTab?: boolean;
}





export const LinkButton = memo((props: LinkButtonProps) => {
    const { href, label, onClick, className, variant, openInNewTab = false } = props;
    const { ref, domRect: { height } } = useDomRect();
    const { classes, cx } = useStyles({
        "variant": variant ?? "outlined",
        "textHeight": height,
        "classesOverrides": props.classes
    });
    return <a className={cx(classes.root, className)} onClick={onClick} href={href} {...openInNewTab ? {"target": "_blank"}: {}}>
        <div className={classes.inner}>

            <div className={classes.textWrapper}>
                <div ref={ref}>
                    <Typography className={classes.linkLabel} variant="button">{label}</Typography>
                </div>
                <Typography className={classes.linkLabel} variant="button">{label}</Typography>
            </div>
        </div>
    </a>
});

const useStyles = tss.withParams<Required<Pick<LinkButtonProps, "variant">> & { textHeight: number }>().withNestedSelectors<"linkLabel">().create(({ theme, classes, variant, textHeight }) => ({
    "root": {
        "textDecoration": "none",
    },
    "textWrapper": {
        "height": textHeight,
        "overflow": "hidden"

    },
    "inner": {
        ...(() => {
            const topBottom = 25;
            const leftRight = 62;
            return {
                "paddingLeft": leftRight,
                "paddingRight": leftRight,
                "paddingTop": topBottom,
                "paddingBottom": topBottom
            }

        })(),
        "border": `solid ${theme.palette.darkGray} 1px`,
        "backgroundColor": (() => {
            switch (variant) {
                case "filled": return theme.palette.background.default;
                case "outlined": return undefined;
            }

        })(),
        [`&:hover .${classes.linkLabel}`]: {
            "transform": `translateY(${-textHeight}px)`

        },

    },
    "linkLabel": {
        "color": (() => {
            switch (variant) {
                case "filled": return theme.palette.white.main;
                case "outlined": return theme.palette.purple.main;
            }

        })(),
        "textTransform": "uppercase",
        "marginBlock": 0,
        "transition": "transform 500ms",
    }

}))