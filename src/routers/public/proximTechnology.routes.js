import { Router } from "express";
import { pool } from "../../db.js";
import { getOneProximTechnologie } from "../../controllers/public/users.controller.js";
const router = Router();
router.get("/:id", getOneProximTechnologie);
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM proxim_technology");
  res.json(rows);
});

export default router;
