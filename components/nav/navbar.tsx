import React from 'react';
import style from '../../styles/navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

export default function NavComponent() {
  return (
    <div className={style.navbar}>
      <div>
        <li className={style.navLinkContainer}>Blog App</li>
      </div>
      <div>
        <ul className={style.navLinkContainer}>
          {navList.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

const navList = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Post',
    href: '/post',
  },
  {
    title: 'About',
    href: '/about',
  },
];
