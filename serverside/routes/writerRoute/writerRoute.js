import express from "express";
const router = express.Router();
import { upload } from "../../middleware/multer/uploadImage"
import { findWriters, writerLogin, writerJoined, countWriter, countActiveInactiveWriters } from "../../controller/writer/writer";

router.post("/registration", upload.single('image'),writerJoined)
router.post("/login",writerLogin)
router.get("/all/list",findWriters)
router.get("/total/count",countWriter)
router.get("/total/active",countActiveInactiveWriters)


export default router;