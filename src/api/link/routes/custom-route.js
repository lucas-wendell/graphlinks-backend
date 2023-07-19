module.exports = {
  routes: [
    {
      method: "GET",
      path: "/links",
      handler: "link.find",
      config: {
        policies: ["is-logged-in"],
      },
    },
  ],
};
