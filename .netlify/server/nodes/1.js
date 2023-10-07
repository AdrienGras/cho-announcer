

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.440fea6c.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5f78d3a3.js","_app/immutable/chunks/singletons.02247b02.js"];
export const stylesheets = [];
export const fonts = [];
