"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var url = req.url;
    var path = req.path;
    console.log(url + " was visited at " + path + " with " + (req.query ? req.query : ""));
    next();
};
exports.default = logger;
