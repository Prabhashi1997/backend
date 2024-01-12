"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, city, email } = req.body;
        const s = yield db_1.connection.promise().query(`INSERT INTO user (id, name, city, email) 
            VALUES (?, ?, ?, ?)`, [id, name, city, email]);
        res.status(202).json({
            message: "User Created",
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
        });
    }
});
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield db_1.connection.promise().query(`SELECT *  from user;`);
        res.status(202).json({
            user: data[0],
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
        });
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, city, email } = req.body;
        const u = yield db_1.connection
            .promise()
            .query(`UPDATE user set name = ?, city = ?, email = ? where id = ?`, [name, city, email, id]);
        res.status(200).json({
            message: "updated",
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield db_1.connection
            .promise()
            .query(`DELETE FROM  user where id = ?`, [id]);
        res.status(200).json({
            message: "User deleted",
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
        });
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield db_1.connection
            .promise()
            .query(`SELECT *  from user where id = ?`, [id]);
        res.status(200).json({
            user: data[0],
        });
    }
    catch (err) {
        res.status(500).json({
            message: err,
        });
    }
});
exports.default = {
    add,
    getAll,
    update,
    deleteUser,
    getById
};
