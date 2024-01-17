"use strict";
//for declaring all routes from the user controller
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
// specifies the endpoint and the method to call
userRouter.post('/', user_controller_1.default.addUser);
userRouter.get('/', user_controller_1.default.allUsers);
userRouter.get('/:id', user_controller_1.default.getUser);
userRouter.put('/:id', user_controller_1.default.updateUser);
userRouter.delete('/:id', user_controller_1.default.deleteUser);
// export the router
exports.default = userRouter;
