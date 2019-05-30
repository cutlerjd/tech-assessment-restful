import express from "express";
import userStore from "../stores/data";

const router = express.Router();

/* Stubbed out a different route file for activies to help keep code
    separate. Did not get around to filling this out. Brought in userStore
    to show the ability of accessing data between modules. */
router.get("/", (req, res) => {
    res.send(userStore.users);
});

export default router;
