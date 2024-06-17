import { tss } from "tss";
import testJpg from "assets/jpg/home/accueil-hero-image.jpg";
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
import { ParagraphList } from "components/ParagraphList";
import { PortraitGallery } from "components/PortraitGallery";
import benevoleImg1 from "assets/jpg/home/benevoles/benevole-img-1.jpg";
import benevoleImg2 from "assets/jpg/home/benevoles/benevole-img-2.jpg";
import benevoleImg3 from "assets/jpg/home/benevoles/benevole-img-3.jpg";
import benevoleImg4 from "assets/jpg/home/benevoles/benevole-img-4.jpg";
import benevoleImg5 from "assets/jpg/home/benevoles/benevole-img-5.jpg";
import benevoleImg6 from "assets/jpg/home/benevoles/benevole-img-6.jpg";
import benevoleImg7 from "assets/jpg/home/benevoles/benevole-img-7.jpg";
import benevoleImg8 from "assets/jpg/home/benevoles/benevole-img-8.jpg";


const benevoleImages = [
    benevoleImg1,
    benevoleImg2,
    benevoleImg3,
    benevoleImg4,
    benevoleImg5,
    benevoleImg6,
    benevoleImg7,
    benevoleImg8,
]



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
                title="Incubatrice de Projets Culturels"
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
            <PortraitGallery 
                images={benevoleImages.map(image => ({
                    "src": image
                }))}
                button={{
                    "href": "",
                    "label": "Nous rejoindre"
                }}
                surtitle="Nos Bénévoles"
                title="Il Etait Une Fois"
                highlight="Intermezzo"
                mobilePictures={[
                    {
                        "src": benevoleImg7
                    },
                ]}

            />
            <ParagraphList
                paragraphs={[
                    {
                        "title": "Innover",
                        "paragraph": "Créer une proposition culturelle innovante en développant des projets musicaux d’esthétiques variées, où pourront interagir diverses formes artistiques."
                    },
                    {
                        "title": "Révéler",
                        "paragraph": "Permettre aux artistes et particulièrement aux jeunes de trouver sur  Bordeaux et sa métropole, les conditions favorables à la réalisation de leurs projets artistiques."
                    },
                    {
                        "title": "Irriguer",
                        "paragraph": "Faire découvrir des lieux culturels inédits ou moins conventionnels, dans une démarche d’irrigation culturelle du territoire et à travers une logique de festival itinérant."
                    },
                    {
                        "title": "Créer",
                        "paragraph": "Favoriser la création musicale en réalisant des commandes auprès de compositeurs et en accompagnant le public à travers l’écoute de la musique contemporaine."
                    },
                    {
                        "title": "Sensibiliser",
                        "paragraph": "Proposer des actions de médiation en direction de publics hétérogènes ou empêchés . Animer des ateliers afin de sensibiliser les générations futures aux arts vivants."
                    },
                ]}
            />
            <Video
                src={videoImage}
                width={parseInt(theme.spacing(125))}
                height={parseInt(theme.spacing(125)) / 100 * 40}
                borderRadius={`${theme.spacing(25)} 0px`}
                videoId="UlFsoRQYVrs"
                alt="video preview image"
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