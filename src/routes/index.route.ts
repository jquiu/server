import { Router } from 'express';
import SearchController from '@/controllers/searches.controller';
import Route from '@interfaces/routes.interface';

class IndexRoute implements Route {
  public path = '/api/items';
  public router = Router();
  public indexController = new SearchController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.searchByQueryParams);
    this.router.get(`${this.path}/:id`, this.indexController.getItemDetail);
  }
}

export default IndexRoute;
