import { memo } from "react";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "i18n";
import { Logo } from "components/Logo";
import logoSvg from "assets/svg/footer/footer-logo.svg";
import fbSvg from "assets/svg/footer/fb-transparent.svg";
import instaSvg from "assets/svg/footer/insta-transparent.svg";
import ytSvg from "assets/svg/footer/yt-transparent.svg";
import { tss } from "tss";
import Typography from "@mui/material/Typography";
import { MenuLink } from "components/MenuLink";
import type { Link } from "tools/link";




export const Footer = memo(() => {

	const { classes, theme } = useStyles();
	const { t } = useTranslation("Footer");
	const links: Link[] = [
		{
			"href": "",
			"label": t("assoLink")
		},
		{
			"href": "",
			"label": t("passCultureLink")
		},
		{
			"href": "",
			"label": t("partnerLink")
		},
		{
			"href": "",
			"label": t("recitalPLink")
		},
		{
			"href": "",
			"label": t("festivalLink")
		},
		{
			"href": "",
			"label": t("contactLink")
		},
	];


	return <footer className={classes.root}>
		<div className={classes.outer}>

			<div className={classes.inner}>
				<div className={classes.titleAndLogo}>
					<div className={classes.logoWrapper}>
						<Logo
							className={classes.logo}
							logoUrl={logoSvg}
							width={204}
						/>

						<div className={classes.copyRightWrapper}>

							<Typography className={classes.copyRight} variant="details">{t("copyRight")}</Typography>
							<Typography className={classes.copyRight} variant="details">{t("copyRightLine2")}</Typography>
						</div>
					</div>
					<div className={classes.descTitleWrapper}>

						<Typography className={classes.descTitle} variant="heading2">{t("descriptiveTitle")}</Typography>
						<Typography className={classes.descTitle} variant="heading2">{t("descriptiveTitleLine2")} <span className={classes.descTitleItal}>{t("descriptiveTitleItalic")}</span></Typography>
					</div>


				</div>
				<div className={classes.contentWrapper}>
					<ul className={classes.links}>
						{
							links.map(link => <MenuLink
								key={link.label}
								classes={{
									"text": classes.link
								}}
								{...link}
								variants="secondary"
								isActive={false}
							/>)
						}
					</ul>
					<div className={classes.addressWrapper}>
						{
							[
								t("assoTitle"),
								t("assoAddressLine1"),
								t("assoAddressLine2"),
								t("assoEmail")
							].map((asso, index) => {
								if (index === 3) {
									return <Typography
										variant="paragraph1"
										key={index}
									>
										<a
											href={`mailto:${asso}`}
											style={{ "color": theme.palette.white.main }}
										>
											{asso}
										</a>
									</Typography>
								}
								return <Typography key={index} style={{ "color": theme.palette.white.main }} variant="paragraph1">{asso}</Typography>
							})
						}
					</div>
					<div className={classes.socialLegalDesign}>
						<div className={classes.socialWrapper}>
							{
								[
									fbSvg,
									instaSvg,
									ytSvg,
								].map(svg => <Logo
									key={svg}
									logoUrl={svg}
									width={30}
								/>)
							}

						</div>
						<div className={classes.legalDesignWrapper}>
							<Typography variant="details">
								<a
									href=""
									style={{ "color": theme.palette.white.main }}
								>
									{t("legalLink")}
								</a>
							</Typography>
							{
								(window.innerWidth < theme.breakpoints.values.md) &&
								<Typography className={classes.copyRight} variant="details">{t("copyRight")}</Typography>
							}
							<Typography
								variant="details"
								style={{ "color": theme.palette.lightGray.main }}
							>
								{t("siteDesigner")} <a
									href=""
									style={{ "color": theme.palette.white.main }}
								>
									{t("ideaArtLink")}
								</a>

							</Typography>
						</div>

					</div>

				</div>

			</div>
		</div>

	</footer>
})

