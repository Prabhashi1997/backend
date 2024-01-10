"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
// specifies the endpoint and the method to call
userRouter.get('/', user_controller_1.default.getAll);
// export the router
exports.default = userRouter;
