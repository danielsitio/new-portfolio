import styles from '../styles/menu.module.scss'
import { FormattedMessage } from 'react-intl'

export default function Menu({toggleMenu}) {
    return (
        <div className={styles.menu}>
            <ul>
                <li className={styles.nav_item}><a href="#home" onClick={()=>toggleMenu()}><FormattedMessage id="home"/></a></li>
                <li className={styles.nav_item}><a href="#about" onClick={()=>toggleMenu()}><FormattedMessage id="about"/></a></li>
                <li className={styles.nav_item}><a href="#projects" onClick={()=>toggleMenu()}><FormattedMessage id="projects"/></a></li>
                <li className={styles.nav_item}><a href="#contact" onClick={()=>toggleMenu()}><FormattedMessage id="contact"/></a></li>
            </ul>       
        </div>
    )
}
