
import '../styles/HeaderStyle.css';
import React, { useState } from 'react';
import axios from 'axios';

export const FoodAddForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: '', // Changed to store image URL
        available: true,
        category: '',
        quantity: ''
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:7400/api/food/add', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Data Added Successfully');
            console.log('Food added successfully:', response.data);
            setShowPopup(true);
            setFormData({
                name: '',
                description: '',
                price: '',
                image: '',
                available: true,
                category: '',
                quantity: ''
            });
        } catch (error) {
            alert('Failed to add data or You are not an admin');
            console.error('There was an error adding the product:', error);
        }
    };

    return (
        <div className="container addFood">
            <h2>Add Food</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Food Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Food Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="veg"
                            name="category"
                            value="Veg"
                            checked={formData.category === 'Veg'}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="veg">
                            Veg
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="nonveg"
                            name="category"
                            value="Non-Veg"
                            checked={formData.category === 'Non-Veg'}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="nonveg">
                            Non-Veg
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="available"
                        name="available"
                        checked={formData.available}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="available">
                        Available
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
