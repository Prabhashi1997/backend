import { Router } from 'express';
import userRouter from './user.route';

const routes = Router();
// define the base path and the router that's going to be called
routes.use('/users', userRouter);
// routes.use('/users', userRouter);
// routes.use('/users', userRouter);
// routes.use('/users', userRouter);
// routes.use('/users', userRouter);



// export the route
export default routes;



//to export it for the index.ts file