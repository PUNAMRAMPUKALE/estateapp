import bcrypt from "bcrypt";


export const register = async(req, res) => {
  const {username, email, password} = req.body;

  // HASH THE PASSWORD

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  
  
    console.log("register endpoint");
  res.send("Registered!");
};

export const login = (req, res) => {
  console.log("login endpoint");
  res.send("Logged in!");
};

export const logout = (req, res) => {
  console.log("logout endpoint");
  res.send("Logged out!");
};
