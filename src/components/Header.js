import React from 'react';

const Header = (props) => {
    return ( 
        <div className='container text-center'>
           <p>{props.parag}</p>
        </div>
     );
}
 
export default Header;