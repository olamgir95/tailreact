import React from 'react';
import barbour from '../../assets/imgs/barbour.png'
function Brands(props) {
    return (
        <div className='mx-5 items-center flex flex-col'>
            <p>Trusted by world-class brands.</p>
            <ul className='flex justify-between w-full'>
                <li>
                    <img src={barbour} alt="" />
                </li>
                <li>
                    <img src={barbour} alt="" />
                </li>
                <li>
                    <img src={barbour} alt="" />
                </li>
                <li>
                    <img src={barbour} alt="" />
                </li>
                <li>
                    <img src={barbour} alt="" />
                </li>
                <li>
                    <img src={barbour} alt="" />
                </li>
                <li>
                    <img src={barbour} alt="" />
                </li>
                <li>
                    <img src={barbour} alt="" />
                </li>
            </ul>
        </div>
    );
}

export default Brands;