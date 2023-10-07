import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.f7a8b0b1.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5f78d3a3.js"];
export const stylesheets = ["_app/immutable/assets/2.95b16411.css"];
export const fonts = [];
