import { Link } from 'react-router-dom';
import user from './img/user.png';

const NavBar = () => {
    const name = 'John Doe';
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Pharmasysm</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Log-in</Link></li>
                    <li><Link to='/'>Sign-in</Link></li>

                    <li><Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </Link></li>
                    <li><Link to='/'>Hi {name} !<img src={user}></img></Link></li>

                    <li tabIndex={0}>
                        <a>
                            Settings
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><Link to='/'>Profile</Link></li>
                            <li><Link to='/'>Wallet</Link></li>
                            <li><Link to='/'>About Us</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;