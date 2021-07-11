"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var api_1 = __importDefault(require("./routes/api"));
var config_1 = __importDefault(require("./config"));
var app = express_1.default();
var port = config_1.default.PORT;
app.use(cors_1.default());
app.use("/api", api_1.default);
app.get("/", function (req, res) {
    res.send("Home");
});
app.get("*", function (req, res) {
    res.send("No route");
});
app.listen(port, function () {
    console.log("server started at localhost:" + port);
});
exports.default = app;
