"use strict";
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

module.exports = {
  register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");

    extensionService.use(({ strapi }) => ({
      typeDefs: typeDefs,
      resolvers: {
        Query: { ...resolvers.Query },
        Mutation: { ...resolvers.Mutation },
      },
      resolversConfig: {
        "Query.getTitles": {
          auth: true,
        },
        "Query.findUserLinks": {
          auth: true,
        },
        "Query.findOneUserLink": {
          auth: true,
        },
        "Mutation.customCreateLink": {
          auth: true,
        },
        "Mutation.customDeleteLink": {
          auth: true,
        },
        "Mutation.customUpdateLink": {
          auth: true,
        },
      },
    }));
  },
  bootstrap(/*{ strapi }*/) {},
};
