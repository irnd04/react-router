import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink to="/about/이재국/password" className="item" activeClassName="active">About</NavLink>
            <NavLink to="/posts" className="item" activeClassName="active">Posts</NavLink>
            <NavLink to="/me" className="item" activeClassName="active">마이페이지</NavLink>
            <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink>
            <NavLink to="/search?keyword=하이용" className="item" activeClassName="active">Search</NavLink>
        </div>
    );
};

export default Header;