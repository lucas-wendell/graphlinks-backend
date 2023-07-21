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
    getUserLinks: {
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
  },
  Mutation: {},
};