const useStyles = tss.withName("Footer").create(({ theme }) => {
	return ({
		"root": {
			"position": "relative",
			...(() => {
				const value = theme.spacing(11);
				return {
					"paddingLeft": value,
					"paddingRight": value,
					[theme.breakpoints.down("md")]: {
						"padding": 0

					}
				}
			})(),

		},
		"outer": {
			"display": "flex",
			"justifyContent": "center",
			"background": theme.palette.gradient2.main,
			...(()=>{
				const value = theme.spacing(10);
				return {
					"borderTopLeftRadius": `${value} ${value}`,
					"borderTopRightRadius": `${value} ${value}`,
				}
			})(),
			[theme.breakpoints.down("md")]: {

				"borderTopLeftRadius": 0,
				"borderTopRightRadius": 0,
			}

		},
		"inner": {
			"width": "100%",
			"maxWidth": theme.breakpoints.values.xl,
			"paddingTop": theme.spacing(16),
			"paddingBottom": theme.spacing(19),
			"boxSizing": "border-box",
			...(() => {
				const padding = theme.spacing(21);
				return {
					"paddingLeft": padding,
					"paddingRight": padding,
				}
			})(),
			[theme.breakpoints.down("md")]: {
				"paddingLeft": 0,
				"paddingRight": 0,
				"paddingTop": theme.spacing(28),
				"paddingBottom": theme.spacing(28)
			},
		},
		"titleAndLogo": {
			"display": "flex",
			"alignItems": "flex-end",
			[theme.breakpoints.down("md")]: {
				"justifyContent": "center"
			}

		},
		"descTitle": {
			"color": theme.palette.white.main,
			[theme.breakpoints.down("md")]: {
				"display": "none"
			}
		},
		"descTitleWrapper": {
			"display": "flex",
			"flexDirection": "column"

		},
		"descTitleItal": {
			...theme.typography.highLight2
		},
		"logoWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"marginRight": theme.spacing(18),
			[theme.breakpoints.down("md")]: {
				"marginRight": 0
			}
		},
		"logo": {
			"marginBottom": theme.spacing(5)
		},
		"copyRightWrapper": {
			"display": "flex",
			"flexDirection": "column",
			[theme.breakpoints.down("md")]: {
				"display": "none"
			}

		},
		"copyRight": {
			"color": theme.palette.lightGray.main,
		},
		"contentWrapper": {
			"display": "flex",
			"marginTop": theme.spacing(11),
			"gap": theme.spacing(11),
			"justifyContent": "flex-end",
			"flexWrap": "wrap",
			[theme.breakpoints.down("md")]: {
				"marginTop": theme.spacing(17),
				"flexDirection": "column",
				"alignItems": "center",
				"gap": theme.spacing(17),
			}
		},
		"links": {
			"display": "flex",
			"flexDirection": "column",
			"gap": theme.spacing(2),
			"paddingInlineStart": 0,
			[theme.breakpoints.down("md")]: {
				"alignItems": "center",
				"marginRight": theme.spacing(10),
				"gap": theme.spacing(6)
			}
		},
		"link": {
			"color": theme.palette.white.main

		},

		"addressWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"gap": theme.spacing(2),
			"marginTop": theme.spacing(3),
			[theme.breakpoints.down("md")]: {
				"display": "none"
			}
		},

		"socialLegalDesign": {
			"marginTop": theme.spacing(2),
			[theme.breakpoints.down("md")]: {
				"display": "flex",
				"flexDirection": "column",
				"alignItems": "center",
				"gap": theme.spacing(17)
			}
		},
		"socialWrapper": {
			"display": "flex",
			"gap": theme.spacing(4),
			"alignItems": "center",
			"marginBottom": theme.spacing(6),
			[theme.breakpoints.down("md")]: {
				"gap": theme.spacing(8)
			}
		},
		"legalDesignWrapper": {
			[theme.breakpoints.down("md")]: {
				"display": "flex",
				"gap": theme.spacing(3),
				"flexDirection": "column",
				"alignItems": "center"
			}
		}


	})
})

const { i18n } = declareComponentKeys<
	| "siteTitle"
	| "copyRight"
	| "copyRightLine2"
	| "descriptiveTitle"
	| "descriptiveTitleLine2"
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
	| "ideaArtLink"
>()({ Footer });

export type I18n = typeof i18n;