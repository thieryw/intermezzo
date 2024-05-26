import { memo } from "react";
import { tss } from "tss";
import { keyframes } from "tss-react";




export const BlurryBackground = memo((props: {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    animationPlaying?: boolean;
}) => {
    const { className, animationPlaying = true } = props;
    const { classes, cx } = useStyles({ "classesOverrides": props.classes, animationPlaying });
    return <div className={cx(classes.root, className)}>
        <div className={classes.gradientContainer}>
            <div className={cx(classes.g, classes.g1)}></div>
            <div className={cx(classes.g, classes.g2)}></div>
            <div className={cx(classes.g, classes.g3)}></div>

        </div>

    </div>
})

const useStyles = tss.withName("BlurryBackground").withParams<{animationPlaying: boolean}>().create(({animationPlaying}) => {
    return ({
        "root": {
            "width": "100vw",
            "height": "100vh",
            "position": "fixed",
            "overflow": "hidden",
            "top": 0,
            "left": 0,
            "pointerEvents": "none"

        },
        "gradientContainer": {
            "filter": "blur(80px)",
            "width": "100%",
            "height": "100%"

        },
        "g": {
            "position": "absolute",
            "mixBlendMode": "hard-light",
            "width": 500,
            "height": 700
        },
        "g1": {
            "background": "radial-gradient(circle at center, rgba(253, 110, 52, 0.8) 0, rgba(253, 110, 52, 0) 50%) no-repeat",
            "transformOrigin": "center center",
            "top": 0,
            "right": "10%",
            "animation": !animationPlaying ? "none" : `${keyframes`
            0% {
                transform: rotate(0deg) translateX(-50%);
            }
            50% {
                transform: rotate(180deg) translateX(50%);
            }
            100% {
                transform: rotate(360deg) translateX(-50%);
            }
            `} infinite ease 30s`,
            "opacity": 0.5
        },
        "g2": {
            "background": "radial-gradient(circle at center, rgba(76,51,147, 0.8) 0, rgba(76,51,147, 0) 50%) no-repeat",
            "transformOrigin": "calc(50% - 400px)",
            "top": 0,
            "right": "40%",
            "animation": !animationPlaying ? "none" : `${keyframes`
            0% {
                transform: translateY(-50%);
            }
            50% {
                transform: translateY(50%);
            }
            100% {
                transform: translateY(-50%);

            }
            `} infinite ease 30s`,
            "opacity": 0.35

        },
        "g3": {
            "background": "radial-gradient(circle at center, rgba(139,80,234, 0.8) 0, rgba(139,80,234, 0) 50%) no-repeat",
            "transformOrigin": "calc(50% + 400px)",
            "top": "50%",
            "right": "30%",
            "animation": !animationPlaying ? "none" : `${keyframes`,
            0% {
                transform: translateX(-50%) translateY(-10%);
            }
            50% {
                transform: rotate(50%) translateY(10%);
            }
            100% {
                transform: rotate(-50%) translateY(-10%);

            }
            `} infinite ease 30s`,
            "opacity": 0.35

        }
    })
})