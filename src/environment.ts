import { config } from "dotenv";
config();

export const environment = {
  port: process.env.PORT,
  mongodb_connection_string: `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.8z2gh.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
};
