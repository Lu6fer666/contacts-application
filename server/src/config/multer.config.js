import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads/'); // je vais stocker içi
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});