import { connection } from '../config/db';

 const addUser = async (req, res) => {
    try {
      const {id,  name, city, email } = req.body;
      const s = await connection.promise().query(
        `INSERT INTO user (id, name, city, email) 
            VALUES (?, ?, ?, ?)`,
        [id, name, city, email]
      );
      res.status(201).json({
        message: "User Created",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  }

  const allUsers = async(req, res) => {
    try {
        const data = await connection.promise().query(
          `SELECT *  from user;`
        );
        res.status(200).json({
          users: data[0],
        });
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
  } 
  
  const getUser = async(req, res) => {
    try {
        const {id} = req.params
        const data = await connection
        .promise()
        .query(
          `SELECT *  from user where id = ?`,
          [id]
        );
        res.status(200).json({
          user: data[0],
        });
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
  }

  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, city, email } = req.body;
      const u = await connection
        .promise()
        .query(
          `UPDATE user set name = ?, city = ?, email = ? where id = ?`,
          [ name, city, email, id]
        );
      res.status(200).json({
        message: "User updated",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  }

  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const del = await connection
        .promise()
        .query(
          `DELETE FROM  user where id = ?`,
          [id]
        );
      res.status(200).json({
        message: "User deleted",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  }



export default {
    addUser,
    allUsers,
    updateUser,
    deleteUser,
    getUser
};
