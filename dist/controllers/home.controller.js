"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    constructor() {
        this.get = async (req, res, next) => {
            res.status(200).send('hello world');
        };
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.controller.js.map