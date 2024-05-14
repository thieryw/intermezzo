import { memo } from "react";
import { tss } from "tss";
import { keyframes } from "tss-react";


export type AnimatedBannerProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    images: {
        src: string;
        alt?: string;
    }[]
}

export const AnimatedBanner = memo((props: AnimatedBannerProps) => {

    const { images, className } = props;
    const { classes, cx } = useStyles({ "classesOverrides": props.classes });


    return <div className={cx(classes.root, className)}>
        {
            Array.from({ "length": 6 }).map((_, index) => <div key={index} className={classes.logoSlider}>
                {
                    images.map(({ src, alt }) => <img className={classes.image} key={src} src={src} alt={alt} />)
                }
            </div>)
        }

    </div>
})


const useStyles = tss.withName("AnimatedBanner").create(({ theme }) => {
    const gap = theme.spacing(10);

    return ({
        "root": {
            "overflow": "hidden",
            "display": "flex",

        },
        "logoSlider": {
            "display": "flex",
            "animation": `${keyframes`
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
            `} 30s infinite linear`,
        },
        "image": {
            "marginLeft": gap,
            "marginRight": gap

        }


    })
})