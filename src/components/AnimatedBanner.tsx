import { memo, useEffect, useState, useRef } from "react";
import { tss } from "tss";
import { useDomRect } from "powerhooks/useDomRect";


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
    const { domRect: { width }, ref: imageSetRef1} = useDomRect();
    const imageSetRef2 = useRef<HTMLDivElement>(null);
    const imageSetRef3 = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState(1)
    const { classes, cx} = useStyles({ "classesOverrides": props.classes });

    useEffect(()=>{
        if(
            imageSetRef1.current === null || 
            imageSetRef2.current === null || 
            imageSetRef3.current === null ||
            width === 0
        ){
            return;
        }

        /*const style1 = (imageSetRef1.current as HTMLDivElement).style;
        const style2 = (imageSetRef2.current as HTMLDivElement).style;
        const style3 = (imageSetRef3.current as HTMLDivElement).style;*/




    }, [position, width]);

    useEffect(() => {
        let positionTemp = position;
        const interval = setInterval(() => {
            if (positionTemp === 3) {
                setPosition(1);
                positionTemp = 1;
                return;
            }

            setPosition(positionTemp + 1);
            positionTemp++


        }, 2000)

        return () => clearInterval(interval)

    }, [])


    return <div className={cx(classes.root, className)}>
        {
            [imageSetRef1, imageSetRef2, imageSetRef3].map((ref, index) => <div
                ref={ref} className={classes.logoSet}
                key={index}
                style={{
                    "border": `solid ${
                        (()=>{
                            if(index === 0){
                                return "red";
                            }
                            if(index === 1){
                                return "orange";
                            }
                            return "green"
                        })()
                    } 2px`
                }}
            >
                {
                    images.map(({ src, alt }) => <img key={src} src={src} alt={alt} />)
                }
            </div>)
        }

    </div>
})


const useStyles = tss.withName("AnimatedBanner").create(({ theme }) => {

    return ({
        "root": {
            "display": "flex",
            "overflow": "hidden",

        },
        "logoSet": {
            "display": "flex",
            "gap": theme.spacing(20),
            ...(()=>{
                const value = parseInt(theme.spacing(20)) / 2
                return {
                    "marginLeft": value,
                    "marginRight": value
                }
            })()

        }


    })
})