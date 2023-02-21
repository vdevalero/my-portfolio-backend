import { Router } from "express";
import { pool } from "../../db.js";
import { getOneTechnologie } from "../../controllers/public/users.controller.js";
const router = Router();
router.get("/:id", getOneTechnologie);
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM technology");
  res.json(rows);
});

export default router;
