import { memo, useRef } from "react";
import Text from "@mui/material/Typography";
import siteLogo from "assets/svg/header/menu-logo.svg";
import fbIcon from "assets/svg/header/fb-color.svg";
import instaIcon from "assets/svg/header/insta-color.svg";
import youtubeIcon from "assets/svg/header/yt-color.svg";
import { declareComponentKeys } from "i18nifty";
import { Header as HeaderComponent } from "components/Header";
import { useTranslation } from "i18n";
import svgAcademie from "assets/svg/sponsors/logo-academie.svg";
import svgBordeaux from "assets/svg/sponsors/logo-bordeaux.svg";
import svgCredit from "assets/svg/sponsors/logo-creditmutuel.svg";
import svgGironde from "assets/svg/sponsors/logo-gironde.svg";
import svgMecenart from "assets/svg/sponsors/logo-mecenart.svg";
import svgMuseeAqui from "assets/svg/sponsors/logo-musee-aquitaine.svg";
import svgNouvAqui from "assets/svg/sponsors/logo-nouvelle-aquitaine.svg";
import svgPassCult from "assets/svg/sponsors/logo-passculture.svg";
import { routes, useRoute } from "router";
import { tss } from "tss";





export const Header = memo(() => {
    const { t } = useTranslation("Header");
    const route = useRoute();
    const linksRef = useRef<{
        href: string;
        onClick?: () => void;
        label: string;
        routeName: string;
    }[]>([
        {
            "label": t("assoLink"),
            ...routes.home().link,
            "routeName": routes.home().name
        },
        {
            "label": t("passCultureLink"),
            ...routes.pc().link,
            "routeName": routes.pc().name
        },
        {
            "label": t("mediationLink"),
            ...routes.mediation().link,
            "routeName": routes.mediation().name
        },
        {
            "label": t("rPLInk"),
            ...routes.rp().link,
            "routeName": routes.rp().name
        },
        {
            "label": t("festivalLink"),
            ...routes.festival().link,
            "routeName": routes.festival().name
        },
        {
            "label": t("contactLink"),
            ...routes.contact().link,
            "routeName": routes.contact().name
        },

    ]);
    const { classes } = useStyles();
    return <HeaderComponent
        links={linksRef.current}
        currentLinkLabel={linksRef.current.find(({ routeName }) => routeName === route.name)?.label}
        logo={siteLogo}
        smallPrint={
            <div>
                <a href=""><Text className={classes.details} variant="details">{t("legalLink")}</Text></a>
                <Text className={classes.details} variant="details">{t("copyRight")}</Text>
                <Text className={classes.details} variant="details">{t("siteDesigner")} <a className={classes.link} href="">{t("ideaArtLink")}</a></Text>

            </div>
        }
        logoLinks={[
            {
                "href": "https://www.facebook.com/artisteformation/",
                "logo": fbIcon,
                "label": "Facebook link"
            },
            {
                "href": "",
                "logo": instaIcon,
                "label": "Instagram link",
            },
            {
                "href": "https://www.youtube.com/@cfj757683",
                "logo": youtubeIcon,
                "label": "Youtube link"
            }
        ]}
        buttonLink={{
            "openInNewTab": true,
            "label": t("joinUsLink"),
            "href": "https://outlook.office365.com/book/cesarreservation@artisteformation.com/"
        }}
        animatedBanner={{
            "slides":
                [
                    <img src={svgNouvAqui} alt="sponsor" />,
                    <img src={svgGironde} alt="sponsor" />,
                    <img src={svgPassCult} alt="sponsor" />,
                    <img src={svgMecenart} alt="sponsor" />,
                    <img src={svgCredit} alt="sponsor" />,
                    <img src={svgMuseeAqui} alt="sponsor" />,
                    <img src={svgAcademie} alt="sponsor" />,
                    <img src={svgBordeaux} alt="sponsor" />,
                ]
        }}

    />
})


const useStyles = tss.create(({theme}) => {
    return ({
        "details": {
            "color": theme.palette.darkGray.main
        },
        "link": {
            "color": theme.palette.purple.main

        },


    })
})


export const { i18n } = declareComponentKeys<
    "assoLink" |
    "passCultureLink" |
    "mediationLink" |
    "rPLInk" |
    "festivalLink" |
    "contactLink" |
    "legalLink" |
    "copyRight" |
    "siteDesigner" |
    "ideaArtLink" |
    "joinUsLink"
>()({ Header });

export type I18n = typeof i18n;