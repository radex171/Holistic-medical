import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {

    render(){

        return(
            <header className={styles.component}>
                <div className={styles.logos}>
                    <img src={process.env.PUBLIC_URL + '/images/czlowiek.png'} alt='zdjecie czlowieka' className={styles.logo1}/><br/>
                    <img src={process.env.PUBLIC_URL +'/images/slogan.png'} alt='slogan' className={styles.logo2}/>
                </div><br></br>
                <nav className={styles.nav}>
                    <NavLink className={styles.link} exact to='/'>O Nas</NavLink>
                    <NavLink className={styles.link} exact to='/naturoterapie'>Naturoterapie</NavLink>
                    <NavLink exact className={styles.link} to='/szkolenia-Kropli-Krwi'>Szkolenia Kropli Krwi</NavLink>
                    <NavLink exact className={styles.link} to='/naturoterapia-szkolenia'>Szkolenia - naturoterapia</NavLink>
                    <NavLink exact className={styles.link} to='/nsp'>NSP</NavLink>
                    <NavLink exact className={styles.link} to='/badania'>Badania</NavLink>
                    <a href="https://www.youtube.com/channel/UC5qoXgZ05LSYUTCcnc0viYA" className={styles.link}>Youtube</a>
                    <NavLink exact className={styles.link} to='/kontakt'>Kontakt</NavLink>
                </nav>

                <h1>Holistic Medical Academy</h1>
                    <span>tel. (+48) 603 101 601<br/>email: <a href="mailto">zywakroplakrwi@wp.pl</a></span><br/><br></br>
            </header>
        )
    }
}

export default Header;