"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async create(ctx) {
    const { id } = ctx.state.user;
    ctx.request.body.data = {
      ...ctx.request.body.data,
      user: id,
    };

    // @ts-ignore
    const response = await super.create(ctx);

    return response;
  },
}));
