"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const ActivityLogging_1 = __importDefault(require("./middleware/ActivityLogging"));
const ActivityRouter_1 = __importDefault(require("./routes/ActivityRouter"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const app = express_1.default();
const port = 8080;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.send("hello tech-assessment-restful");
});
app.use("/user", ActivityLogging_1.default, UserRouter_1.default);
app.use("/activity", ActivityRouter_1.default);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map