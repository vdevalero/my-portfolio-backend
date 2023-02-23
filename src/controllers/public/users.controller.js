import { pool } from "../../db.js";
//PROJECTS
export const getOneProject = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT project.*,state_project.name, state_project.border_color, state_project.background_color FROM project LEFT JOIN state_project ON project.state = state_project.id WHERE project.id = ? ORDER BY id DESC",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
//TECHNOLOGIES
export const getOneTechnologie = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM technology WHERE id = ?", [
      req.params.id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
//PROXIM TECHNOLOGIES
export const getOneProximTechnologie = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM proxim_technology WHERE id = ?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
//STATES
export const getOneState = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM state_project WHERE id = ?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    console.log("Error =>", err);
  }
};
