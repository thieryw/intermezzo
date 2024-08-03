import { memo, useState, useEffect, useRef } from "react";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";
import { tss } from "tss";
import { ReactSVG } from "react-svg";
import playSvg from "assets/svg/icons/play-icon.svg";
import ClearIcon from '@mui/icons-material/Clear';
import Youtube from "react-youtube";
import type { YouTubeProps } from "react-youtube/dist/YouTube";
import Typo from "@mui/material/Typography";


const transitionTime = 500;

export type VideoSecondaryProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    videoId: string;
    previewScr: string;
    playVideoMsg: string;
}


export const VideoSecondary = memo((props: VideoSecondaryProps) => {
    const {
        videoId,
        className,
        previewScr,
        playVideoMsg
    } = props;


    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
    const [zIndex, setZIndex] = useState<number | undefined>(undefined);

    const toggleLightBox = useCallbackFactory((
        [isOpen]: [boolean]
    ) => {
        setIsLightBoxOpen(isOpen)
    })

    useEffect(() => {
        if (!isLightBoxOpen) {
            return;
        }

        function handleEscape(e: KeyboardEvent) {
            if (e.code !== "Escape") {
                return;
            }

            setIsLightBoxOpen(false);
        }

        window.addEventListener("keydown", handleEscape);

        return () => window.removeEventListener("keydown", handleEscape);

    }, [isLightBoxOpen])

    useEffect(() => {
        (async () => {
            if (isLightBoxOpen) {
                setZIndex(5000);
                return;
            }

            await new Promise<void>(resolve => setTimeout(resolve, transitionTime))
            setZIndex(undefined);
        })()

    }, [isLightBoxOpen])

    const playerRef = useRef<any>(null);

    const onReady: YouTubeProps['onReady'] = (event) => {
        playerRef.current = event.target;
    };


    function handleVideo(state: "play" | "pause", playerRef: any) {
        if (playerRef.current === null) {
            return;
        };

        switch (state) {
            case "pause": playerRef.current.pauseVideo(); return;
            case "play": playerRef.current.playVideo();
        };

    }

    useEffect(()=>{
        if(playerRef.current === null){
            return;
        }

        if(isLightBoxOpen){
            handleVideo("play", playerRef);
            return;
        }
        handleVideo("pause", playerRef);

    }, [isLightBoxOpen, playerRef.current])



    const { cx, classes, theme } = useStyles({
        "classesOverrides": props.classes,
        isLightBoxOpen,
        zIndex
    });
    return <div
        className={cx(classes.root, className)}>
        <div className={classes.inner}>

            <video className={classes.video} autoPlay loop muted playsInline>
                <source 
                    src={previewScr}
                    type="video/mp4"
                />

            </video>
            <div className={classes.playCallToActionWrapper}>
                <div onClick={toggleLightBox(true)} className={classes.playCallToAction}>
                    <ReactSVG
                        src={playSvg}
                        className={classes.playIcon}
                    />
                    <Typo style={{ "color": theme.palette.white.main, "textDecoration": "underline" }} variant="paragraph1">{playVideoMsg}</Typo>

                </div>

            </div>
        </div>
        <div className={classes.lightBox}>
            <div onClick={toggleLightBox(false)}>
                <ClearIcon className={classes.closeIcon} />
            </div>
            {/*<iframe
                className={classes.iframe}
                src={iframeUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            >
            </iframe>*/}
            <Youtube
                className={classes.iframe}
                videoId={videoId}
                onReady={onReady}

            />

        </div>



    </div>
});

const useStyles = tss.withName("VideoSecondary").withParams<{ isLightBoxOpen: boolean; zIndex: number | undefined; }>().create(({ theme, isLightBoxOpen, zIndex }) => {
    return ({
        "root": {
            "position": "relative",

        },
        "inner": {
            "position": "relative",
            [theme.breakpoints.down("xs")]: {
                "width": "100vw",
            },
            "aspectRatio": 2.5
        },

        "video": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"
        },
        "playCallToActionWrapper": {
            "position": "absolute",
            "display": "flex",
            "bottom": theme.spacing(8),
            "right": theme.spacing(21),
            [theme.breakpoints.down("sm")]: {
                "bottom": 0,
                "right": 0,
                "width": "100%",
                "height": "100%",
                "justifyContent": "center",
                "alignItems": "center"
            }

        },
        "playCallToAction": {
            "display": "flex",
            "alignItems": "center",
            ":hover": {
                "cursor": "pointer"
            },
        },
        "clickableWrapper": {
            "position": "absolute",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "width": "100%",
            "height": "100%",
            "top": 0,
            "left": 0
        },
        "playIcon": {
            "marginRight": theme.spacing(1),
            "& svg": {
                "fill": theme.palette.white.main,
                "transition": "fill 600ms, transform 600ms",
                "width": 40,
                "height": 40
            },
            ":hover": {
                "& svg": {
                    "fill": theme.palette.lightOrange.main,
                    "transform": "scale(1.02)",
                },
                "cursor": "pointer"


            }
        },
        "lightBox": {
            "position": "fixed",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "top": 0,
            "left": 0,
            "width": "100vw",
            "height": "100vh",
            "background": "rgba(0, 0, 0, 0.92)",
            "opacity": isLightBoxOpen ? 1 : 0,
            "transform": isLightBoxOpen ? undefined : "scale(0.7)",
            "transition": `opacity ${transitionTime}ms, transform ${transitionTime}ms`,
            "pointerEvents": isLightBoxOpen ? undefined : "none",
            zIndex,
            ...(() => {
                const value = theme.spacing(5);
                return {
                    "paddingRight": value,
                    "paddingLeft": value,
                }
            })(),
            "boxSizing": "border-box"
        },
        "closeIcon": {
            "position": "absolute",
            "top": theme.spacing(11),
            "right": theme.spacing(11),
            "width": theme.spacing(8),
            "height": theme.spacing(8),
            "fill": "white",
            "transition": "fill 600ms, transform 600ms",
            ":hover": {
                "fill": theme.palette.lightOrange.main,
                "transform": "scale(1.1) rotate(360deg)",
                "cursor": "pointer"


            }

        },
        "iframe": {
            "& iframe": {
                "maxWidth": "100vw",
                "width": theme.spacing(100),
                "height": theme.spacing(50),
                "border": "none",

            }
        }

    })
})