import { Router, Request, Response } from 'express';
import { User } from '../model/user';
import { connection } from '../config/db';

const add = async (req, res) => {
    try {
      const {id,  name, city, email } = req.body;
      const s = await connection.promise().query(
        `INSERT INTO user (id, name, city, email) 
            VALUES (?, ?, ?, ?)`,
        [id, name, city, email]
      );
      res.status(202).json({
        message: "User Created",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  }

  const getAll = async(req, res) => {
    try {
        const data = await connection.promise().query(
          `SELECT *  from user;`
        );
        res.status(202).json({
          user: data[0],
        });
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
  }  

  const update = async (req, res) => {
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
        message: "updated",
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

  const getById = async(req, res) => {
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

export default {
    add,
    getAll,
    update,
    deleteUser,
    getById
};
