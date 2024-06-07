import { memo, useEffect, useState } from "react";
import { tss } from "tss";
import { useInView } from "react-intersection-observer";


export type PictureAnimatorProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    src: string;
    sources?: {srcSet: string; type: string}[];
    alt?: string;
    animationDelay?: number;
    width: number;
    height: number;
    borderRadius: string;
}

export const PictureAnimator = memo((props: PictureAnimatorProps) => {
    const { className, src, sources, alt, animationDelay = 0, width, height, borderRadius } = props;
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.4 })
    const [isImageVisible, setIsImageVisible] = useState(inView);


    useEffect(() => {
        if (inView) {
            setIsImageVisible(true)
        }

    }, [inView])

    const { classes, cx } = useStyles({
        "inView": isImageVisible,
        "classesOverrides": props.classes,
        animationDelay,
        width,
        height,
        borderRadius
    });

    return <div ref={ref} className={cx(classes.root, className)}>

        <div className={classes.animatedDiv}>
            <picture>
                {
                    sources?.map((source, index) => <source key={index} {...source} />)
                }
                <img className={classes.image} /*ref={imageRef}*/ src={src} alt={alt} />

            </picture>

        </div>
    </div>

})

const useStyles = tss.withParams<
    {
        inView: boolean;
        animationDelay: number;
        width: number;
        height: number;
        borderRadius: string;
    }
>().create(({ inView, animationDelay, borderRadius, height, width }) => {

    return ({
        "root": {
            "position": "relative",
            width,
            height,
            borderRadius,
            "overflow": "hidden",
            "maxWidth": "100vw",
            "maxHeight": "85vw"
        },
        "animatedDiv": {

            "position": "absolute",
            "whiteSpace": "nowrap",
            "width": inView ? width : 0,
            "transition": "width 1000ms",
            "transitionDelay": `${animationDelay}ms`,
            "overflow": "hidden",
            height
        },
        "image": {
            "transform": `scale(${inView ? 1 : 1.2})`,
            "transition": "transform 1000ms",
            "transitionDelay": `${animationDelay}ms`,
            "width": width,
            "height": height,
            "maxWidth": "100vw",
            "maxHeight": "85vw",
            "objectFit": "cover"
        }
    })
})