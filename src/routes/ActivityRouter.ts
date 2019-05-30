import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from activity router");
});

export default router;
