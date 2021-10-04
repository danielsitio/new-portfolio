import styles from '../styles/about.module.scss'
import { FormattedMessage } from 'react-intl'
import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className={`${styles.section} ${styles.about}`}>
            <h2 className={styles.title}><FormattedMessage id="about"/></h2>
            <div className={styles.about_container}>
              <div>
                  <p><FormattedMessage id="about-text"/></p>
              </div>
              <div className={styles.profile_container}>
                  <Image src="/profile.jpg" layout="responsive" height="300" width="230" className={styles.profile}/>
              </div>
            </div>
            <div className={styles.tecnologies}>

            </div>
          </section>
    )
}
