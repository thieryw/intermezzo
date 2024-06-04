import { memo } from "react";
import { tss } from "tss";
import { ReactSVG } from "react-svg";
import arrowSvg from "assets/svg/purple-arrow.svg";


export type CircledArrowProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    backgroundColor?: string;
};





export const CircledArrow = memo((props: CircledArrowProps) => {
    const { className, backgroundColor } = props;
    const { classes, cx } = useStyles({
        "classesOverrides": props.classes,
        backgroundColor,

    })


    return <div
        className={cx(classes.root, className)}
    >
        <ReactSVG src={arrowSvg} className={classes.arrow}  />

    </div>

})

const useStyles = tss
    .withParams<{ backgroundColor?: string; }>()
    .withName("CircledArrow").create(({ theme, backgroundColor }) => {
        return ({
            "root": {
                "display": "flex",
                "width": 100,
                "height": 100,
                "backgroundColor": backgroundColor ?? theme.palette.pink.main,
                "borderRadius": "50%",
                "alignItems": "center",
                "justifyContent": "center"

            },
            "arrow": {

            }

        })

    })