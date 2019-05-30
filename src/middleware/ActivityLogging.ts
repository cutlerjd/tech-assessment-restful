import { Request, Response} from "express";

function ActivityLogger(req: Request, res: Response, next: any) {
    next();
}

export default ActivityLogger;
