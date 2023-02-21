import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config.js";
//routes
import routes from "./routers/index.routes.js";

//config
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//routes
app.use("/", routes);

app.listen(PORT);
console.log("server listener on port:", PORT);
