import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
       <div className='ma4 mt0'>
           <Tilty className='Tilty br2 shadow-2 h4 w4 pa3' max={45} reverse axis='x' scale={1.2} perspective={900}>
               <div className='pa3'><img style={{paddingTop: '1px'}} alt='logo' src={brain}/></div>
           </Tilty>
       </div>
    );
}

export default Logo;