import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { userModel } from "../models/userModel.js"

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).res.json({ success: false, message: "User Doesn't exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).res.json({ success: false, message: "Invalid credentials" })

        }

        const token = createToken(user._id);
        res.json({ success: true, token })

    } catch (error) {

        console.log(error);
        res.status(500).res.json({ success: false, message: "Error" });
    }



}


//register user

export const registerUser = async (req, res) => {
    console.log("error");
    const { name, password, email } = req.body;
    try {
        //checking is user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).res.json({ success: false, message: "User already exists" })
        }
        //validating email form & strong password
        if (!validator.isEmail(email)) {
            return res.status(400).res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.status(400).res.json({ success: false, message: "Please enter a strong password" })
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.status(500).res.json({ success: false, message: "Error", error: error });
    }

}


// export {loginUser,registerUser}