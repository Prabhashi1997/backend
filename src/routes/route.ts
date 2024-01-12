import { Router } from 'express';
import userRouter from './user.route';

const routes = Router();
// define the base path and the router that's going to be called
routes.use('/add', userRouter);
routes.use('/getAll', userRouter);
routes.use('/update', userRouter);
routes.use('/deleteUser', userRouter);
routes.use('/getById', userRouter);


// export the route
export default routes;



//to export it for the index.ts file