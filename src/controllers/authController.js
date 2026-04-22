const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  if (username === "admin" && password === "password") {
    return res.status(200).json({
      message: "Login successful",
      token: "fake-jwt-token",
    });
  }

  return res.status(401).json({ message: "Invalid username or password" });
};

module.exports = { login };
