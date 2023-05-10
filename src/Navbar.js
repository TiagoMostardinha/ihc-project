import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Pharmasysm</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Log-in</Link></li>
                    <li><Link to='/signin'>Sign-in</Link></li>


                    <div className="dropdown dropdown-end">
                        <p tabIndex={0} className="btn btn-ghost m-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </p>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56">
                            <li><Link to='/'>About Us</Link></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;