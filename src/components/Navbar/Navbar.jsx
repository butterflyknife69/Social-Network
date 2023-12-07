import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeClassName = navData => navData.isActive ? s.active : s.item;

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={activeClassName}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={activeClassName}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={activeClassName}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={activeClassName}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={activeClassName}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' className={activeClassName}>Setting</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;