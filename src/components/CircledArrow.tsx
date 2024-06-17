import { memo } from "react";
import { tss } from "tss";
import { ReactSVG } from "react-svg";
import arrowSvg from "assets/svg/purple-arrow.svg";
import { useContext } from "theme";


export type CircledArrowProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    backgroundColor?: string;
    arrowColor?: string;
};





export const CircledArrow = memo((props: CircledArrowProps) => {
    const { theme } = useContext();
    const { className, backgroundColor, arrowColor = theme.palette.purple.main } = props;
    const { classes, cx } = useStyles({
        "classesOverrides": props.classes,
        backgroundColor,
        arrowColor
    })

    return <div
        className={cx(classes.root, className)}
    >
        <ReactSVG src={arrowSvg} className={classes.arrow} />

    </div>

})

const useStyles = tss
    .withParams<{ backgroundColor?: string; arrowColor: string; }>()
    .withName("CircledArrow").create(({ theme, backgroundColor, arrowColor }) => {
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
                "& svg": {
                    "fill": arrowColor
                }

            }

        })

    })