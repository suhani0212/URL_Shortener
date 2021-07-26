"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shortUrl_controller_1 = require("../controller/shortUrl.controller");
// import validateResource from '../middleware/validateResource';
// import shortUrlSchema from '../schemas/createShortUrl.schema';
function routes(app) {
    app.get("/healthcheck", function (req, res) {
        return res.send("App is healthy");
    });
    app.post("/api/url", shortUrl_controller_1.createShortUrl);
    app.get("/:shortId", shortUrl_controller_1.handleRedirect);
    app.get("/api/url/:shortId", shortUrl_controller_1.getShortUrl);
    app.get("/api/analytics", shortUrl_controller_1.getAnalytics);
}
exports.default = routes;
