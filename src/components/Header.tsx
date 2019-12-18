import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/tasks'>Tasks</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </ul>
    );
};
