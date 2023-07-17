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
    console.log(response);
    console.log(ctx);

    return response;
  },
  async delete(ctx) {
    // @ts-ignore
    const response = await super.delete(ctx);

    return response;
  },
  async find(ctx) {
    const user = ctx.state.user;
    const data = await strapi.entityService.findMany("api::link.link", {
      filters: {
        user: {
          id: user.id,
        },
      },
    });
    return data;
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service("api::link.link").findOne(id, query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
