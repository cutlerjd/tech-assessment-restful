import express from "express";
import userStore from "../stores/data";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(userStore);
});

export default router;
