import { Router } from "express";

//contrtollers
import {
  postProject,
  patchPost,
  deleteProject,
} from "../../controllers/admin/project.controller.js";
import {
  postTechology,
  patchTechology,
  deleteTechology,
} from "../../controllers/admin/technology.controller.js";
import {
  postProximTechnology,
  patchProximTechnology,
  deleteProximTechnology,
} from "../../controllers/admin/proximTechnology.controller.js";
import {
  postStateProject,
  patchStateProject,
  deleteStateProject,
} from "../../controllers/admin/projectState.controller.js";
const router = Router();
//******************* INFO PERMISON
router.get("/", (req, res) => {
  res.json({ message: "admin panel", permisson: "todos" });
});

//******************* PROJECTS *******************
router.post("/project", postProject);
router.patch("/project/:id", patchPost);
router.delete("/project/:id", deleteProject);
//******************* TABLA INTERMEDIA ENTRRE PROJECT Y TECHNOLOGIES

//******************* TECHNOLOGIES *******************
router.post("/technology", postTechology);
router.patch("/technology/:id", patchTechology);
router.delete("/technology/:id", deleteTechology);

//******************* PROXIM TECHNOLOGIES *******************
router.post("/proximTechnology", postProximTechnology);
router.patch("/proximTechnology/:id", patchProximTechnology);
router.delete("/proximTechnology/:id", deleteProximTechnology);

//******************* PROJECT STATE *******************
router.post("/stateProject", postStateProject);
router.patch("/stateProject/:id", patchStateProject);
router.delete("/stateProject/:id", deleteStateProject);

export default router;
