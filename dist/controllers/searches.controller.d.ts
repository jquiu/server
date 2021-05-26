import { NextFunction, Request, Response } from 'express';
declare class SearchController {
    author: {
        name: string;
        lastname: string;
    };
    searchByQueryParams: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getItemDetail: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default SearchController;
