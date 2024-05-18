import { memo } from "react";
import Text from "@mui/material/Typography";
import siteLogo from "assets/svg/header/menu-logo.svg";
import fbIcon from "assets/svg/header/fb-color.svg";
import instaIcon from "assets/svg/header/insta-color.svg";
import youtubeIcon from "assets/svg/header/yt-color.svg";
import { declareComponentKeys } from "i18nifty";
import { Header as HeaderComponent } from "components/Header";
import { useTranslation } from "i18n";




export const Header = memo(() => {
    const { t } = useTranslation("Header");
    return <HeaderComponent
        links={[
            {
                "href": "",
                "label": t("assoLink")

            },
            {
                "href": "",
                "label": t("passCultureLink")

            },
            {
                "href": "",
                "label": t("mediationLink")

            },
            {
                "href": "",
                "label": t("rPLInk")

            },
            {
                "href": "",
                "label": t("festivalLink")

            },
            {
                "href": "",
                "label": t("contactLink")

            },
        ]}
        currentLinkLabel=""
        logo={siteLogo}
        contact={<div>
        </div>}
        smallPrint={
            <div>
                <a href=""><Text variant="details">{t("legalLink")}</Text></a>
                <Text variant="details">{t("copyRight")}</Text>
                <div>
                    <Text variant="details">{t("siteDesigner")}</Text>
                    <Text variant="details">{t("ideaArtLink")}</Text>

                </div>
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

    />
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