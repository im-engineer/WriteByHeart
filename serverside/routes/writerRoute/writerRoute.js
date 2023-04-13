import express from "express";
const router = express.Router();
import { upload } from "../../middleware/uploadImage/uploadImage"
import { findWriters, writerLogin, writerRegistration } from "../../controller/writer/writer";

router.post("/registration", upload.single('image'),writerRegistration)
router.post("/login",writerLogin)
router.get("/all/list",findWriters)


export default router;