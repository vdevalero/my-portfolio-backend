import { Router } from "express";
import { pool } from "../../db.js";
import { getOneProject } from "../../controllers/public/users.controller.js";
const router = Router();
//se carga en el inicio del porfolio a manera de vista general

router.get("/overview", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT project.*,state_project.name, state_project.border_color, state_project.background_color FROM project LEFT JOIN state_project ON project.state = state_project.id ORDER BY id DESC LIMIT 6"
  );
  res.json(rows);
});
router.get("/", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT project.*, state_project.name,state_project.border_color, state_project.background_color  FROM project LEFT JOIN state_project ON project.state = state_project.id ORDER BY id DESC"
  );
  res.json(rows);
});

router.get("/:id", getOneProject);
export default router;
