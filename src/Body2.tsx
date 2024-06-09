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
import { CircularButton } from "components/CircularButton";
import arrowSvg from "assets/svg/icons/arrows/badge-arrow.svg";
import { ClickableCard } from "components/ClickableCard";
import { SliderCard } from "components/SliderCard";
import passSrc from "assets/jpg/pass-culture/program-1-img.jpg";
import { DraggableSliderWrapper } from "components/DraggableSliderWrapper";
import { Video } from "components/Video";
import videoImage from "assets/jpg/mediation/carnet-video-preview.jpg";
import { Hero } from "components/Hero";
import titleCapsuleSrc from "assets/jpg/home/title-capsule-croped.jpg";




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

            <Hero 
                animatedPicture={{
                    "src": testJpg,
                }}
                button1={{
                    "href": "",
                    "label": "Découvrir"
                }}
                button2={{
                    "href": "",
                    "label": "Contact"
                }}
                surtitle="L'Association Musicale"
                title="Icubatrice de Projets Culturels"
                highLightTitle="Innovants"
                highLightTitleImageUrl={titleCapsuleSrc}
                paragraph="Fondée par des artistes locaux passionnés, notre association musicale Intermezzo s'engage pleinement à promouvoir les talents artistiques de Bordeaux et de sa région."
                statisticCard={{
                    "stats": [
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
                    ]

                }}

            />
            <Video
                src={videoImage}
                width={parseInt(theme.spacing(125))}
                height={parseInt(theme.spacing(125)) / 100 * 40}
                borderRadius={`${theme.spacing(25)} 0px`}
                iframeUrl="https://www.youtube.com/embed/UlFsoRQYVrs?si=xKehSg3kRz66aHH0"
                alt="video preview image"
            />
            <DraggableSliderWrapper
                title="Voyages initiatiques"
                titleHighLight="Pour Tous"
                paragraph="En fonction du programme d’histoire ou de musique abordé en classe durant l’année, nous pouvons proposer un programme adapté, entre musique, théâtre et danse."
                subtitle="Programmes d’Intervention"
                slides={[
                    {
                        "imageSrc": passSrc,
                        "subTitle": "Musique et histoire",
                        "title": "À la Découverte de la Musique Classique",
                        "hover": {
                            "paragraph": "Un temps d'échange et de découverte du métier de musicien, suivi d'un mini concert.  Possible aussi d'orienter le programme Pop Music (ABBA, QUEEN) et musique classique.",
                            "bulletPoint1": "4 intervenants",
                            "bulletPoint2": "50 à 60mn"

                        }
                    },
                    {
                        "imageSrc": passSrc,
                        "subTitle": "Musique et histoire",
                        "title": "À la Découverte de la Musique Classique",
                        "hover": {
                            "paragraph": "Un temps d'échange et de découverte du métier de musicien, suivi d'un mini concert.  Possible aussi d'orienter le programme Pop Music (ABBA, QUEEN) et musique classique.",
                            "bulletPoint1": "4 intervenants",
                            "bulletPoint2": "50 à 60mn"

                        }
                    },
                    {
                        "imageSrc": passSrc,
                        "subTitle": "Musique et histoire",
                        "title": "À la Découverte de la Musique Classique",
                        "hover": {
                            "paragraph": "Un temps d'échange et de découverte du métier de musicien, suivi d'un mini concert.  Possible aussi d'orienter le programme Pop Music (ABBA, QUEEN) et musique classique.",
                            "bulletPoint1": "4 intervenants",
                            "bulletPoint2": "50 à 60mn"

                        }
                    },
                    {
                        "imageSrc": passSrc,
                        "subTitle": "Musique et histoire",
                        "title": "À la Découverte de la Musique Classique",
                        "hover": {
                            "paragraph": "Un temps d'échange et de découverte du métier de musicien, suivi d'un mini concert.  Possible aussi d'orienter le programme Pop Music (ABBA, QUEEN) et musique classique.",
                            "bulletPoint1": "4 intervenants",
                            "bulletPoint2": "50 à 60mn"

                        }
                    },
                    {
                        "imageSrc": passSrc,
                        "subTitle": "Musique et histoire",
                        "title": "À la Découverte de la Musique Classique",
                        "hover": {
                            "paragraph": "Un temps d'échange et de découverte du métier de musicien, suivi d'un mini concert.  Possible aussi d'orienter le programme Pop Music (ABBA, QUEEN) et musique classique.",
                            "bulletPoint1": "4 intervenants",
                            "bulletPoint2": "50 à 60mn"

                        }
                    },

                ]}
                link1={{
                    "href": "",
                    "label": "En savoir plus"
                }}
                link2={{
                    "href": "",
                    "label": "Un projet ?"
                }}
            />

            <SliderCard
                imageSrc={passSrc}
                subTitle="Musique et histoire"
                title="À la Découverte de la Musique Classique"
                hover={{
                    "paragraph": "Un temps d'échange et de découverte du métier de musicien, suivi d'un mini concert.  Possible aussi d'orienter le programme Pop Music (ABBA, QUEEN) et musique classique.",
                    "bulletPoint1": "4 intervenants",
                    "bulletPoint2": "50 à 60mn"
                }}
            />
            <ClickableCard
                surTitle="Pass Culture"
                title="Intermezzo Débarque en Classe"
                paragraph="Voyages initiatiques, ateliers, spectacles et évènements culturels,  100% financés par le Pass Culture."
                link={{
                    "href": ""
                }}

            />

            <CircularButton
                logoSvgSrc={arrowSvg}
                circularText="Nous avons leur confiance . On avance ensemble . Partenaires . "
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
            "display": "flex",
            "flexDirection": "column",
            "gap": 100,
            "overflowX": "hidden"
        },
        "image": {
        },
        "cardNumber": {
            "color": "transparent",
            "background": theme.palette.gradient1.main,
            "backgroundClip": "text"
        },
    }));