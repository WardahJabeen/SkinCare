import React, { useState } from 'react';
import './NewPostForm.css';

function NewPostForm() {
    const [review, setReview] = useState('');
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('product type');
    const [skinType, setSkinType] = useState('skin type');
    const [priceRange, setPriceRange] = useState('price');
    const [duration, setDuration] = useState('duration');
    const [am, setAm] = useState(false);
    const [pm, setPm] = useState(false);

    return (
        <div>
            <form className='form-layout'>
                <h1>New Post</h1>
                <label>Product Review:</label>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                ></textarea>

                <h3>Filters:</h3>
                <label>Product Name:</label>
                <input
                    type="text"
                    placeholder="product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />

                <label>Product Type:</label>
                <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                >
                    <option value="toner">toner</option>
                    <option value="facewash">facewash</option>
                </select>

                <label>Skin Type:</label>
                <select
                    value={skinType}
                    onChange={(e) => setSkinType(e.target.value)}
                >
                    <option value="value1">dry</option>
                    <option value="value2">mixed</option>
                </select>

                <label>Price Range:</label>
                <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                >
                    <option value="value1">$0-$10</option>
                    <option value="value2">$11-$20</option>
                </select>

                <label>Duration:</label>
                <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                >
                    <option value="value1">1 day</option>
                    <option value="value2">less than 1 week</option>
                </select>

                <div className='checkboxes'>
                    <label>AM:</label>
                    <input
                        type="checkbox"
                        name="am"
                        id="am"
                        checked={am}
                        onChange={(e) => setAm(e.target.checked)}
                    />
                    <label>PM:</label>
                    <input
                        type="checkbox"
                        name="pm"
                        id="pm"
                        checked={pm}
                        onChange={(e) => setPm(e.target.checked)}
                    />
                </div>

                <button>Add post</button>
            </form>
        </div>
    );
}

export default NewPostForm;
