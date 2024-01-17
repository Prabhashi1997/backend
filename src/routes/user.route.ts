//for declaring all routes from the user controller

import { Router } from 'express';
import userController from '../controller/user.controller';

const userRouter = Router();

// specifies the endpoint and the method to call
userRouter.post('/', userController.addUser);
userRouter.get('/', userController.allUsers);
userRouter.get('/:id', userController.getUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);



// export the router
export default userRouter;



