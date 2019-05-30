import { Request, Response} from "express";

function ActivityLogger(req: Request, res: Response, next: any) {
    // tslint:disable-next-line:no-console
    console.log( req );
}

export default ActivityLogger;
