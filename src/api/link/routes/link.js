"use strict";

/**
 * link router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::link.link", {
  config: {
    find: {
      policies: ["api::link.is-logged-in"],
    },
  },
});
