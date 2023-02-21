import { pool } from "../../db.js";
//TECHNOLOGY

export const postTechology = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "INSERT INTO technology (name, image) VALUES (?, ?)",
      [req.body.name, req.body.image]
    );
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
export const patchTechology = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "UPDATE technology SET name= IFNULL(?,name), image= IFNULL(?,image) WHERE ID = ?",
      [req.body.name, req.body.image, req.params.id]
    );
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
export const deleteTechology = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM technology WHERE id = ?", [
      req.params.id,
    ]);s
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
