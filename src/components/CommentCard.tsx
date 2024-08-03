import { memo } from "react";
import Typo from "@mui/material/Typography";
import { tss } from "tss";

export type CommentCardProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    portraitSrc: string;
    portraitSources?: {
        srcSet: string;
        type: string;
    }[];
    paragraph: string;
    name: string;
    jobDesc: string;
};


export const CommentCard = memo((props: CommentCardProps) => {

    const {jobDesc, name, paragraph, portraitSources, portraitSrc, className } = props;

    const { classes, cx } = useStyles({
        "classesOverrides": props.classes
    });

    return <div className={cx(classes.root, className)}>
        <Typo className={classes.paragraph} variant="paragraph1">{paragraph}</Typo>
        <div className={classes.personWrapper}>
            <div className={classes.pictureWrapper}>
                <picture>
                    {
                        portraitSources !== undefined &&
                        portraitSources.map((source, index) => <source {...source} key={index} />)
                    }
                    <img className={classes.picture} src={portraitSrc} alt="portrait" />
                </picture>
            </div>
            <div className={classes.personDesc}>
                <Typo className={classes.name} variant="paragraph1">{name}</Typo>
                <Typo className={classes.jobDesc} variant="details">{jobDesc}</Typo>
            </div>
        </div>

    </div>
})


const useStyles = tss.withName("CommentCard").create(({ theme }) => {
    return ({
        "root": {
            "width": 550,
            "maxWidth": "100vw",
            "background": theme.palette.white.main,
            "boxShadow": theme.shadows[1],
            "borderRadius": 50,
            "padding": theme.spacing(4),
            "boxSizing": "border-box",
            [theme.breakpoints.down("md")]: {
                "padding": theme.spacing(5)
            }
        },
        "paragraph": {
            "marginBottom": theme.spacing(4)
        },
        "personWrapper": {
            "display": "flex"
        },
        "pictureWrapper": {
            "width": 55,
            "height": 55,
            "borderRadius": "50%",
            "overflow": "hidden",
            "position": "relative",
            "marginRight": theme.spacing(2)
        },
        "picture": {
            "width": "100%",
            "height": "100%",
            "objectFit": "cover"
        },
        "personDesc": {},
        "name": {
            "color": "black",
            "fontWeight": 900
        },
        "jobDesc": {}


    })
})