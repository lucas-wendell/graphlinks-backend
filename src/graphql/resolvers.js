module.exports = {
  Query: {
    getTitles: {
      resolve: async (parent, args, context) => {
        const user = context.state.user;

        const data = await strapi.entityService.findMany("api::link.link", {
          filters: {
            user: {
              id: user.id,
            },
          },
        });

        return data.map((link) => ({
          title: link.title,
          id: link.id,
          msg: args.msg,
        }));
      },
    },
    findUserLinks: {
      resolve: async (_, __, context) => {
        const user = context.state.user;
        const data = await strapi.entityService.findMany("api::link.link", {
          filters: {
            user: {
              id: user.id,
            },
          },
        });

        return data;
      },
    },
    findOneUserLink: {
      resolve: async (_, args, context) => {
        const { id } = args;
        const { query } = context;

        const user = context.state.user;
        const links = await strapi.entityService.findMany("api::link.link", {
          filters: {
            user: {
              id: user.id,
            },
          },
        });

        const isValidId = links.some((link) => link.id === Number(id));
        const entity = await strapi
          .service("api::link.link")
          .findOne(id, query);

        if (isValidId) return entity;
      },
    },
  },
  Mutation: {
    customCreateLink: {
      resolve: async (_, args, context) => {
        const { id } = context.state.user;
        const data = { ...args.input, user: id };
        const entry = await strapi.entityService.create("api::link.link", {
          data: {
            ...data,
          },
        });

        return entry;
      },
    },
    customDeleteLink: {
      resolve: async (_, args, context) => {
        const user = context.state.user;
        const links = await strapi.entityService.findMany("api::link.link", {
          filters: {
            user: {
              id: user.id,
            },
          },
        });
        const isValidId = links.some((link) => link.id === Number(args.id));

        if (isValidId) {
          const entity = await strapi.service("api::link.link").delete(args.id);
          return entity;
        }
      },
    },
    customUpdateLink: {
      resolve: async (_, args, ctx) => {
        const user = ctx.state.user;
        const data = { ...args.input };

        const links = await strapi.entityService.findMany("api::link.link", {
          filters: {
            user: {
              id: user.id,
            },
          },
        });
        const isValidId = links.some((link) => link.id === Number(args.id));

        if (isValidId) {
          const response = await strapi
            .service("api::link.link")
            .update(args.id, { data: { ...data } });
          return response;
        }
      },
    },
  },
};
