import jwt from "jsonwebtoken";
//db
import { pool } from "../../db.js";

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [rows] = await pool.query(
      "SELECT * FROM user u left join role r on u.role = r.id WHERE name = ?",
      [username, password]
    );
    //Validaciones
    //--Si no se encuentra el usuario
    if (rows[0] === undefined) {
      return res.json({ message: "No estas registrado o usuario incorrecto" });
    }
    //--Si la contraseña no coincide
    if (rows[0].password !== password) {
      return res.json({ message: "Contraseña incorrecta" });
    }
    
    const token = jwt.sign(
      {
        test: "test",
        user: rows[0],
      },
      "secret",
      {
        expiresIn: 60 * 60 * 24,
      }
    );
    console.log(rows);

    //console.log(token);
    return res.json({
      token,
    });
  } catch (err) {
    console.log("ERROR AUTH====>", err);
  }
};
