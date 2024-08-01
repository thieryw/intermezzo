import { memo } from "react";
import { declareComponentKeys, useTranslation } from "i18n";
import { Hero } from "components/Hero";
import { routes } from "router";
import { tss } from "tss";
import cubeMp4 from "assets/mp4/cubeBig.mp4";
import Typo from "@mui/material/Typography";
import { ReactSVG } from "react-svg";
import trLogoSvg from "assets/svg/festival/transparent-logo-2.svg";
import { AnimatedBanner } from "components/AnimatedBanner";
import svgAca from "assets/svg/festival/sponsors/logo-academie-bordeaux.svg";
import svgCandle from "assets/svg/festival/sponsors/logo-candlelight.svg";
import svgCM from "assets/svg/festival/sponsors/logo-credit-mutuel.svg";
import svgMus from "assets/svg/festival/sponsors/logo-musee-aquitaine.svg";
import svgOnba from "assets/svg/festival/sponsors/logo-onba.svg";
import svgPc from "assets/svg/festival/sponsors/logo-passculture.svg";
import { PressFile } from "components/PressFile";
import { DropdownSection } from "components/DropdownSection";
import fbSvg from "assets/svg/festival/fb-transparent.svg";
import instaSvg from "assets/svg/festival/insta-transparent.svg";
import ytSvg from "assets/svg/festival/yt-transparent.svg";
import banner2022jpg from "assets/jpg/festival/2022/2022-banner.jpg";
import hiphop2022jpg from "assets/jpg/festival/2022/2022-preview-baroque-hiphop.jpg";
import expo2022jpg from "assets/jpg/festival/2022/2022-preview-exposition.jpg";
import youkali2022jpg from "assets/jpg/festival/2022/2022-preview-youkali.jpg";
import banner2022webp from "assets/webp/festival/2022/2022-banner.webp";
import hiphop2022webp from "assets/webp/festival/2022/2022-preview-baroque-hiphop.webp";
import expo2022webp from "assets/webp/festival/2022/2022-preview-exposition.webp";
import youkali2022webp from "assets/webp/festival/2022/2022-preview-youkali.webp";
import { PictureAnimator } from "components/PictureAnimator";
import { Video } from "components/Video";
import banner2021jpg from "assets/jpg/festival/2021/2021-banner.jpg";
import nuit2021jpg from "assets/jpg/festival/2021/2021-preview-nuit.jpg";
import poingt2021jpg from "assets/jpg/festival/2021/2021-preview-poingt.jpg";
import roc2021jpg from "assets/jpg/festival/2021/2021-preview-rocailleux.jpg";
import voyage2021jpg from "assets/jpg/festival/2021/2021-preview-voyage.jpg";
import banner2021webp from "assets/webp/festival/2021/2021-banner.webp";
import nuit2021webp from "assets/webp/festival/2021/2021-preview-nuit.webp";
import poingt2021webp from "assets/webp/festival/2021/2021-preview-poingt.webp";
import roc2021webp from "assets/webp/festival/2021/2021-preview-rocailleux.webp";
import voyage2021webp from "assets/webp/festival/2021/2021-preview-voyage.webp";
import banner2020jpg from "assets/jpg/festival/2020/2020-banner.jpg";
import cloture2020jpg from "assets/jpg/festival/2020/2020-preview-cloture.jpg";
import erable2020jpg from "assets/jpg/festival/2020/2020-preview-erable.jpg";
import ouv12020jpg from "assets/jpg/festival/2020/2020-preview-ouverture-1.jpg";
import ouv2020jpg from "assets/jpg/festival/2020/2020-preview-ouverture-2.jpg";
import sorh2020jpg from "assets/jpg/festival/2020/2020-preview-sorhabchitan.jpg";
import seph2020jpg from "assets/jpg/festival/2020/2020-preview-zephir.jpg";
import banner2020webp from "assets/webp/festival/2020/2020-banner.webp";
import cloture2020webp from "assets/webp/festival/2020/2020-preview-cloture.webp";
import erable2020webp from "assets/webp/festival/2020/2020-preview-erable.webp";
import ouv12020webp from "assets/webp/festival/2020/2020-preview-ouverture-1.webp";
import ouv2020webp from "assets/webp/festival/2020/2020-preview-ouverture-2.webp";
import sorh2020webp from "assets/webp/festival/2020/2020-preview-sorhabchitan.webp";
import seph2020webp from "assets/webp/festival/2020/2020-preview-zephir.webp";
import { VideoSecondary } from "components/VideoSecondary";
import festMp4 from "assets/mp4/festival-video.mp4";



