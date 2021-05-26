"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const home_controller_1 = tslib_1.__importDefault(require("../controllers/home.controller"));
class HomeRoute {
    constructor() {
        this.path = '/';
        this.router = express_1.Router();
        this.indexController = new home_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.indexController.get);
    }
}
exports.default = HomeRoute;
//# sourceMappingURL=home.route.js.map