import { createRouter, defineRoute } from "type-route";
import { makeThisModuleAnExecutableRouteLister } from "github-pages-plugin-for-type-route";
import type { RouterOpts } from "type-route";


const opts: RouterOpts = {
	"scrollToTop": true,
}

const publicUrl = import.meta.env.BASE_URL;


export const routeDefs = {
	"home": defineRoute(publicUrl),
	"pc": defineRoute(publicUrl + "pass-culture"),
	"mediation": defineRoute(publicUrl + "mediation"),
	"rp": defineRoute(publicUrl + "recital-production"),
	"festival": defineRoute(publicUrl + "festival"),
    "contact": defineRoute(publicUrl + "contact"),
	"legal": defineRoute(publicUrl + "legal"),
    "test": defineRoute(publicUrl + "test")
};


makeThisModuleAnExecutableRouteLister(routeDefs);

export const { RouteProvider, routes, useRoute } = createRouter(opts,
	routeDefs
);

export const social = {
	"facebook": "https://www.facebook.com/intermezzobordeaux",
	"insta": "https://www.instagram.com/intermezzo_bordeaux/",
	"youtube": "https://www.youtube.com/@associationintermezzo8897",
}

