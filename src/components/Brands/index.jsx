import React from 'react';
import barbour from '../../assets/imgs/barbour.png'
import newyork from '../../assets/imgs/newyork.png'
import lvmh from '../../assets/imgs/lvmh.png'
import estee from '../../assets/imgs/estee.png'
import tjx from '../../assets/imgs/tjx.png'
import river from '../../assets/imgs/river.png'
import radisson from '../../assets/imgs/radisson.png'
import gstar from '../../assets/imgs/gstar.png'

function Brands(props) {
    return (
        <div className='mx-5 items-center flex flex-col'>
            <p>Trusted by world-class brands.</p>
            <ul className='flex justify-between w-full'>
                <li>
                    <img src={barbour} alt="" />
                </li>
                <li>
                    <img src={newyork} alt="" />
                </li>
                <li>
                    <img src={lvmh} alt="" />
                </li>
                <li>
                    <img src={estee} alt="" />
                </li>
                <li>
                    <img src={tjx} alt="" />
                </li>
                <li>
                    <img src={river} alt="" />
                </li>
                <li>
                    <img src={radisson} alt="" />
                </li>
                <li>
                    <img src={gstar} alt="" />
                </li>
            </ul>
        </div>
    );
}

export default Brands;