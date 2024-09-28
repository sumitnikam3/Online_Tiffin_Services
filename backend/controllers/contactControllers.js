// import Contact from "../models/contactUsModel";

// export const submitContactForm = async (req, res) => {
//     const { firstname,lastname, email,phone, message } = req.body;

//     try {
//         const newContact = new Contact({ firstname, lastname, email, phone, message });
//         await newContact.save();
//         res.json({ success: true, message: "Message sent successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Failed to save contact" });
//     }
// };
// import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
// import { Message } from "../models/messageSchema.js";
import Message from "../models/contactUsModel";


export const sendMessage = async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;
    if (!firstName || !lastName || !email || !phone || !message) {
        return next("Please Fill Full Form!", 400);
    }
    else {
        console.error(error);
        console.log(error);
    }
    await Message.create({ firstName, lastName, email, phone, message });
    res.status(200).json({
        success: true,
        message: "Message Sent!",
    });
};
export const getAllMessages = async (req, res, next) => {
    const messages = await Message.find();
    res.status(200).json({
        success: true,
        messages,
    });
};