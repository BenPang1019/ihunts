import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //   //CHECK EXISTING USER
    const a = "SELECT * FROM user WHERE username = ?";
    const b = "SELECT * FROM user WHERE email = ?";
    const c = "SELECT * FROM user WHERE phone = ?";
  
    db.query(a, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("Username already exists!");
  
      db.query(b, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("Email already exists!");
  
        db.query(c, [req.body.phone], (err, data) => {
          if (err) return res.status(500).json(err);
          if (data.length) return res.status(409).json("Phone Number already exists!");
  
      //Hash the password and create a user
      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(req.body.password, salt);
  
      const q = "INSERT INTO user(`username`,`fullName`,`phone`,`email`,`password`) VALUES (?)";
      // const values = [
      //     req.body.username, 
      //     req.body.fullName,
      //     req.body.phone, 
      //     req.body.email,  
      //     hash];
       
      const values = [
        req.body.username, 
        req.body.fullName,
        req.body.phone, 
        req.body.email,  
        req.body.password];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
      });
    });
    });
  });
  };

export const login = (req, res) => {
  //CHECK USER

  const q = "SELECT * FROM user WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    //  bcrypt.compare(req.body.password.toString(),
    //                  data[0].password.toString(),
    //                  function(err, valid) {
    //     res.json({ error: !!(err || !valid) }); 
    //   });

      if (req.body.password === data[0].password)
     {
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
     }
     else 
     return res.status(400).json("Wrong password or username!")
      

    // const isPasswordCorrect = bcrypt.compareSync(
    //   req.body.password,
    //   data[0].password
    // );

    // if (!isPasswordCorrect)
    //   return res.status(400).json(res);


  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};