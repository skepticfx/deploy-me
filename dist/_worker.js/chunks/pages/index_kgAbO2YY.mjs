globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createComponent, r as renderTemplate, f as addAttribute, h as renderHead, i as renderSlot, g as createAstro, j as renderComponent, m as maybeRenderHead } from '../astro_CeVjLgDQ.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/tmp/deploy-me/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const comment = "Your comment here";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6> Deploy me</h1> <p class="instructions" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>With comment</strong> ${comment}.
</p> </main> ` })} `;
}, "/tmp/deploy-me/src/pages/index.astro", void 0);
const $$file = "/tmp/deploy-me/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
