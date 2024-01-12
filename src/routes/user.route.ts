//for declaring all routes from the user controller

import { Router } from 'express';
import userController from '../controller/user.controller';

const userRouter = Router();

// specifies the endpoint and the method to call
userRouter.post('/', userController.add);
userRouter.get('/', userController.getAll);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.deleteUser);
userRouter.get('/:id', userController.getById);



// export the router
export default userRouter;



