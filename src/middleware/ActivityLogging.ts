import { Request, Response} from "express";

function ActivityLogger(req: Request, res: Response, next: any) {
    /* Initially I read this as 'activities' was logging the user api.
        After re-reading it I realize it was in addition to creating a user
        to create activities. This would have been to add logging on all calls
        and free up logging activites from add/remove logic.
        */
    next();
}

export default ActivityLogger;
