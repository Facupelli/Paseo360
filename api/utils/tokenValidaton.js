const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.get("authorization");

  if (token && token.toLowerCase().startsWith("bearer")) {
    token = token.substring(7);
  } else {
    return res.status(401).json({ error: "Access denied - Token missing" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_WORD);
    req.user = decodedToken;
    next();
  } catch (e) {
    res.status(400).json({ error: `Token is not valid: ${e}` });
  }
};

module.exports = { verifyToken };
