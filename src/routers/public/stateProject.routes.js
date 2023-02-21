import { Router } from "express";
import { pool } from "../../db.js";
import { getOneState } from "../../controllers/public/users.controller.js";
const router = Router();
router.get("/:id", getOneState);
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM state_project");
    res.json(rows);
  } catch (err) {
    console.log("Error =>", err);
  }
});
export default router;
