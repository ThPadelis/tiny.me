import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { URLrouter } from "./routes";
import { environment } from "./environment";

const app: Express = express();

const PORT: string | number = environment.port || 8080;

app.use(cors());
app.use(URLrouter);

const uri: string = environment.mongodb_connection_string;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${environment.port}`)
    )
  )
  .catch((error) => {
    throw error;
  });
