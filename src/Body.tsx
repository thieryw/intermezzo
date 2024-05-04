
import { tss } from "tss";
import Typography from "@mui/material/Typography";

export type PropsOfBody = {
    className?: string;
};

export function Body(props: PropsOfBody) {

    const { className } = props;

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <Typography variant="heading1">Heading 1</Typography>
            <Typography variant="heading2">Heading 2</Typography>
            <Typography variant="heading3">Heading 3</Typography>
            <Typography variant="bigParagraph">Big Paragraph</Typography>
            <div style={{
                "display": "flex",
                "alignItems": "flex-end"
            }}>
                <Typography style={{
                    "marginBlock": 0,
                    "lineHeight": "90%"
                }} variant="cardNumber">3000</Typography>
                <Typography variant="cardSign">+</Typography>
            </div>
            <Typography variant="paragraph1">Paragraph 1: lorem ispum dolor sy amet.<br/>test de paragraph</Typography>
            <Typography variant="paragraph1Purple">Paragraph 1 violet: lorem ispum dolor sy amet.<br/>test de paragraph</Typography>
            <Typography variant="paragraph1Orange">Paragraph 1 orange: lorem ispum dolor sy amet.<br/>test de paragraph</Typography>
            <Typography variant="smallText">Small text: lorem ispum dolor sy amet.<br/>test de paragraph</Typography>
            <Typography variant="details">Details: lorem ispum dolor sy amet.<br/>test de paragraph</Typography>
            <Typography variant="label">label: lorem ispum dolor sy amet.<br/>test de paragraph</Typography>
            <ul>
                <Typography variant="menu">Menu Link</Typography>
                <Typography variant="menu">Menu Link</Typography>
                <Typography variant="menu">Menu Link</Typography>
            </ul>

            <Typography variant="highLight">Highlight 1</Typography>
            <Typography variant="highLight2">Highlight 2</Typography>
            <div style={{
                "backgroundColor": "black"
            }}>
                <Typography variant="highLight3">Highlight 3</Typography>
            </div>
            <Typography variant="highLight4">Highlight 4</Typography>
            <Typography variant="italicP"><br/>Association Toutes à l’abri<br/>Association Promofemmes</Typography>

             


        </div>
    );

}

const useStyles = tss
    .withName({ Body })
    .create(({theme}) => ({
        "root": {
            "height": "100vh",
            "display": "flex",
            "alignItems": "flex-start",
            "flexDirection": "column",
            "gap": theme.spacing(5),
            "paddingLeft": theme.spacing(5),
            "paddingTop": theme.spacing(5)
        }
    }));