import { Router } from "express";
import MailingController from "../../controllers/MailingController";

const router = Router();

router.get("/", MailingController.retrieve);
router.get("/:_id", MailingController.findById);
router.post("/", MailingController.create);
router.put("/:_id", MailingController.update);
router.delete("/:_id", MailingController.delete);

export default router;
