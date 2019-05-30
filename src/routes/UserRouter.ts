import express from "express";
import {IUser, User} from "../classes/User";
import userStore from "../stores/data";

const router = express.Router();

router.post("/", (req, res) => {
    const user: User = new User(req.body as IUser);
    const errors: string [] = userStore.addNewUser(user);
    if (errors.length === 0 ) {
        res.send(userStore.getUserByEmail(user.email));
    } else {
        res.send(errors);
    }
});

router.patch("/:id", (req, res) => {
    const user: User = new User(req.body as IUser);
    user.id = Number(req.params.id);
    const errors: string [] = userStore.editUser(user);
    if (errors.length === 0 ) {
        res.send(userStore.getUserById(req.params.id));
    } else {
        res.send(errors);
    }
});

router.delete("/:id", (req, res) => {
    const success: boolean = userStore.removeUserById(req.params.id);
    res.send( success ? "User deleted." : "User not found.");
});

router.get("/:id", (req, res) => {
    const user: User | null = userStore.getUserById(req.params.id);
    if (user !== null) {
        res.send(user);
    } else {
        res.send("User not found.");
    }
});

router.post("/:id/activity", (req, res) => {
    res.send("Activity posted.");
});

router.get("/", (req, res) => {
    const users: User[] = userStore.users;
    res.send(users);
});

export default router;
