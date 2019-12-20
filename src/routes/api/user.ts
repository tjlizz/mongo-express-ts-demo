
import { Router, Response, Request } from "express";


const router: Router = Router();
import HttpStatusCodes from "http-status-codes";

router.get("/aaa", [], (req: Request, res: Response) => {

    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server lzz");
});


export default router;
