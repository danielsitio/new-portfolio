import styles from '../styles/navbar.module.scss'
import { useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({changeLanguage}) {

    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [isLangToggled, setIsLangToggled] = useState(false)


    function toggleMenu() {
        setIsMenuToggled(!isMenuToggled)
        document.getElementById("menu").classList.toggle(styles.menu_toggled)
    }
    return (
        <header className={styles.nav}>
            <div className={styles.lang} onMouseEnter={()=>setIsLangToggled(true)} onMouseLeave={()=>setIsLangToggled(false)}>
              <FontAwesomeIcon icon={faLanguage} className={styles.icon}/>
              <CSSTransition in={isLangToggled} timeout={300} classNames={{
                enter:styles.itemEnter,
                enterActive: styles.itemEnterActive,
                exitActive: styles.itemExitActive,
                }} unmountOnExit>

                  <div className={styles.item} onClick={()=>changeLanguage("es")}><a>Español</a></div>
              </CSSTransition>
              <CSSTransition in={isLangToggled} timeout={300} classNames={{
                enter:styles.itemEnter,
                enterActive: styles.itemEnterActive,
                exitActive: styles.itemExitActive,
                }} unmountOnExit>
                  <div className={styles.item2} onClick={()=>changeLanguage("en")}><a>English</a></div>
              </CSSTransition>
            </div>
            <div className={styles.filler}/>
            <div id="menu" className={styles.menu} onClick={toggleMenu}/>
            <CSSTransition in={isMenuToggled} timeout={300} classNames={{
                enter:styles.menuEnter,
                enterActive: styles.menuEnterActive,
                exitActive: styles.menuExitActive,
            }} unmountOnExit>
                <Menu toggleMenu={toggleMenu}/>
            </CSSTransition>
        </header>
    )
}
