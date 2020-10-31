import React from 'react';
import styles from './DarkField.module.scss';
import {NavLink} from 'react-router-dom';

class DarkField extends React.Component {

    render(){
        return(
            <main>
                <img alt='zdjecie krwinek' className={styles.logo} src='images/2stopien.jpg'/>
                <p>
                    Zgodnie z Rozporządzeniem Ministra Pracy i Polityki Społecznej <br/>
                    dnia 07.08.2014 Dz.U. z 2014r. poz. 1145,<br/>
                    w sprawie klasyfikacji zawodów i specjalności na rynku pracy oraz zakresu jej stosowania,<br/>
                    zawód technika analityki medycznej jest wpisany do Polskiej Klasyfikacji Zawodów i Specjalności<br/>
                    pod nr 321201.<br/>
                    W Polsce wyłącznie Instytucje Szkoleniowe<br/>
                    podlegające pod MPiPS (Ministerstwo Pracy i Polityki Społecznej)<br/>
                    oraz posiadające akredytację WUP (Wojewódzki Urząd Pracy),<br/>
                    który zatwierdził zgłoszone szkolenia, posiadają podstawy prawne <br/>
                    do przeprowadzania szkoleń mikroskopowego badania żywej kropli krwi.<br/>
                    Właściwie jedyny zgodny z polskim prawem na zastosowanie w praktyce medycyny niekonwencjonalnej.<br/><br/>
                </p>

                <div className={styles.gallery}>
                    <img alt='zdjecie szkolenia' className={styles.foto1} src='images/024.jpg'/>
                    <img alt='zdjecie szkolenia' className={styles.foto1} src='images/023.jpg'/>
                    <img alt='zdjecie szkolenia' className={styles.foto1} src='images/028.jpg'/>
                </div>
                <h3 className={styles.darkRed}>Wszystkich zainteresowanych szkoleniem badania krwi obwodowej</h3>
							
                <h5>W Ciemnym Polu Widzenia w/g Prof. Guntera Enderline'a</h5>
                <h4 className={styles.darkRed}>Zapraszam do kontaktu pod nr tel. +48 603-101-601</h4><br/>

                <img alt='zdjecie krwinek' className={styles.logo} src='images/ciemne_pole.jpg'/><br/>

				Badanie krwi za pomocą mikroskopu zainicjował w 1916 roku<br/>
                bakteriolog dr Gunter Enderlein, który zajmował sie drobnoustrojami wywołującymi tyfus. <br/>
                Badając krew odkrył między poruszającymi się krwinkami czerwonymi poruszające się maleńkie drobinki. Nie potrafił wyjaśnić tego zjawiska do czasu, <br/>
                gdy zetknął się z pracami Antione'a Bechampa z 1883 r. <br/>
                w którym postulował, że komórki wszystkich zwierząt i roślin <br/>
                zawierają maleńkie cząstki przypominające ziarenka żyjące nadal, <br/>
                choć same komórki giną.<br/><br/>

                Dr. Enderlein nazwał te białkowe cząsteczki endobiontami 
                i według niego spełniały one role regulatorów w komórkach i płynach ciała. 
                Badacz ten odkrył, że gdy środowisko biologiczne ustroju odbiega od normy, 
                endobionty zaczynają zwiększać swoje rozmiary i ulegają przekształceniom. <br/>
                Endobionty nie są drobnoustrojami, którymi zakażamy się z zewnątrz, <br/>
                ale istnieją w organizmie wszystkich ssaków od chwili ich narodzin, <br/>
                egzystując tam symbiotycznie od czasów pradawnych er geologicznych.<br/>
                Dr. Enderlein uważał, że  endobionty, przekształcają  się do formy toksycznej <br/>
                dla organizmu gospodarza wtedy, gdy jego wewnętrzne środowisko biologiczne <br/>
                jest zachwiane, a homeostatyczne procesy regulujące nie są dostatecznie wydajne.<br/><br/>    
                Endobionty Normalna cząsteczka komórkowego białka pochodzenia roślinnego w organizmie wszystkich ssaków-niezakaźna.<br/>

                Znaleziono gen kodujący priony występujący w organizmie wszystkich ssaków.
                Posiadają pozytywne działanie regulujące na komórki.<br/><br/>

                Niekorzystne zmiany środowiska biologicznego prowadzące do przekształcenia się
                z postaci prymitywnej w wyższe formy ,czyli cyklogenezy  endobiontów w postać bakterii,
                a ostatnie stadium plemorfizmu  kończy się formą  grzybów wywołujących choroby.<br/><br/><br/>
                <b><i>Robert S. Carson, lekarz, wypowiedział się o tym w ten sposób: "Koncepcja Enderleina  i innych badaczy jest niczym przeskok kwantowy w mikrobiologię XXI wieku, który można przyrównać do przesunięcia paradygmatu w fizyce, polegające na przejściu od nauki  Newtona do poeinsteinowskiego stanu w tej dziedzinie.</i></b>
                <br/><br/>

                Może dlatego to badanie, cieszy się tak dużą popularnością w Niemczech i Szwajcarii i zostało refundowane przez narodowy fundusz zdrowia.<br/><br/>
                Badanie to pozwala na bardzo dokładną analizę białych krwinek - leukocytów, oraz obserwację osocza i jego wnikliwą ocenę pod kątem endobiontów.<br/><br/>
                Leukocyty dzielą się na:<br/>
                - Granulocyty<br/>
                - agranulocyty
                <br/><br/>

                    <h4> Granulocyty</h4>
                    <img className={styles.logo} src="images/2.jpg" alt=""/>Neutrofil<br/><br/>
                    <img className={styles.logo} src="images/0007.jpg"  alt=""/>Eozynofil<br/><br/>
                    <img className={styles.logo} src="images/0001.jpg"  alt=""/>Bazofil<br/><br/>
                    

                <br/><br/>
                <h4>Agranulocyty</h4>
                <img className={styles.logo} src="images/0006.jpg" alt=""/> Limfocyt<br/><br/>
                <img className={styles.logo} src="images/0004.jpg" alt=""/> Monocyt<br/><br/>
                <br/><br/>

                Ocena białych krwinek polega na obserwacji wyglądu oraz ilości Granulocytów i Agranulocytów.<br/><br/>
				<h4 className={styles.darkRed}>Pozostałe patologie i prawidłowości, proponujemy oceniać w badaniu żywej krwi w jasnym polu widzenia.</h4> 
                Szczegółowych informacji udzielamy:<br/>
                pod nr tel. +48 603-101-601<br/>
                Lub drogą  e-mailową: <a href="mailto">zywakroplakrwi@wp.pl</a><br/><br/>
				<b><i><h4 className={styles.darkRed}>Zapraszamy naszych absolwentów do pogłebiania wiedzy w zakresie badania krwi obwodowej, poprzez szkolenie III stopnia dla zaawansowanych,</h4> Link - <NavLink exact to='/rozmaz-z-barwieniem'>Badania Krwi - Rozmaz z Barwieniem</NavLink></i></b><br/>
				<br/><br/>
				

		        <b> Dziękujemy wszystkim za zaufanie i wybór naszej placówki szkoleniowej.</b><br/><br/>
                Zespół szkoleniowy<b> Holistic Medical Academy</b> <br/>
                Serdecznie zapraszamy!<br/>

            </main>
        )
    }
}

export default DarkField;