"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../classes/User");
const data_1 = __importDefault(require("../stores/data"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const user = new User_1.User(req.body);
    const errors = data_1.default.addUser(user);
    if (errors.length === 0) {
        res.send("User added");
    }
    else {
        res.send(errors);
    }
});
router.patch("/", (req, res) => {
    const user = new User_1.User(req.body);
    const errors = data_1.default.editUser(user);
    if (errors.length === 0) {
        res.send("User edited.");
    }
    else {
        res.send(errors);
    }
});
router.delete("/", (req, res) => {
    res.send("User deleted.");
});
router.get("/:email", (req, res) => {
    const user = data_1.default.getUserByEmail(req.params.email);
    if (user == null) {
        return user;
    }
    else {
        return "User not found.";
    }
});
router.post("/:email/activity", (req, res) => {
    res.send("Activity posted.");
});
router.get("/", (req, res) => {
    const users = data_1.default.users;
    res.send(users);
});
exports.default = router;
//# sourceMappingURL=UserRouter.js.map