import express from "express";
const router = express.Router();
import { upload } from "../../middleware/uploadImage/uploadImage"
import { writerRegistration } from "../../controller/writer/writer";

router.post("/writer", upload.single('image'),writerRegistration)

export default router;