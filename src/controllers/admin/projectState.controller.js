import { pool } from "../../db.js";

export const postStateProject = async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO state_project ( name, border_color, background_color) VALUES (?,?,?)",
      [req.body.name, req.body.border_color, req.body.background_color]
    );
    res.json({ message: "State agregado correctamente" });
  } catch (err) {
    console.log("Error =>", err);
  }
};

export const patchStateProject = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "UPDATE state_project SET name= IFNULL(?,name), border_color= IFNULL(?,border_color), background_color = IFNULL(?,background_color) WHERE ID = ?",
      [
        req.body.name,
        req.body.border_color,
        req.body.background_color,
        req.params.id,
      ]
    );
    res.json(rows);
  } catch (err) {
    console.log("Error =>", err);
  }
};
export const deleteStateProject = async (req, res) => {
  try {
    await pool.query("DELETE FROM state_project WHERE id = ?", [req.params.id]);
    res.json({ message: "Eliminado con exito" });
  } catch (err) {
    console.log("Error =>", err);
    res.status(500).json({
      message:
        "Error al intentar eliminar el estado, compruba que ningun otro proyecto esta usando este estado",
      err,
    });
  }
};
