"use strict";

/**
 * link controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::link.link", ({ strapi }) => ({
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
  async update(ctx) {
    // @ts-ignore
    const response = await super.update(ctx);

    return response;
  },
  async delete(ctx) {
    // @ts-ignore
    const response = await super.delete(ctx);

    return response;
  },
}));
