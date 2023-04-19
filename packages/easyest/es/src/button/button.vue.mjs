import { defineComponent as t, computed as u, openBlock as s, createElementBlock as a, normalizeClass as l, unref as p, renderSlot as c } from "vue";
import "./style/index.less.mjs";
const m = t({ name: "ea-button" }), d = /* @__PURE__ */ t({
  ...m,
  props: {
    type: null
  },
  setup(e) {
    const o = e, n = u(() => ({ [`ea-button--${o.type}`]: "buttonProps.type" }));
    return (r, b) => (s(), a("button", {
      class: l(["ea-button", p(n)])
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
