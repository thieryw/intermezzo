
import { tss } from "tss";
import Typography from "@mui/material/Typography";

export type PropsOfBody = {
    className?: string;
};

export function Body2(props: PropsOfBody) {

    const { className } = props;

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.innerWrapper}>
                <Typography variant="heading1" >
                    Heading 1
                </Typography>
                <Typography
                    className={classes.paragraph}
                    variant="cardSign"
                >
                    This is a paragraph!
                </Typography>
            </div>
        </div>
    );

}

const useStyles = tss
    .withName({ Body2 })
    .withNestedSelectors<"paragraph">()
    .create(({ theme, classes }) => ({
        "root": {
            "height": "100vh",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
        },
        "innerWrapper": {
            "textAlign": "center",
            "border": `1px solid ${theme.palette.divider}`,
            "padding": theme.spacing(3),
            "borderRadius": theme.shape.borderRadius,
            [`&:hover .${classes.paragraph}`]: {
                "color": theme.palette.success.main
            }
        },
        "paragraph": {
            "marginTop": theme.spacing(3)
        }
    }));