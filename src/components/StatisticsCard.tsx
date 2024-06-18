import { memo } from "react";
import { tss } from "tss";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";


export type StatisticsCardProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    stats: {
        statNumber: ReactNode;
        statSign: ReactNode;
        statDesc: ReactNode;
    }[];
};





export const StatisticsCard = memo((props: StatisticsCardProps) => {
    const { className, stats } = props;
    const { classes, cx } = useStyles({ "classesOverrides": props.classes })


    return <div
        className={cx(classes.root, className)}
    >
        {
            stats.map(({ statDesc, statNumber, statSign }, index) => <div key={index} className={classes.statWrapper}>
                {
                    index !== 0 &&
                    <div className={classes.decoLine}></div>
                }
                <div className={classes.stat}>
                    <div className={classes.statNumberAndSignWrapper}>
                        {
                            typeof statNumber === "string" ?
                            <Typography variant="cardNumber" className={classes.statNumber}>{statNumber}</Typography> :
                            statNumber
                        }
                        {
                            typeof statSign === "string" ?
                            <Typography variant="cardSign" className={classes.statNumber}>{statSign}</Typography> :
                            statSign

                        }
                    </div>
                    {

                        typeof statDesc === "string" ?
                            <Typography variant="smallText" className={classes.desc}>{statDesc}</Typography> :
                            statDesc
                    }
                </div>

            </div>)

        }
    </div>

})

const useStyles = tss
    .withName("StatisticsCard").create(({ theme }) => {
        return ({

            "root": {
                "position": "relative",
                "alignSelf": "self-start",
                "display": "inline-flex",
                "backgroundColor": theme.palette.white.main,
                "padding": theme.spacing(6),
                "borderRadius": theme.spacing(6),
                "boxShadow": theme.shadows[1],
                [theme.breakpoints.down("lg")]: {
                    "flexWrap": "wrap",
                },
                "boxSizing": "border-box",
                "gap": theme.spacing(6),
                "justifyContent": "center",

            },
            "statWrapper": {
                "flexGrow": 0,
                "display": "flex",
                "gap": theme.spacing(6),
                "justifyContent": "center",
                "alignItems": "center",
            },
            "decoLine": {
                "width": 1,
                "height": "100%",
                "borderLeft": `solid ${theme.palette.lightGray.main} 1px`,
                [theme.breakpoints.down("lg")]: {
                    "display": "none"
                },
            },
            "stat": {
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
            },
            "statNumberAndSignWrapper": {},
            "statNumber": {},
            "statSign": {},
            "desc": {
                //"width": theme.spacing(12),
                "textAlign": "center",
                "width": 120
                //"width": 12 * 8
            }
        })

    })