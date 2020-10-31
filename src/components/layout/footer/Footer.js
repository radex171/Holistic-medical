import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <footer>
            <b><h5><span >Holistic Medical Academy</span><br/>
            tel. (+48) 603 101 601<br/>e-mail: 
            <a href="mailto">zywakroplakrwi@wp.pl</a> </h5></b>
            <p className={styles.info}>Wszelkie prawa do treści zastrzeżone Holistic medical Academy 
            <br/> created: Radosław Zaborski(radex171@gmail.com)</p>
           
             
        </footer>
    )
}

export default Footer;