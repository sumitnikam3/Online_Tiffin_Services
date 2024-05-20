import express from 'express';
// import { addFood } from '../controllers/foodController.js';
import multer from 'multer'; //image control
import path from 'path';
import { addFood, editFood, listFood, removeFood } from '../controllers/foodController.js';
import { isAdmin } from '../middleware/isAdmin.js';

const foodRouter = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory to save images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Save with unique name
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add",  upload.single("image"),addFood);
foodRouter.get("/list", listFood);
foodRouter.delete("/remove/:id", removeFood);
foodRouter.put('/edit/:id',editFood);

export default foodRouter;

// http://localhost:7400/api/food/add