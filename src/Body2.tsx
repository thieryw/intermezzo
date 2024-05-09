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




export type PropsOfBody = {
    className?: string;
};

export function Body(props: PropsOfBody) {

    const { className } = props;

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
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
            "paddingTop": 400
        }
    }));