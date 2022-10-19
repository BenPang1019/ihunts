import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const book = (req, res) => {
  //CHECK EXISTING USER
  // const q = "SELECT * FROM book WHERE firstName = ?";

  // db.query(q, [req.body.username], (err, data) => {
  //   if (err) return res.status(500).json(err);
  //   if (data.length) return res.status(409).json("User already exists!");

    const q = "INSERT INTO book(`firstName`,`lastName`,`phone`,`email`,`address`,`state`,`postal`,`ticketQuantity`,`date`) VALUES (?)";
    const values = [
      req.body.firstName, 
      req.body.lastName,
      req.body.phone, 
      req.body.email,  
      req.body.address, 
      req.body.state,  
      req.body.postal, 
      req.body.ticketQuantity, 
      req.body.date,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(data);
      return res.status(200).json("User has been created.");
    });
  // });
};
