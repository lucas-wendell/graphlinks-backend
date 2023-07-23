module.exports = `
  type Query {
    getTitles(msg: String!): [LinkTitle]
    findUserLinks: [LinkEntity]
    findOneUserLink(id: ID!): LinkEntity
  }

  type Mutation {
    customCreateLink(input: LinkInput): Link
  }

  type LinkTitle {
    id: ID
    title: String
    msg: String
  }

  type FilteredLink {
    id: ID
    content: String
    link: String
    svgIcon: String
    createdAt: String
    updatedAt: String
    isActive: Boolean
    title: String
  }
`;
