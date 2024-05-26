import { memo } from "react";
import { tss } from "tss";
import { Link } from "tools/link";
import { Logo } from "components/Logo";
import Typography from "@mui/material/Typography";


export type CircularButtonProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    circularText?: string;
    logoSvgSrc: string;
} & Partial<Omit<Link, "label">>




export const CircularButton = memo((props: CircularButtonProps) => {
    const { circularText, href, onClick, className, logoSvgSrc } = props
    const { classes, cx } = useStyles();
    return <a href={href} onClick={onClick} className={cx(classes.root, className)}>
        {
            circularText !== undefined &&
            circularText.split("").map((char, index) => <Char index={index} key={index} char={char} />)

        }
        <div className={classes.inner}>
            <Logo
                logoUrl={logoSvgSrc}
                width={58}
                height={58}
            />
        </div>

    </a>
})

const useStyles = tss.withName("CircularButton").create(({ theme }) => {
    return ({
        "root": {
            "width": 230,
            "height": 230,
            "background": theme.palette.lightOrange.main,
            "border": "none",
            "borderRadius": "50%",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "position": "relative",


        },
        "inner": {
            "width": "70%",
            "height": "70%",
            "border": `solid ${theme.palette.white.main} 1px`,
            "borderRadius": "50%",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
        },
    })
})


const { Char } = (() => {

    type CharProps = {
        char: string;
        index: number;
    }

    const Char = memo((props: CharProps) => {
        const { char, index } = props;
        const { classes } = useStyles({ index, char });
        return <div className={classes.root}>
            <Typography className={classes.char} variant="details">{char}</Typography>
        </div>
    })

    const useStyles = tss.withName("Char").withParams<{ index: number; char: string }>().create(({ theme, char, index }) => {
const al = "abcdefghijklmnopqrstuvwxyz"
        return ({
            "root": {
                "position": "absolute",
                "top": 0,
                "height": "50%",
                "boxSizing": "border-box",
                "transform": `rotate(${index * 5.7}deg)`,
                "transformOrigin": "bottom center",
                "paddingTop": 5,

            },
            "char": {
                "color": theme.palette.white.main,
                "fontSize": "0.95em"
            }
        })
    })
    return { Char }
})()
