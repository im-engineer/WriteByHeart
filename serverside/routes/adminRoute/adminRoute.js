import express from "express";
const router = express.Router();
import { upload } from "../../middleware/multer/uploadImage"
import { adminCreate, adminLogin } from "../../controller/admin/admin";

router.post("/created", upload.single('image'),adminCreate)
router.post("/login",adminLogin)


export default router;