import { NextFunction, Request, Response } from 'express';
declare class HomeController {
    get: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default HomeController;
