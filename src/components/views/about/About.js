import React from 'react';
import styles from './About.module.scss';

class About extends React.Component {

    render(){

        return(
            <main >
                <article>
                    <h1>Holistic Medical Academy</h1>
                    tel. (+48) 603 101 601<br/>email: <a href="mailto">zywakroplakrwi@wp.pl</a><br/><br></br>
                    <img alt='wlascicielka firmy' className={styles.foto1} src={process.env.PUBLIC_URL +'/images/ela.jpg'}/><br/><br/>
                
                    <p className={styles.text}>Elżbieta Gołaszewska - osoba prowadząca niegdyś firmę znaną jako "Wigor Świat Zdrowia",<br/>
                    wraz z rozwojem i rozszerzeniem działalności firmy, powstała firma "Holistic Medycal Academy",<br/>
                    ponad 20 lat sprawowałam pieczę nad gabinetem naturoterapii
                    i jako pierwsza w Polsce wprowadziłam szkolenia badania żywej kropli krwi,
                    tak bardzo rozpowszechnione za granicą.<br/><br/>
                    Obranie takiej, a nie innej drogi życiowej,
                    wynika z tego, iż zawsze marzyłam o tym,<br/>
                     aby skutecznie pomagać ludziom, m.in. 
                    odpowiednio diagnozując ich problemy zdrowotne i nakierowując ich na właściwą ścieżkę
                    do pozbycia się tych problemów. <br/><br/>
                    To marzenie stopniowo spełniło się, dzięki czemu
                    do dziś mogę poświęcać się mojej pasji prozdrowotnego pomagania,
                    dzieląc się z innymi zdobytą przez wiele lat praktyki wiedzą.<br/><br/>
                    Kolejną zmianą jest wprowadzenie do naszej oferty 10-dniowych turnusów zdrowotnych
                    pod nadzorem lekarza,wyjątkowej specjalistki, dr Justyny Jakimiuk.<br/><br/>
                     Doszłam do wniosku,
                    że w ten sposób pomogę większej grupie ludzi niż miałoby to miejsce
                    w przypadku mojego dalszego przyjmowania pojedynczych osób w gabinecie.<br/><br/>
                    W granicach mojej działalności powołałam również Instytucję Szkoleniową,
                    w ramach której wygłaszam m.in. nieodpłatne odczyty, wykłady
                    i prelekcje w mniejszych lub większych grupach.
                    Nagrywam także filmiki o charakterze prozdrowotnym,
                    a ponadto w każdy czwartek udzielam bezpłatnych porad telefonicznych.</p><br/>

                    Pozdrawiam<br/>
                    Elżbieta Gołaszewska<br/><br/><br/>

                    INFORMACJE KONTAKTOWE:<br/><br/>
                    OSOBY zainteresowane SZKOLENIAMI lub BEZPŁATNĄ PORADĄ ZDROWOTNĄ<br/>
                     prosimy o kontakt pod numerem telefonu +48 603-101-601 <br/>
                     lub e-mail: <a href="mailto">zywakroplakrwi@wp.pl</a><br/><br/>

                    W ramach naszej placówki można korzystać z bezpłatnych porad zdrowotnych,<br/>
                     udzielanych drogą telefoniczną, w każdy czwartek, od godz. 12.00 do 18.00, tel. +48 603-101-601.<br/><br/>

                    Elżbieta Gołaszewska<br/>
                    Holistic Medical Academy<br/>

                    ZAPRASZAMY
                </article>
            </main>
        )
    }
}

export default About;