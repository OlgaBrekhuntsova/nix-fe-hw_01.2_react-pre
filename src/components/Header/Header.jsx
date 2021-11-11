import styles from "./Header.module.css";
import React, { useState } from "react";
import Logo from '../generic/Logo/Logo';
import Burger from '../generic/Burger/Burger';
import Menu from '../Menu/Menu';
import menuList from '../Menu/menuList.json';
import contactsList from '../Menu/contactsList.json';

const Header = () => {
    let burgerState = false;
    let [menuState, setMenuState] = useState(burgerState);
    // function handleMenu (burgerState) {setMenuState(burgerState) };
            return (
                <header className={ styles.headerWrapper}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                            <Logo />
                            <Burger menuState={menuState} handleMenu = {(isOpen)=> setMenuState(isOpen)}/>
                                        </div>
                        <Menu menuList={menuList} contactsList={contactsList} menuState={ menuState}/>
                </div>
             </header>
        );
    };
export default Header;