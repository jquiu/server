import { NextFunction, Request, Response } from 'express';

class HomeController {
  public get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).send('hello world');
  };
}

export default HomeController;
