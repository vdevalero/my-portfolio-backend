import { Router } from "express";
//routes
import projects from "./public/projects.routes.js";
import technology from "./public/technology.routes.js";
import proximTechnology from "./public/proximTechnology.routes.js";
import stateProject from "./public/stateProject.routes.js";
//login
import auth from "./auth/auth.routes.js";

const portfolio = Router();

//todo lo que tenga que ver en portfolio
portfolio.use("/projects", projects);
portfolio.use("/technology", technology);
portfolio.use("/proximTechnology", proximTechnology);
portfolio.use("/stateProject", stateProject);
portfolio.use("/login", auth);

export default portfolio;
