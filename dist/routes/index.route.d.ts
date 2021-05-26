import SearchController from '../controllers/searches.controller';
import Route from '../interfaces/routes.interface';
declare class IndexRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    indexController: SearchController;
    constructor();
    private initializeRoutes;
}
export default IndexRoute;
