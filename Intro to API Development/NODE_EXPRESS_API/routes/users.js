import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const users = [
  
];
// all routes in here are starting with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  const userId = uuidv4(); 

  

  users.push({ ...user, id: userId});

  res.send(`User with the name ${user.firstName} added to the database!`);

});
router.get('/:id', (req,res) => {
    res.send(res)
})
export default router;
  