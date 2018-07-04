import { Router } from "express";
import health from "./health";
import v1 from "./v1";

const router = Router();

router.use("/", health);
router.use("/v1", v1);

export default router;
