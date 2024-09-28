// import express from 'express';
// import { submitContactForm } from '../controllers/contactController.js';

// const contactRouter = express.Router();

// contactRouter.post('/contact', submitContactForm);

// export default contactRouter;
import express from "express";
import { sendMessage, getAllMessages } from "../controllers/contactControllers";
// import { getAllMessages, sendMessage } from "../controllers/messageController.js";



const contactRouter = express.Router();

contactRouter.post("/send", sendMessage);
contactRouter.get("/getall", getAllMessages);

export default contactRouter;