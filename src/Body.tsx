import { tss } from "tss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRoute } from "router";
import { Home } from "pages/Home";
import { PassCulture } from "pages/PassCulture";
import { Mediation } from "pages/Mediation";
import { Rp } from "pages/Rp";
import { Festival } from "pages/Festival";
import { useIsDark } from "theme/useIsDark";
import { useEffect } from "react";
import { Contact } from "pages/Contact";


export type PropsOfBody = {
    className?: string;
};

export function Body(props: PropsOfBody) {

    const { className } = props;

    const { cx, classes } = useStyles();
    const route = useRoute();
    const { setIsDark } = useIsDark()

    useEffect(() => {
        if (route.name !== "festival") {
            setIsDark(false);
            return;
        }

        setIsDark(true)
    }, [route.name])
    return (
        <div className={cx(classes.root, className)}>
            <Header />
            <div className={classes.body}>
                {route.name === "home" && <Home />}
                {route.name === "pc" && <PassCulture />}
                {route.name === "mediation" && <Mediation />}
                {route.name === "rp" && <Rp />}
                {route.name === "festival" && <Festival />}
                {route.name === "contact" && <Contact />}

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
            //"alignItems": "center",
            "minHeight": "100vh",
            [theme.breakpoints.up("xl")]: {
                "alignItems": "center"
            }
        },
        "body": {
            "maxWidth": 1920,
            "paddingTop": theme.spacing(21)
        },
        "footerWrapper": {
            "marginTop": "auto"
        }
    }));