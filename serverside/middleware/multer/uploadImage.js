import multer from 'multer';

var storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, 'Image')
    },
    filename : function(req, file, cb){
        console.log(file)
        const ext = file.mimetype.split('/')[1];
        cb(null,file.originalname )
    }
})
export const upload = multer({storage : storage})