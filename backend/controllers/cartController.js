import { userModel } from "../models/userModel.js";

export const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        let itemId = req.body.itemId; 

        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "Error adding to cart" });
    }
}

// Remove from cart

export const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        let itemId = req.body.itemId; 

        if (!cartData[itemId]) {
            return res.status(400).json({ success: false, message: "Item not found in cart" });
        } else {
            if (cartData[itemId] > 0) {
                cartData[itemId] -= 1;
            } else {
                delete cartData[itemId];
            }
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Removed from cart" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "Error removing from cart" });
    }
}


// fetchUserCartData

export const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.params.userId); 
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "Error retrieving cart" });
    }
}
