import { tss } from "tss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRoute } from "router";
import { Home } from "pages/Home";

export type PropsOfBody = {
    className?: string;
};

export function Body(props: PropsOfBody) {

    const { className } = props;

    const { cx, classes } = useStyles();
    const route = useRoute();

    return (
        <div className={cx(classes.root, className)}>
            <Header />
            <div className={classes.body}>
                {route.name === "home" && <Home />}
                {route.name === "pc" && <div>pipi caca</div>}

            </div>
            <div className={classes.footerWrapper}>
                <Footer />
            </div>

        </div>
    );

}

const useStyles = tss
    .withName({ Body })
    .create(({ theme }) => ({
        "root": {
            "overflowX": "hidden",
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "minHeight": "100vh",
        },
        "body": {
            "maxWidth": 1920,
            "paddingTop": theme.spacing(21)
        },
        "footerWrapper": {
            "marginTop": "auto"
        }
    }));