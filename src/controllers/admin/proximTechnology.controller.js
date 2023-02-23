import { pool } from "../../db.js";

export const postProximTechnology = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "INSERT INTO proxim_technology (name, image) VALUES (?, ?)",
      [req.body.name, req.body.image]
    );
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
export const patchProximTechnology = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "UPDATE proxim_technology SET name= IFNULL(?,name), image= IFNULL(?,image) WHERE ID = ?",
      [req.body.name, req.body.image, req.params.id]
    );
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
export const deleteProximTechnology = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "DELETE FROM proxim_technology WHERE id = ?",
      [req.params.id]
    );
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
