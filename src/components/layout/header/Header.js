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
                    <NavLink className={styles.link} exact to='/naturoterapie'>naturoterapie</NavLink>
                    <NavLink exact className={styles.link} to='/Szkolenia Kropli Krwi'>Szkolenia Kropli Krwi</NavLink>
                    <NavLink exact className={styles.link} to='/szkolenia - naturoterapia'>szkolenia - naturoterapia</NavLink>
                    <NavLink exact className={styles.link} to='/NSP'>NSP</NavLink>
                    <NavLink exact className={styles.link} to='/Badania'>Badania</NavLink>
                    <NavLink exact className={styles.link} to='/Youtube'>Youtube</NavLink>
                    <NavLink exact className={styles.link} to='/Kontakt'>Kontakt</NavLink>
                </nav>
            </header>
        )
    }
}

export default Header;