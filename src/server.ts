import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { resolvers } from "./resolvers";
import fs from "fs";
import path from "path";

const schemaDirectory = path.join(__dirname, "schema");
const typeDefs = fs
  .readdirSync(schemaDirectory)
  .filter((file) => file.endsWith(".graphql"))
  .map((file) => fs.readFileSync(path.join(schemaDirectory, file), { encoding: "utf-8" }))
  .join("\n");

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  const PORT = 4000;
  
  app.use("/graphql", (req, res, next) => {
    console.log("Received request:", req.method, req.url);
    next();
}, cors(), bodyParser.json(), expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
};
startServer();