import { memo } from "react";
import { declareComponentKeys } from "i18nifty";
import { Logo } from "components/Logo";
import logoSvg from "assets/svg/footer/footer-logo.svg";
/*import fbSvg from "assets/svg/footer/fb-transparent.svg";
import instaSvg from "assets/svg/footer/insta-transparent.svg";
import ytSvg from "assets/svg/footer/yt-transparent.svg";*/
import { tss } from "tss";




export const Footer = memo(() => {

	const {classes, theme} = useStyles();

	return <footer className={classes.root}>
		<div className={classes.inner}>
			<Logo
				logoUrl={logoSvg}
				width={parseInt(theme.spacing(26))}
			/>

		</div>

	</footer>
})

const useStyles = tss.withName("Footer").create(({ theme }) => {
	return ({
		"root": {
			...(()=>{
				const value = theme.spacing(11);
				return {
					"paddingLeft": value,
					"paddingRight": value
				}
			})()
		},
		"inner": {

			"background": theme.palette.gradient2.main,
			...(() =>{
				const brValue = theme.spacing(10);
				const padding = theme.spacing(21);
				return {
					"borderTopLeftRadius": `${brValue} ${brValue}`,
					"borderTopRightRadius": `${brValue} ${brValue}`,
					"paddingLeft": padding,
					"paddingRight": padding
				}
			})(),
			"paddingTop": theme.spacing(16),
			"paddingBottom": theme.spacing(19)
		}

	})
})

const { i18n } = declareComponentKeys<
	| "siteTitle"
	| "copyRight"
	| "descriptiveTitle"
	| "descriptiveTitleItalic"
	| "assoLink"
	| "passCultureLink"
	| "partnerLink"
	| "recitalPLink"
	| "festivalLink"
	| "contactLink"
	| "assoTitle"
	| "assoAddressLine1"
	| "assoAddressLine2"
	| "assoEmail"
	| "legalLink"
	| "siteDesigner"
>()({ Footer });

export type I18n = typeof i18n;