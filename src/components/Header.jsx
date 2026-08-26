import React, { useContext } from 'react'
import "./Header.css"
import { ThemeContent } from "../context/ThemeContext";
const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContent);
    return (
        <header className={`shadow ${theme}`}>
            <div className='header-div1'>
                <div>
                    <h1>Kevin Bennett</h1>
                </div>
                <div className='header-div2'>
                    <span>Section two</span>
                    <span>Section three</span>
                    <span>Section four</span>
                </div>
            </div>
            <div className='header-div3'>
                <div className='header-img'><img className='header-img' src="https://thumbs.dreamstime.com/b/facebook-twitter-instagram-telegram-collection-popular-social-media-messenger-kyiv-ukraine-january-174208120.jpg" alt="" /></div>
               
            </div>
        </header>
    )
}

export default Header
