import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <Link to='/' class="btn btn-ghost normal-case text-xl" >Home</Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>SignUp</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;