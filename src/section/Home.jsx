import React, { useContext } from 'react'
import "./Home.css"
import { ThemeContent } from "../context/ThemeContext";
const Home = () => {
     const { theme, toggleTheme } = useContext(ThemeContent);
    return (
        <div className={`shadow ${theme}`}>
            <div className="container py-5">
                    
                    <button className="btn btn-dark" onClick={toggleTheme}>
                        {theme === "light" ? "Dark mode" : "Light mode"}
                    </button>
                </div>
            <div className='home-div1'>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWeqNbuR4Cz1pCMhhdjJWmwUas-Nvfg0jRsZc1C3-gYN-ZQyG5" alt="" />
            </div>
            <div className='home-div2'>
                <h1>Hello. <br />My name is Kevin.</h1>
            </div>
            <div className='home-div3'>
                <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making <br /> complex processes easy to use. <br />
                    Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading <br /> a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great <br /> team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising <br /> our platforms and products. <br />
                    I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
            </div>
        </div>
    )
}

export default Home
