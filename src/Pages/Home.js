import React, { useState } from 'react'
import "./Home.css"
import Cards from "../Components/Cards.js"
import Popup from '../Components/Popup'
import NewPostForm from "../Components/NewPostForm.js"

function Home() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [posts, setPosts] = useState([
        { username: 'usr1', review: 'amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing', productName: 'pn1', productType: 'pt1', skinType: 's1', am_pm: 'ampm1', price: '1', duration: '1', id: 1 },
        { username: 'usr2', review: 'beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful ', productName: 'pn1', productType: 'pt1', skinType: 's1', am_pm: 'ampm1', price: '1', duration: '1', id: 2 },
        { username: 'usr3', review: '', productName: 'pn1', productType: 'pt1', skinType: 's1', am_pm: 'ampm1', price: '1', duration: '1', id: 3 },
        { username: 'usr1', review: 'amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing', productName: 'pn1', productType: 'pt1', skinType: 's1', am_pm: 'ampm1', price: '1', duration: '1', id: 4 },
        { username: 'usr2', review: 'beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful beautiful ', productName: 'pn1', productType: 'pt1', skinType: 's1', am_pm: 'ampm1', price: '1', duration: '1', id: 5 },
        { username: 'usr3', review: '', productName: 'pn1', productType: 'pt1', skinType: 's1', am_pm: 'ampm1', price: '1', duration: '1', id: 6 }
    ])
    return (
        <div className='home'>
            <h1>Home Page</h1>
            <button onClick={() => setButtonPopup(true)}>Open</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <NewPostForm />
            </Popup>
            <Cards posts={posts} setPost={setPosts} />

        </div>
    )
}

export default Home;