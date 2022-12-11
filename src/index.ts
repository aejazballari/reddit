import { sequelize } from "./sequelize";
import express from "express";

const app = express();

const connectDB = async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    app.listen(4000, () => {
      console.log("server started at port 4000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();
