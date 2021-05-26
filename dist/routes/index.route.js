"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const searches_controller_1 = tslib_1.__importDefault(require("../controllers/searches.controller"));
class IndexRoute {
    constructor() {
        this.path = '/api/items';
        this.router = express_1.Router();
        this.indexController = new searches_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.indexController.searchByQueryParams);
        this.router.get(`${this.path}/:id`, this.indexController.getItemDetail);
    }
}
exports.default = IndexRoute;
//# sourceMappingURL=index.route.js.map