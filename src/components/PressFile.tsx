import { memo } from "react";
import { tss } from "tss";
import { ReactSVG } from "react-svg";
import Typo from "@mui/material/Typography";
import dlIcon from "assets/svg/downloadIcon.svg";

export type PressFileProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    socialIcons: {
        iconSrc: string;
        href?: string;
    }[];
    organizations: string [];
    download?: string;
    link: {
        label: string;
        href: string;
        onClick?: () => void;

    }

};


export const PressFile = memo((props: PressFileProps) => {
    const {link, organizations, socialIcons, className, download } = props;
    const {classes, cx} = useStyles({
        "classesOverrides": props.classes
    });
    return <div className={cx(classes.root, className)}>
        <div className={classes.linkWrapper}>
            <a href={link.href} download={download} onClick={link.onClick} className={classes.link}>
                <ReactSVG
                    src={dlIcon}
                    className={classes.linkIcon}
                />
                <Typo className={classes.linkLabel} variant="paragraph1">{link.label}</Typo>

            </a>
        </div>

        <div className={classes.organizations}>
            {
                organizations.map((orga) => <Typo className={classes.organization} key={orga} variant="italicP">{orga}</Typo>)
            }
        </div>

        <div className={classes.socialIcons}>
            {
                socialIcons.map(({iconSrc, href}, index) => <a href={href}><ReactSVG key={index} className={classes.socialIcon}  src={iconSrc}/></a>)
            }
        </div>
    </div>
});

const useStyles = tss.withName("PressFile").create(({ theme }) => {

    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",

        },
        "linkWrapper": {
            "marginBottom": theme.spacing(5)
        },
        "link": {
            "display": "flex",
            "alignItems": "center",
            "textDecoration": "none"

        },
        "linkLabel": {
            "color": theme.palette.lightOrange.main,
            "textDecoration": "underline"
        },
        "linkIcon": {
            "marginRight": theme.spacing(2),
            "& svg": {
                "width": 24,
                "height": 24
            }
        },
        "organizations": {
            "marginBottom": theme.spacing(5)
        },
        "organization": {},
        "socialIcons": {
            "display": "flex",
            "alignItems": "center",
            "position": "relative",
            "right": theme.spacing(1)
        },
        "socialIcon": {
            "& svg": {
                "width": 30,
            },
            ...(()=>{
                const value  = theme.spacing(1);
                return {
                    "marginLeft": value,
                    "marginRight": value
                }
            })()
        },


    })

})