import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const MachineType = new GraphQLObjectType({
  name: "Machine",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: () => "", // Query DB here
    },
    name: {
      type: GraphQLString,
      resolve: () => "", // Query DB here
    },
  }),
});

const AreaType = new GraphQLObjectType({
  name: "Area",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: () => "",
    },
    name: {
      type: GraphQLString,
      resolve: () => "",
    },
    machines: {
      type: new GraphQLList(MachineType),
    },
  }),
});

const Query = new GraphQLObjectType({
  name: "query",
  fields: {
    machine: {
      type: MachineType,
      resolve: () => "", // Query DB here
    },
    machines: {
      type: new GraphQLList(MachineType),
      resolve: () => ["", ""], // Query DB here
    },
    area: {
      type: AreaType,
      resolve: () => {
        // Query DB here for areas
        return {
          id: "",
          name: "",
          machines: ["", ""],
        };
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: Query,
});