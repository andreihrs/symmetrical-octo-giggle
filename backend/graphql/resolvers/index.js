const postsResolvers = require("./posts");
//const employeesResolvers = require("./employees");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
