import { memo } from "react";
import { tss } from "tss";


export type LoopedVideoProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>
    src: string;
    width: number;
    height: number;
}


export const LoopedVideo = memo((props: LoopedVideoProps)=>{
    const {height, src, width, className} = props;
    const {cx, classes} = useStyles({
        "classesOverrides": props.classes,
        width,
        height
    })
    return <div className={cx(classes.root, className)}>
        <video className={classes.video} autoPlay loop muted playsInline>
            <source src={src} type="video/mp4" />
        </video>
    </div>
})

const useStyles = tss.withName("LoopedVideos").withParams<Pick<LoopedVideoProps, "width" | "height">>().create(({height, width, theme}) => {
    return ({
        "root": {
            width,
            height,
            "overflow": "hidden",
            "position": "relative",
            "maxWidth": "100vw",
            "maxHeight": `${(height / width) * 100}vw`
        },
        "video": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"

        }
    })
})

