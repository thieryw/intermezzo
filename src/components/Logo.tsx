import { ReactSVG } from "react-svg";
import { memo } from "react";
import { tss } from "tss";

type LogoProps = {
    logoUrl: string;
    className?: string;
    fill?: string;
    width?: number;
    height?: number;
};

export const Logo = memo((props: LogoProps) => {
    const { className, logoUrl, fill, height, width } = props;

    const { classes, cx } = useStyles({ fill, width, height });

    return <ReactSVG
        src={logoUrl}
        className={cx(classes.root, classes.svg, className)}
    />
});

const useStyles = tss
    .withName({ Logo })
    .withParams<{
        fill: string | undefined;
        width: number | undefined;
        height: number | undefined;
    }>()
    .create(({ theme, fill, height, width }) => ({
        "root": {
            width,
            height,
        },
        "svg": {
            "& svg": {
                "fill": fill ?? theme.palette.lightOrange.main,
                "width": "100%",
                "height": "100%",
            },
        },
    }));