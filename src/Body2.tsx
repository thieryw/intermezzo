import { tss } from "tss";
import { AnimatedBanner } from "./components/AnimatedBanner";
import svgAcademie from "assets/svg/sponsors/logo-academie.svg";
import svgBordeaux from "assets/svg/sponsors/logo-bordeaux.svg";
import svgCredit from "assets/svg/sponsors/logo-creditmutuel.svg";
import svgGironde from "assets/svg/sponsors/logo-gironde.svg";
import svgMecenart from "assets/svg/sponsors/logo-mecenart.svg";
import svgMuseeAqui from "assets/svg/sponsors/logo-musee-aquitaine.svg";
import svgNouvAqui from "assets/svg/sponsors/logo-nouvelle-aquitaine.svg";
import svgPassCult from "assets/svg/sponsors/logo-passculture.svg";
import testJpg from "assets/jpg/accueil-hero-image.jpg";
import { PictureAnimator } from "components/PictureAnimator";
import { StatisticsCard } from "components/StatisticsCard";
import Typo from "@mui/material/Typography";
import { Header } from "Header";




export type PropsOfBody = {
    className?: string;
};

export function Body(props: PropsOfBody) {

    const { className } = props;

    const { cx, classes, theme } = useStyles();


    return (
        <div className={cx(classes.root, className)}>
            <Header
            />
            <StatisticsCard
                stats={[
                    {
                        "statNumber": "170",
                        "statSign": "+",
                        "statDesc": "Concerts & Spectacles"
                    },
                    {
                        "statNumber": "50",
                        "statSign": "+",
                        "statDesc": "Artistes Soutenus"
                    },
                    {
                        "statNumber": "220",
                        "statSign": "+",
                        "statDesc": "Heures de Médiations"
                    },
                    {
                        "statNumber": <Typo className={classes.cardNumber} variant="cardNumber">3000</Typo>,
                        "statSign": <Typo className={classes.cardNumber} variant="cardSign">+</Typo>,
                        "statDesc": "Spectateurs Conquis"
                    },
                ]}
            />
            <PictureAnimator
                src={testJpg}
                classes={{
                    "image": classes.image
                }}
                width={parseInt(theme.spacing(93))}
                height={parseInt(theme.spacing(93)) / 100 * 85}
                borderRadius="0px 44%"
            />
            <AnimatedBanner
                images={[
                    {
                        "src": svgNouvAqui,
                        "alt": "sponsor"
                    },
                    {
                        "src": svgGironde,
                        "alt": "sponsor"
                    },
                    {
                        "src": svgPassCult,
                        "alt": "sponsor"
                    },
                    {
                        "src": svgMecenart,
                        "alt": "sponsor"
                    },
                    {
                        "src": svgCredit,
                        "alt": "sponsor"
                    },
                    {
                        "src": svgMuseeAqui,
                        "alt": "sponsor"
                    },
                    {
                        "src": svgAcademie,
                        "alt": "sponsor"
                    },
                    {
                        "src": svgBordeaux,
                        "alt": "sponsor"
                    },
                ]}


            />
        </div>
    );

}

const useStyles = tss
    .withName({ Body })
    .create(({ theme }) => ({
        "root": {
            "display": "relative"
        },
        "image": {
        },
        "cardNumber": {
            "color": "transparent",
            "background": theme.palette.gradient1.main,
            "backgroundClip": "text"
        },
    }));