import { useEffect } from 'react';
import logo from '../src/assets/img/ex (600 x 300 px).png';
import { Link } from 'react-router-dom';

export default function Nav(){
    const navBar = document.getElementsByClassName('navBar');
    const addActiveClass = ()=> navBar[0].classList.toggle('navBarActive');

    return <nav>
        <Link to='/'><img src={logo}/></Link>
        <div className='navBar' onClick={() => addActiveClass()} tabIndex={0}   >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/expo'>Expo</Link></li>
            <li><Link to='/product'>Product Launches</Link></li>
        </ul>
    </nav>
}
