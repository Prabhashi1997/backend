"use strict";
//for declaring all routes from the user controller
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
// specifies the endpoint and the method to call
userRouter.post('/', user_controller_1.default.add);
userRouter.get('/', user_controller_1.default.getAll);
userRouter.patch('/:id', user_controller_1.default.update);
userRouter.delete('/:id', user_controller_1.default.deleteUser);
userRouter.get('/:id', user_controller_1.default.getById);
// export the router
exports.default = userRouter;
