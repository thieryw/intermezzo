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
import { ThemeContext } from "@emotion/react";




export type PropsOfBody = {
    className?: string;
};

export function Body(props: PropsOfBody) {

    const { className } = props;

    const { cx, classes, theme } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
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
    .create(() => ({
        "root": {
            "paddingTop": 100,
        },
        "image": {
        }
    }));