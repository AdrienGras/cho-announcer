

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.44cd2fff.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5f78d3a3.js"];
export const stylesheets = ["_app/immutable/assets/0.e4d61aab.css"];
export const fonts = [];
