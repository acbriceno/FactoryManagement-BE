"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Message",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Machine",
    embedded: false
  },
  {
    name: "Connection",
    embedded: false
  },
  {
    name: "ValueType",
    embedded: false
  },
  {
    name: "Unit",
    embedded: false
  },
  {
    name: "Operation",
    embedded: false
  },
  {
    name: "Trend",
    embedded: false
  },
  {
    name: "Parameter",
    embedded: false
  },
  {
    name: "ObjectConnection",
    embedded: false
  },
  {
    name: "Check",
    embedded: false
  },
  {
    name: "ProductionLine",
    embedded: false
  },
  {
    name: "Task",
    embedded: false
  },
  {
    name: "Production",
    embedded: false
  },
  {
    name: "Data",
    embedded: false
  },
  {
    name: "Dataset",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4467`
});
exports.prisma = new exports.Prisma();
