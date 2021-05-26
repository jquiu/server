import Route from '../interfaces/routes.interface';
import HomeController from '../controllers/home.controller';
declare class HomeRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    indexController: HomeController;
    constructor();
    private initializeRoutes;
}
export default HomeRoute;
