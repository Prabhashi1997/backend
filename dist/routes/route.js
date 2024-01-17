"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("./user.route");
const routes = (0, express_1.Router)();
// define the base path and the router that's going to be called
routes.use('/users', user_route_1.default);
// routes.use('/users', userRouter);
// routes.use('/users', userRouter);
// routes.use('/users', userRouter);
// routes.use('/users', userRouter);
// export the route
exports.default = routes;
//to export it for the index.ts file
