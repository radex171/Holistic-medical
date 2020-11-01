import React from 'react';
import styles from './DryBlood.module.scss';

class DryBlood extends React.Component {

    render(){
        return(
            <main>
                <img className={styles.logo} src="images/4stopien.jpg" alt='kropla krwi'/><br/>

                <h3 className={styles.darkRed}>„SUCHA KROPLA” ABSOLUTNA NOWOŚĆ W POLSCE !</h3><br/>

                <ul>W tym dziale wyróżniamy 2 rodzaje kursów:<br/>

                <li><h5> - Dwudniowy kurs Badania Suchej Kropli, przeznaczony dla naszych absolwentów </h5></li>
                <li><h5> - Trzydniowy kurs dla początkujących, z podstawami hematologii.</h5></li>
                </ul><br/>
                <h4> Warsztaty badania Suchej Kropli krwi przeprowadza<br/> technik analityki medycznej Elżbieta Gołaszewska</h4><br/>
                Badanie suchej kropli według współczesnej szkoły Bredford American Biologes to <b>fenomen</b> badania krwi.<br/><br/>
                Badanie polega na pobraniu trzech kropli krwi (nieco inną techniką niż w przypadku badania w jasnym lub ciemnym polu czy rozmazie), a następnie pozostawieniu próbki na 2-3 minuty, do momentu jej wysuszenia. <br/><br/>
                Następnie obserwacja występujących zjawisk wraz z ich opisem trwa ok. pół godziny.
                W jej trakcie pacjent ma możliwość oglądania próbki swojej krwi na ekranie monitora.<br/><br/>

                W zaledwie kilka chwil – dzięki możliwościom, jakie daje nam mikroskop, możemy milimetr po milimetrze dokładnie przestudiować całą pobraną kroplę pod kątem prawidłowości 
                oraz ewentualnych nieprawidłowości w niej występujących. Kropla taka jest bowiem widoczna od razu w całości w okularach obiektywu.
                Znajduje się ona w kole, w którym dosłownie każdy milimetr mówi nam o prawidłowości lub patologii.<br/><br/>

                <b>Zapewne ze względu na swoją wyjątkową wręcz dokładność ,bez możlwości pominięcia żadnego fragmentu pobranej próbki badanie to wysunęło się na pierwsze miejsce w diagnostyce prywatnych gabinetów w Stanach Zjednoczonych.</b><br/><br/>

                <ul><b><i>I tak poszczególne pasma próbek krwi mówią nam m.in.:</i></b>

                <li>- czy organizm nie jest zbyt obciążony toksynami i metalami ciężkimi;</li>
                <li>-  czy mamy odpowiedni poziom witaminy C, a jeśli nie, jaki jest stopień jej niedoboru;</li>
                <li>-  czy cierpimy na zwyrodnienia stawów i kregów;</li>
                <li>-  stan tarczycy,i układu hormonalnego</li>
                <li>- o stan dróg moczowo-płciowych (nerek, pęcherza, macicy, jajników, prostaty ).</li>
                <li>- obecność pasozytów(możliwość dodatkowego potwierdzenia pasożytów w jasnym polu)</li>
                <li>- niedobory wapnia</li>
                <li>- zaburzenia przyswajalności witaminowo-mineralnych</li>
                <li>- urazy głowy</li>
                <li>- zakwaszenie (potwierdzenie prawidłowosci jasnego pola)</li>
                <li>- stany zapalne</li>
                <li>- zaburzenie pracy serca</li>
                <li>- obraz po antybiotykoterapii</li>
                <li>- silny długotrwały stres</li>
                <li>- obraz grzybicy</li>
                <li>- zatkane pory skóry,poziom problemu,obniżone pocenie się,lub całkowity ich brak</li>
                <li>- agregacja (zastoje krwi)</li>
                <li>- alergia</li>
                <li>- stres nadnerczy</li>
                <li>- kryształy kwasu moczowego</li>
                <li>-  możliwosć obserwacji nietypowych "nitek' fibrynowych świadczących o nadmiarze wirusów</li>
                </ul>
                Ponadto sam środek próbki świadczy o stanie jelit, ich dobrej kondycji lub występujących patologiach w formie stanów zapalnych czy choroby nowotworowej.<br/><br/>
                
                <div className={styles.gallery}>
                   <img src="images/witC.jpg" className={styles.photo1} alt='zdjecie krwi'/>
                    <img src="images/zmsk.jpg" className={styles.photo1}  alt='zdjecie krwi'/>
                    <img src="images/stzwyr.jpg"className={styles.photo1}  alt='zdjecie krwi' />
                </div>

                <br/>
                Badanie suchej kropli wymaga mikroskopu do jasnego pola, wymagany jest tylko dodatkowy specjalny niedrogi obiektyw. <br/><br/>
                <h3 className={styles.darkRed}>Po ukończeniu kursu uczestnik otrzymuje:</h3>
                <p><b>1.<span className={styles.darkRed}> Certyfikat</span></b> ukończenia kursu doszkalającego Badania Suchej Kropli Krwi.</p><br/><br/>
                <b>Na wszystkich naszych kursach badania krwi obwodowej przewidziane są kilkugodzinne warsztaty badania krwi z udziałem absolwentów.</b><br/><br/>
                <b>Wszystkich zainteresowanych pogłębianiem wiedzy badania krwi obwodowej <br/>zapraszamy na powyższy kurs doszkalający</b><br/><br/>
                <br/>
                Szczegółowych informacji udzielamy:<br/>
                pod nr tel. +48 603-101-601<br/>
                Lub drogą  e-mailową: zywakroplakrwi@wp.pl<br/><br/>
                <b>Zapraszam<br/>
                Elżbieta Gołaszewska </b><br/>

            </main>
        )
    }
}

export default DryBlood;