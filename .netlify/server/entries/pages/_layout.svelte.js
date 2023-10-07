import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto px-5 py-5">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
