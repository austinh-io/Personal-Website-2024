export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/personal_website.png","images/portrait.png","images/portrait_transbg.png","images/portrait_transbg_nooutline.png","images/rtt_wordguess.png","images/simple_ecom.png","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.LMu05Kmz.js","app":"_app/immutable/entry/app.OExsEXfn.js","imports":["_app/immutable/entry/start.LMu05Kmz.js","_app/immutable/chunks/scheduler.jt5NCvpz.js","_app/immutable/chunks/singletons.wjq-xS5P.js","_app/immutable/chunks/index.LRxaQyz2.js","_app/immutable/entry/app.OExsEXfn.js","_app/immutable/chunks/scheduler.jt5NCvpz.js","_app/immutable/chunks/index.jApGY5fW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/rss",
				pattern: /^\/api\/rss\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/rss/_server.ts.js'))
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
