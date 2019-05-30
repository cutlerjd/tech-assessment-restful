import express from "express";
import {IUser, User} from "../classes/User";
import userStore from "../stores/data";

const router = express.Router();

router.post("/", (req, res) => {
    const user: User = new User(req.body as IUser);
    const errors: string [] = userStore.addUser(user);
    if (errors.length === 0 ) {
        res.send("User added");
    } else {
        res.send(errors);
    }
});

router.patch("/", (req, res) => {
    const user: User = new User(req.body as IUser);
    const errors: string [] = userStore.editUser(user);
    if (errors.length === 0 ) {
        res.send("User edited.");
    } else {
        res.send(errors);
    }
});

router.delete("/", (req, res) => {
    res.send("User deleted.");
});

router.get("/:email", (req, res) => {
    const user: User | null = userStore.getUserByEmail(req.params.email);
    if (user ! == null) {
        return user;
    } else {
        return "User not found.";
    }
});

router.post("/:email/activity", (req, res) => {
    res.send("Activity posted.");
});

router.get("/", (req, res) => {
    const users: User[] = userStore.users;
    res.send(users);
});

export default router;
