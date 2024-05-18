
import fs from 'fs';
import { foodModel } from '../models/foodModel.js';



export const addFood = async (req, res) => {
    try {
        if (!req.file) {
            throw new Error('Image file is required');
        }

        const { name, description, price, available, category, quantity } = req.body;
        const image_filename = `${ req.file.filename }`;

        const food = new foodModel({
            name,
            description,
            price,
            image: image_filename,
            available,
            category,
            quantity
        });

        await food.save();
        res.json({ success: true, message: "Food Added", data: food });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "Food Not Added", error: error.message });
    }
};

// List food items
export const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error retrieving food items", error: error.message });
    }
};


// module.exports = {
//     addFood,
// };
export const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.params.id);
        // fs.unlink(`uploads/${food.image}`, () => { });
        await foodModel.findByIdAndDelete(req.params.id);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Cannot delete food", error: error.message });
    }
}

export const editFood = async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json(updatedFood);
    } catch (error) {
        console.error('Error updating food item:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
// module.exports = {
//     addFood,
// };