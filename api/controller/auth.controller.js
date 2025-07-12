import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { username, email, password } = req.body;



  try {
    // HASH THE PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //Create a new user and save to db

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to create User" });
  }
};

export const login = async (req, res) => {
  //username from request

  const { username, password } = req.body;
  try {

    //Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username }
    })

    if (!user) return res.status(401).json({ message: "Invalid credentials" });


    //Check if password correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials!" });

    //Generate cookie token and send to the user

    //res.setHeader("Set-Cookie", "test=" + "myValue")
    const age = 1000 * 60 * 60 * 24 * 7

    const token = jwt.sign({
      id: user.id
    }, process.env.JWT_KEY,
      { expiresIn: age })

    res.cookie("token", token, {
      //to provide security 
      httpOnly: true,

      //for https in production make it true now using http from local
      // secure:true;

      //Expire in 1 week
      maxAge: age,
    })
      .status(200)
      .json({ message: "Login Successfully" });

  } catch (err) {
    console.log(first);
    res.status(500).json({ messgae: "Failed to find User!" })
  }
};

export const logout = (req, res) => {
res.clearCookie("token").status(200).json({message:"Logout Successfully"});  

};
