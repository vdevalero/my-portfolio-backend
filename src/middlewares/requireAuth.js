import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "unautorize" });

  const token = authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "unautorize" });

  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.status(401).json({ message: "unatorize" });

    req.user = user.user;
    console.log("TOKEN VALIDO ===>");
    next();
  });
};

//verify Admin role
export const admin = (req, res, next) => {
  console.log("ADMIN ===>", req.user.role);
  if (req.user.role !== "admin") {
    return res.json({
      message: "Peticion no autorizada, no eres administrador",
    });
  }
  next();
};
