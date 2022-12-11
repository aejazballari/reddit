import { Sequelize } from "sequelize-typescript";
import * as models from "./models";
import "dotenv/config";

export const sequelize = new Sequelize({
  database: "reddit",
  username: "root",
  password: process.env.DB_PASSOWORD,
  host: "localhost",
  dialect: "mysql",
  storage: ":memory:",
  models: Object.values(models),
});
