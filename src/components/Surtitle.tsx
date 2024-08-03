import { memo } from "react";
import { tss } from "tss";
import starSvg from "assets/svg/pink-glitter.svg";
import Typography from "@mui/material/Typography";
import { ReactSVG } from "react-svg";





export type SurtitleProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    surtitle: string;
}


export const Surtitle = memo((props: SurtitleProps) => {
    const { surtitle, className } = props;
    const { classes, cx } = useStyles();
    return <div className={cx(classes.root, className)}>
        <ReactSVG 
            className={classes.star}
            src={starSvg}
        />
        <Typography className={classes.surtitle} variant="label">{surtitle}</Typography>
    </div>
})

const useStyles = tss.withName("Surtitle").create(({theme}) => {
    return ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            [theme.breakpoints.down("md")]: {
                "flexDirection": "column",
                "alignItems": "center"
            }
        },
        "star": {
            "& svg": {
                "fill": theme.palette.lightOrange.main,
                "width": theme.spacing(3),
                "height": theme.spacing(3),
            },
            "marginRight": theme.spacing(3),
            [theme.breakpoints.down("md")]: {
                "marginRight": 0,
                "marginBottom": theme.spacing(3)
            }
        },
        "surtitle": {}
    })
})