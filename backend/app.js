const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config.js");
const CSVtoDB = require("./utils/CSVtoDB");

const PORT = process.env.port || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database..");
    return server.listen({ port: PORT });
  })
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch((err) => console.error(err));

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error"));

// server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
