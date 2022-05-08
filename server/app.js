import express from "express";
import cors from "cors";

import { graphqlHTTP } from "express-graphql";

import { schema } from "./src/schema.js";

const app = express();
app.use(cors());
app.use(graphqlHTTP({
  schema,
}));

app.listen(3000, () => console.log("Server started on port 3000"));