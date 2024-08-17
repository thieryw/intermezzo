import { tss } from "tss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { routes, useRoute } from "router";
import { Home } from "pages/Home";
import { PassCulture } from "pages/PassCulture";
import { Mediation } from "pages/Mediation";
import { Rp } from "pages/Rp";
import { Festival } from "pages/Festival";
import { useIsDark } from "theme/useIsDark";
import { useEffect } from "react";
import { Contact } from "pages/Contact";
import { ReactSVG } from "react-svg";
import logo from "assets/svg/logo.svg";
import logoDark from "assets/svg/logo-dark.svg";


export type PropsOfBody = {
    className?: string;
};

export function Body(props: PropsOfBody) {

    const { className } = props;

    const { cx, classes } = useStyles();
    const route = useRoute();
    const { setIsDark, isDark } = useIsDark()

    useEffect(() => {
        if (route.name !== "festival") {
            setIsDark(false);
            return;
        }

        setIsDark(true)
    }, [route.name])

    return (
        <div className={cx(classes.root, className)}>
            <a className={classes.logoLink} {...routes.home().link}>
                <ReactSVG
                    src={isDark ? logoDark : logo}
                    className={classes.logo}
                />
            </a>
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
        },
        "logo": {
            "& svg": {
                [theme.breakpoints.down("sm")]: {
                    "width": 200
                }
            }

        },
        "logoLink": {
            "position": "absolute",
            "top": theme.spacing(5),
            "left": theme.spacing(15),
            "transition": "transform 300ms",
            ":hover": {
                "transform": "scale(1.02)"
            },
            [theme.breakpoints.down("sm")]: {
                "left": theme.spacing(4)
            }

        }

    }));