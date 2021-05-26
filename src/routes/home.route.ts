import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import HomeController from '@/controllers/home.controller';

class HomeRoute implements Route {
  public path = '/';
  public router = Router();
  public indexController = new HomeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.get);
  }
}

export default HomeRoute;
