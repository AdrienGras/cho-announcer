import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4e165476.js","app":"_app/immutable/entry/app.f98d291f.js","imports":["_app/immutable/entry/start.4e165476.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.c53ac656.js","_app/immutable/entry/app.f98d291f.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5f78d3a3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
