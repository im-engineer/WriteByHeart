import express from "express";
const router = express.Router();
import { upload } from "../../middleware/uploadImage/uploadImage"
import { adminCreate } from "../../controller/admin/admin";

router.post("/created", upload.single('image'),adminCreate)
// router.post("/login",writerLogin)


export default router;