export const Festival = memo(() => {
    const { t } = useTranslation("Festival");
    const { classes, theme, windowInnerWidth } = useStyles();
    return <div>
        <Hero
            classes={{
                "loopedVideo": classes.cube,
                "textAndButtonWrapperInner": classes.heroText,
                "statisticCard": classes.statCard
            }}
            surtitle={t("heroSurtitle")}
            title={{
                "title": t("heroTitle"),
                "highLightTitle": t("heroHighLightTitle")
            }}
            paragraph={t("heroParagraph")}
            button1={{
                "href": "",
                "label": t("heroButton1")
            }}
            button2={{
                "label": t("heroButton2"),
                ...routes.contact().link
            }}
            statisticCard={{
                "stats": [
                    {
                        "statNumber": t("heroStatNumber1"),
                        "statSign": t("heroStatSign1"),
                        "statDesc": t("heroStatDesc1")
                    },
                    {
                        "statNumber": t("heroStatNumber2"),
                        "statSign": t("heroStatSign2"),
                        "statDesc": t("heroStatDesc2")
                    },
                    {
                        "statNumber": t("heroStatNumber3"),
                        "statSign": t("heroStatSign3"),
                        "statDesc": t("heroStatDesc3")
                    },
                    {
                        "statNumber": <Typo className={classes.cardNumber} variant="cardNumber">{t("heroStatNumber4")}</Typo>,
                        "statSign": <Typo className={classes.cardNumber} variant="cardSign">{t("heroStatSign4")}</Typo>,
                        "statDesc": t("heroStatDesc4")
                    },
                ]
            }}
            loopedVideo={{
                "src": cubeMp4,
            }}





        />
        <div className={classes.festivalDesc}>
            <ReactSVG
                src={trLogoSvg}
                className={classes.trLogo}

            />
            <Typo variant="heading3" className={classes.festivalDescTitle}>{t("festivalDescTitleStart")} <span className={classes.highlight}>{t("festivalDescTitleHighlight")}</span> {t("festivalDescTitleEnd")}</Typo>
            <Typo variant="paragraph1" className={classes.festivalDescParagraph}>{t("festivalDescParagraph")}</Typo>
        </div>

        <AnimatedBanner
            className={classes.animatedBanner}
            slides={[
                <img src={svgAca} alt="sponsor" />,
                <img src={svgCandle} alt="sponsor" />,
                <img src={svgCM} alt="sponsor" />,
                <img src={svgMus} alt="sponsor" />,
                <img src={svgOnba} alt="sponsor" />,
                <img src={svgPc} alt="sponsor" />
            ]}
        />
        <VideoSecondary 
            previewScr={festMp4}
            playVideoMsg={t("readVid")}
            videoId="UlFsoRQYVrs"
        />
        <DropdownSection
            className={classes.firstSection}
            aside={
                <PressFile
                    link={{
                        "href": "",
                        "label": t("2022PressTitle")
                    }}
                    organizations={[
                        t("2022PressName1"),
                        t("2022PressName2"),
                        t("2022PressName3"),
                        t("2022PressName4"),
                        t("2022PressName5"),
                        t("2022PressName6"),
                        t("2022PressName7"),
                        t("2022PressName8"),
                        t("2022PressName9"),
                        t("2022PressName10"),
                        t("2022PressName11"),
                        t("2022PressName12"),
                        t("2022PressName13"),
                        t("2022PressName14"),
                        t("2022PressName15"),
                        t("2022PressName16"),
                        t("2022PressName17"),
                    ]}
                    socialIconsUrls={[
                        fbSvg,
                        instaSvg,
                        ytSvg
                    ]}

                />
            }
            media={
                <PictureAnimator
                    src={banner2022webp}
                    sources={[
                        {
                            "srcSet": banner2022webp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": banner2022jpg,
                            "type": "image/jpeg"
                        }
                    ]}
                    alt="2022 banner"
                    width={windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))}
                    height={(windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))) / 100 * (windowInnerWidth < theme.breakpoints.values.sm ? 110 : 40)}
                    borderRadius={`${windowInnerWidth < theme.breakpoints.values.md ? "0px" : theme.spacing(25)} 0px`}

                />
            }
            title={t("2022Title")}
            isStateBlocked={false}
            paragraphs={[
                {
                    "title": t("2022ParagraphTitle1"),
                    "paragraph": t("2022Paragraph1"),
                    "subtitle": t("2022SubParagraph1"),
                    "media": <Video
                        src={expo2022webp}
                        sources={[
                            {
                                "srcSet": expo2022webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": expo2022jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },
                {
                    "title": t("2022ParagraphTitle2"),
                    "paragraph": t("2022Paragraph2"),
                    "subtitle": t("2022SubParagraph2"),

                },
                {
                    "title": t("2022ParagraphTitle3"),
                    "paragraph": t("2022Paragraph3"),
                    "subtitle": t("2022SubParagraph3"),
                    "media": <Video
                        src={hiphop2022webp}
                        sources={[
                            {
                                "srcSet": hiphop2022webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": hiphop2022jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },
                {
                    "title": t("2022ParagraphTitle4"),
                    "paragraph": t("2022Paragraph4"),
                    "subtitle": t("2022SubParagraph4"),

                },
                {
                    "title": t("2022ParagraphTitle5"),
                    "paragraph": t("2022Paragraph5"),
                    "subtitle": t("2022SubParagraph5"),
                    "media": <Video
                        src={youkali2022webp}
                        sources={[
                            {
                                "srcSet": youkali2022webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": youkali2022jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },

            ]}

        />
        <DropdownSection
            aside={
                <PressFile
                    link={{
                        "href": "",
                        "label": t("2021PressTitle")
                    }}
                    organizations={[
                        t("2021PressName1"),
                        t("2021PressName2"),
                        t("2021PressName3"),
                        t("2021PressName4"),
                        t("2021PressName5"),
                        t("2021PressName6"),
                        t("2021PressName7"),
                        t("2021PressName8"),
                        t("2021PressName9"),
                        t("2021PressName10"),
                        t("2021PressName11"),
                        t("2021PressName12"),
                        t("2021PressName13"),
                        t("2021PressName14"),
                        t("2021PressName15"),
                        t("2021PressName16"),
                        t("2021PressName17"),
                    ]}
                    socialIconsUrls={[
                        fbSvg,
                        instaSvg,
                        ytSvg
                    ]}

                />
            }
            media={
                <PictureAnimator
                    src={banner2021webp}
                    sources={[
                        {
                            "srcSet": banner2021webp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": banner2021jpg,
                            "type": "image/jpeg"
                        }
                    ]}
                    alt="2021 banner"
                    width={windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))}
                    height={(windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))) / 100 * (windowInnerWidth < theme.breakpoints.values.sm ? 110 : 40)}
                    borderRadius={`${windowInnerWidth < theme.breakpoints.values.md ? "0px" : theme.spacing(25)} 0px`}

                />
            }
            title={t("2021Title")}
            isStateBlocked={false}
            paragraphs={[
                {
                    "title": t("2021ParagraphTitle1"),
                    "paragraph": t("2021Paragraph1"),
                    "subtitle": t("2021SubParagraph1"),
                    "media": <Video
                        src={nuit2021webp}
                        sources={[
                            {
                                "srcSet": nuit2021webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": nuit2021jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },
                {
                    "title": t("2021ParagraphTitle2"),
                    "paragraph": t("2021Paragraph2"),
                    "subtitle": t("2021SubParagraph2"),
                    "media": <Video
                        src={voyage2021webp}
                        sources={[
                            {
                                "srcSet": voyage2021webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": voyage2021jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },
                {
                    "title": t("2021ParagraphTitle3"),
                    "paragraph": t("2021Paragraph3"),
                    "subtitle": t("2021SubParagraph3"),
                    "media": <Video
                        src={poingt2021webp}
                        sources={[
                            {
                                "srcSet": poingt2021webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": poingt2021jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },
                {
                    "title": t("2021ParagraphTitle4"),
                    "paragraph": t("2021Paragraph4"),
                    "subtitle": t("2021SubParagraph4"),
                    "media": <Video
                        src={roc2021webp}
                        sources={[
                            {
                                "srcSet": roc2021webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": roc2021jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },

            ]}
            isInitiallyOpen={false}

        />
        <DropdownSection
            aside={
                <PressFile
                    link={{
                        "href": "",
                        "label": t("2020PressTitle")
                    }}
                    organizations={[
                        t("2020PressName1"),
                        t("2020PressName2"),
                        t("2020PressName3"),
                        t("2020PressName4"),
                        t("2020PressName5"),
                        t("2020PressName6"),
                        t("2020PressName7"),
                        t("2020PressName8"),
                        t("2020PressName9"),
                        t("2020PressName10"),
                        t("2020PressName11"),
                        t("2020PressName12"),
                        t("2020PressName13"),
                        t("2020PressName14"),
                        t("2020PressName15"),
                        t("2020PressName16"),
                        t("2020PressName17"),
                        t("2020PressName18"),
                        t("2020PressName19"),
                        t("2020PressName20"),
                        t("2020PressName21"),
                        t("2020PressName22"),
                    ]}
                    socialIconsUrls={[
                        fbSvg,
                        instaSvg,
                        ytSvg
                    ]}

                />
            }
            media={
                <PictureAnimator
                    src={banner2020webp}
                    sources={[
                        {
                            "srcSet": banner2020webp,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": banner2020jpg,
                            "type": "image/jpeg"
                        }
                    ]}
                    alt="2020 banner"
                    width={windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))}
                    height={(windowInnerWidth < theme.breakpoints.values.md ? windowInnerWidth : parseInt(theme.spacing(125))) / 100 * (windowInnerWidth < theme.breakpoints.values.sm ? 110 : 40)}
                    borderRadius={`${windowInnerWidth < theme.breakpoints.values.md ? "0px" : theme.spacing(25)} 0px`}

                />
            }
            title={t("2020Title")}
            isStateBlocked={false}
            paragraphs={[
                {
                    "title": t("2020ParagraphTitle1"),
                    "paragraph": t("2020Paragraph1"),
                    "subtitle": t("2020SubParagraph1"),
                    "media": <div>
                        <Video
                            src={ouv12020webp}
                            sources={[
                                {
                                    "srcSet": ouv12020webp,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": ouv12020jpg,
                                    "type": "image/jpeg"
                                }
                            ]}
                            width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                            height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                            borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                            videoId="UlFsoRQYVrs"
                            alt="video preview"
                            className={classes.videoFirst}

                        />
                        <Video
                            src={ouv2020webp}
                            sources={[
                                {
                                    "srcSet": ouv2020webp,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": ouv2020jpg,
                                    "type": "image/jpeg"
                                }
                            ]}
                            width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                            height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                            borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                            videoId="UlFsoRQYVrs"
                            alt="video preview"

                        />
                    </div>

                },
                {
                    "title": t("2020ParagraphTitle2"),
                    "paragraph": t("2020Paragraph2"),
                    "subtitle": t("2020SubParagraph2"),
                    "media": <div>
                        <Video
                            src={erable2020webp}
                            sources={[
                                {
                                    "srcSet": erable2020webp,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": erable2020jpg,
                                    "type": "image/jpeg"
                                }
                            ]}
                            width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                            height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                            borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                            videoId="UlFsoRQYVrs"
                            alt="video preview"
                            className={classes.videoFirst}

                        />
                        <Video
                            src={sorh2020webp}
                            sources={[
                                {
                                    "srcSet": sorh2020webp,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": sorh2020jpg,
                                    "type": "image/jpeg"
                                }
                            ]}
                            width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                            height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                            borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                            videoId="UlFsoRQYVrs"
                            alt="video preview"

                        />
                    </div>

                },
                {
                    "title": t("2020ParagraphTitle3"),
                    "paragraph": t("2020Paragraph3"),
                    "subtitle": t("2020SubParagraph3"),
                    "media": <Video
                        src={seph2020webp}
                        sources={[
                            {
                                "srcSet": seph2020webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": seph2020jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },
                {
                    "title": t("2020ParagraphTitle4"),
                    "paragraph": t("2020Paragraph4"),
                    "subtitle": t("2020SubParagraph4"),
                    "media": <Video
                        src={cloture2020webp}
                        sources={[
                            {
                                "srcSet": cloture2020webp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": cloture2020jpg,
                                "type": "image/jpeg"
                            }
                        ]}
                        width={windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth - (2 * parseInt(theme.spacing(5))) : parseInt(theme.spacing(71))}
                        height={(windowInnerWidth < theme.breakpoints.values.sm ? windowInnerWidth : parseInt(theme.spacing(71))) / 100 * 50}
                        borderRadius={windowInnerWidth < theme.breakpoints.values.sm ? "0px" : `0px ${theme.spacing(7)} ${theme.spacing(7)} ${theme.spacing(7)}`}
                        videoId="UlFsoRQYVrs"
                        alt="video preview"

                    />

                },

            ]}
            isInitiallyOpen={false}

        />

    </div>
});

const useStyles = tss.create(({ theme }) => {
    return ({
        "cube": {
            "position": "relative",
            "zIndex": -2,
            "top": -50,
            [theme.breakpoints.up("md")]: {
                "top": -100
            }
        },
        "cardNumber": {
            "color": "transparent",
            "background": theme.palette.gradient1.main,
            "backgroundClip": "text"
        },
        "heroText": {
            "maxWidth": 700
        },
        "statCard": {
            [theme.breakpoints.up("md")]: {
                "position": "relative",
                "top": -270
            }

        },
        "festivalDesc": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "position": "relative",
            ...(() => {
                const value = theme.spacing(3);
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),
            [theme.breakpoints.down("md")]: {
                "marginTop": theme.spacing(30)
            }

        },
        "festivalDescTitle": {
            "textAlign": "center",
            "maxWidth": 690,
            "marginBottom": theme.spacing(7)

        },
        "highlight": {
            ...theme.typography.highLight4

        },
        "festivalDescParagraph": {
            "textAlign": "center",
            "maxWidth": 540

        },
        "trLogo": {
            "position": "absolute",
            "top": "calc(50% - 330px)",
            "& svg": {
                "maxWidth": "100%"
            }
        },
        "animatedBanner": {
            ...(()=>{
                const value = theme.spacing(25);
                return {
                    "marginTop": value,
                    "marginBottom": value

                }
            })()
        },
        "videoFirst": {
            "marginBottom": theme.spacing(3)
        },
        "firstSection": {
            "marginTop": theme.spacing(20)
        }
    })
})


const { i18n } = declareComponentKeys<
    | "heroSurtitle"
    | "heroTitle"
    | "heroHighLightTitle"
    | "heroParagraph"
    | "heroStatNumber1"
    | "heroStatSign1"
    | "heroStatDesc1"
    | "heroStatNumber2"
    | "heroStatSign2"
    | "heroStatDesc2"
    | "heroStatNumber3"
    | "heroStatSign3"
    | "heroStatDesc3"
    | "heroStatNumber4"
    | "heroStatSign4"
    | "heroStatDesc4"
    | "heroButton1"
    | "heroButton2"
    | "festivalDescTitleStart"
    | "festivalDescTitleHighlight"
    | "festivalDescTitleEnd"
    | "festivalDescParagraph"
    | "readVid"
    | "missionSurtitle"
    | "missionTitle"
    | "missionParagraphTitle1"
    | "missionParagraph1"
    | "missionParagraphTitle2"
    | "missionParagraph2"
    | "missionParagraphTitle3"
    | "missionParagraph3"
    | "archivesSurtitle"
    | "archivesTitle"
    | "archivesHighlight"
    | "2022Date"
    | "2022Title"
    | "2022PressTitle"
    | "2022PressName1"
    | "2022PressName2"
    | "2022PressName3"
    | "2022PressName4"
    | "2022PressName5"
    | "2022PressName6"
    | "2022PressName7"
    | "2022PressName8"
    | "2022PressName9"
    | "2022PressName10"
    | "2022PressName11"
    | "2022PressName12"
    | "2022PressName13"
    | "2022PressName14"
    | "2022PressName15"
    | "2022PressName16"
    | "2022PressName17"
    | "2022ParagraphTitle1"
    | "2022Paragraph1"
    | "2022SubParagraph1"
    | "2022ParagraphTitle2"
    | "2022Paragraph2"
    | "2022SubParagraph2"
    | "2022ParagraphTitle3"
    | "2022Paragraph3"
    | "2022SubParagraph3"
    | "2022ParagraphTitle4"
    | "2022Paragraph4"
    | "2022SubParagraph4"
    | "2022ParagraphTitle5"
    | "2022Paragraph5"
    | "2022SubParagraph5"
    | "2021Date"
    | "2021Title"
    | "2021PressTitle"
    | "2021PressName1"
    | "2021PressName2"
    | "2021PressName3"
    | "2021PressName4"
    | "2021PressName5"
    | "2021PressName6"
    | "2021PressName7"
    | "2021PressName8"
    | "2021PressName9"
    | "2021PressName10"
    | "2021PressName11"
    | "2021PressName12"
    | "2021PressName13"
    | "2021PressName14"
    | "2021PressName15"
    | "2021PressName16"
    | "2021PressName17"
    | "2021ParagraphTitle1"
    | "2021Paragraph1"
    | "2021SubParagraph1"
    | "2021ParagraphTitle2"
    | "2021Paragraph2"
    | "2021SubParagraph2"
    | "2021ParagraphTitle3"
    | "2021Paragraph3"
    | "2021SubParagraph3"
    | "2021ParagraphTitle4"
    | "2021Paragraph4"
    | "2021SubParagraph4"
    | "2020Date"
    | "2020Title"
    | "2020PressTitle"
    | "2020PressName1"
    | "2020PressName2"
    | "2020PressName3"
    | "2020PressName4"
    | "2020PressName5"
    | "2020PressName6"
    | "2020PressName7"
    | "2020PressName8"
    | "2020PressName9"
    | "2020PressName10"
    | "2020PressName11"
    | "2020PressName12"
    | "2020PressName13"
    | "2020PressName14"
    | "2020PressName15"
    | "2020PressName16"
    | "2020PressName17"
    | "2020PressName18"
    | "2020PressName19"
    | "2020PressName20"
    | "2020PressName21"
    | "2020PressName22"
    | "2020ParagraphTitle1"
    | "2020Paragraph1"
    | "2020SubParagraph1"
    | "2020ParagraphTitle2"
    | "2020Paragraph2"
    | "2020SubParagraph2"
    | "2020ParagraphTitle3"
    | "2020Paragraph3"
    | "2020SubParagraph3"
    | "2020ParagraphTitle4"
    | "2020Paragraph4"
    | "2020SubParagraph4"

>()({ Festival })

export type I18n = typeof i18n