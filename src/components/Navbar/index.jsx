import React from 'react';
import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
// import rectangle   from "../../assets/imgs/rectangle.png";
import './index.css'
function Navbar(props) {
    return (
        
             <ul class=" nav">
                <li class='mt-5  '><img class='2xl:w-22 w-20 md-13' src={rectangle} alt="" /></li>
                <li class="flex font-sans text-black justify-between text-sm leading-3 mt-6 text-center">
                    <a class='px-5' href="#">Why Qubit?</a>
                    <a class='px-5' href="#">Products</a>
                    <a class='px-5' href="#">Solutions</a>
                    <a class='px-5' href="#">Customers</a>
                    <a class='px-5' href="#">Case studies</a>
                    <a class='px-5' href="#">Resources</a>
                    <a class='px-5'  href="#">More</a>
                </li>
                <li class='flex justify-between mt-3 text-center'>
                    <button class=' hover:bg-pink-400 hover:text-purple rounded-full mr-9 px-9 font-sans py-3.5 text-white text-sm leading-3 text-center bg-purple'>Book a demo</button>
                    <a class='text-center mt-2' href="#">Log In</a>
                </li>

            </ul>
        
    );
}

export default Navbar;