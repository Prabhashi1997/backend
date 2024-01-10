import { Router } from 'express';
import userController from '../controller/user.controller';
const userRouter = Router();
// specifies the endpoint and the method to call
userRouter.get('/', userController.getAll);
// export the router
export default userRouter;