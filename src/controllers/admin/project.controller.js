import { pool } from "../../db.js";
//PROJETS

export const postProject = async (req, res) => {
  try {
    const { title, description, uriProject, uriRepository, image, state } =
      req.body;
    const [rows] = await pool.query(
      "INSERT INTO project (title, description, uriProject, uriRepository, image, state) VALUES (?,?,?,?,?,?)",
      [title, description, uriProject, uriRepository, image, state]
    );
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
export const patchPost = async (req, res) => {
  try {
    const { title, description, uriProject, uriRepository, image, state } =
      req.body;
    const [rows] = await pool.query(
      "UPDATE project SET  title = IFNULL(?, title), description = IFNULL(?, description), uriProject = IFNULL(?, uriProject), uriRepository = IFNULL(?, uriRepository), image = IFNULL(?, image), state = IFNULL(?, state) WHERE id = ?",
      [
        title,
        description,
        uriProject,
        uriRepository,
        image,
        state,
        req.params.id,
      ]
    );
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM project WHERE id = ?", [
      req.params.id,
    ]);
    res.json(rows);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "ERROR en el servidor", error: err.message });
  }
};
