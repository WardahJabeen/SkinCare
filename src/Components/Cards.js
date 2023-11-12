import React, { useState } from 'react'
import "./Cards.css"

function Cards(props) {
    return (
        <div className='cards'>
            {props.posts.map((post) => (
                <div className='post-preview' key={post.id}>
                    <h2>{post.username}</h2>
                    <p>Review: {post.review}</p>
                    <h3>Filters:</h3>
                    <ul>
                        <li>Product Name: {post.productName}</li>
                        <li>Product Type: {post.productType}</li>
                        <li>Skin Type: {post.skinType}</li>
                        <li>AM/PM: {post.am_pm}</li>
                        <li>Price: {post.price}</li>
                        <li>Duration: {post.duration}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Cards;