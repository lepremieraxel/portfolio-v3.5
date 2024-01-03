import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "axel-portfolio-v3",
  clientConfig: {
    defaultParams: { routes: [{ type: "portfolio_item", path: "/work/:uid" }] },
  },
});

export default prismic;
