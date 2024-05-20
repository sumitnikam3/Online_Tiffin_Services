
import fs from 'fs';
import { foodModel } from '../models/foodModel.js';



// export const addFood = async (req, res) => {
//     try {
//         if (!req.file) {
//             throw new Error('Image file is required');
//         }

//         const { name, description, price, available, category, quantity } = req.body;
//         const image_filename = `${ req.file.filename }`;

//         const food = new foodModel({
//             name,
//             description,
//             price,
//             image: image_filename,
//             available,
//             category,
//             quantity
//         });

//         await food.save();
//         res.json({ success: true, message: "Food Added", data: food });
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({ success: false, message: "Food Not Added", error: error.message });
//     }
// };


// http://localhost:7400/api/food/add
export const addFood = async (req, res) => {
    try {
        // Removed the check for req.file as we're using an image link
        const { name, description, price, available, category, quantity, image } = req.body;

        if (!image) {
            throw new Error('Image URL is required');
        }

        const food = new foodModel({
            name,
            description,
            price,
            image, // Use the image URL from req.body
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

//http://localhost:7400/api/food/list

export const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        // res.json({ success: true, data: foods });
        res.json(foods);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error retrieving food items", error: error.message });
    }
};

// http://localhost:7400/api/food/remove
export const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.params.id);
        await foodModel.findByIdAndDelete(req.params.id);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Cannot delete food", error: error.message });
    }
}
//http://localhost:7400/api/food/edit

export const editFood = async (req, res) => {
    try {
        // const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        const { id } = req.params;
        const { name, description, price, image, available, category, quantity } = req.body;
        const updatedFood = await foodModel.findByIdAndUpdate(
            id,
            {
                name,
                description,
                price,
                image,
                available,
                category,
                quantity
            },
            { new: true }
        );
        if (!updatedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json(updatedFood);
    } catch (error) {
        console.error('Error updating food item:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
