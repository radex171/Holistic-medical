import React from 'react';
import Styles from './NaturoteraphyCourse.module.scss';

class NaturoteraphyCourse extends React.Component {

    render(){
        return(
            <main>
                <img src="images/szn001.jpg" className={Styles.logo} alt='logo'/>
                <h4>Kurs zawodowy naturoterapii z klasyfikacją zawodu Naturopata o nr: 323009<br/>
                nr klasyfikacji 32<br/>
                wg rozporządzenia MPiPS z dnia 07.08.2014<br/>
                Dz.U. z 2014r. poz. 1145</h4><br/>
                <div className={Styles.gallery}>
                    <img src="images/005.JPG" alt='szkolenie'/>
                    <img src="images/008.JPG" alt='szkolenie'/>
                    <img src="images/015.JPG" alt='szkolenie'/>
                </div>
			<br/><br/>
										
				Każdy z nas korzysta z jakieś formy diagnostyki pacjenta i każdemu z nas zależy,<br/> 
                aby w jak najskuteczniejszy sposób rozwiązywać problemy zdrowotne, <br/>
				mając na uwadze dobro pacjenta oraz dobro naszego rozwoju w dziedzinie naturoterapii. <br/>
                Aby tak rzeczywiście było, niezbędne jest ciągłe pogłębianie wiedzy <br/>
				w zakresie naturalnych metod terapeutycznych. Dlatego zachęcam do skorzystania z kursu, <br/>
                na którym wybitni specjaliści mający na swoim koncie mnóstwo spektakularnych osiągnięć <br/>
                w dziedzinie naturoterapii podzielą się z Państwem swoim doświadczeniem <br/>
                w rozwiązywaniu najtrudniejszych  przypadków chorobowych.<br/><br/>

				Dobór i weryfikacja specjalistów zajęła nam kilka lat. Szukaliśmy osób wyjątkowych, o niezwykłej wiedzy <br/>
                i doświadczeniu, dla których nie ma tzw. chorób nieuleczalnych.
				Omawianych jest większość narządów i układów, podane są rozwiązania w tzw. „pigułce” <br/>
                szybkiego i skutecznego rozwiązania problemów zdrowotnych metodą naturalną. <br/>
				Z wielką uwagą omawiane są te schorzenia, <br/>
                które uchodzą za nieuleczalne m.in. choroby z autoagresji oraz nowotworowe. <br/><br/>
				Jeśli chciałbyś/chciałabyś, aby z Twojego Gabinetu każdy pacjent wyszedł zadowolony, ten kurs jest przeznaczony dla Ciebie.<br/><br/>

				<b className={Styles.rightText}><i>"Ziołolecznictwo matką medycyny"</i><br/> (Hipokrates)</b> <br/>  

				<h3>Program Szkolenia:</h3>
			    <h4>Bloki tematyczne:</h4>
			    
			    *Podstawy wszystkich chorób<br/>
                *Oczyszczanie organizmu ogólne i z parazytów<br/>
                *Odkwaszanie organizmu <br/>
                *Prawidłowa suplementacja<br/>
                *Fitoterapia<br/>
                *Dietoterapia<br/>
                <h4>Program:</h4>
                
                *Na czym polega medycyna Holistyczna<br/>
                *Zaburzenia układu pokarmowego<br/>
                *Zaburzenia układu krwionośnego<br/>
                *Zaburzenia układu nerwowego i zaburzeń neurologicznych<br/>
                *Zaburzenia układu kostnego<br/>
                *Zaburzenia układu mięśniowego<br/>
                *Zaburzenia układu hormonalnego<br/>
                *Zaburzenia układu moczowo-płciowego<br/>
                *Zaburzenia układu immunologicznego<br/>
                *Zaburzenia układu oddechowego<br/>
                *Infekcje pasożytnicze,grzybicze, bakteryjne, wirusowe<br/>
                *Celowana suplementacja<br/>
                *Wybór firm suplementacyjnych o najwyższych standardach jakościowych.<br/><br/>

                <b><h3>Uwaga:</h3> 
                Od uczestnika kursu wymagana jest podstawowa wiedza z              anatomii człowieka.</b><br/><br/><br/>
               
                <img className={Styles.logo} src="images/program-naturopatia.jpg" alt='informacja'/><br/><br/><br/>
               
				<b>Serdecznie zapraszam!
				<br/>
				Elżbieta Gołaszewska.
                </b>
            </main>
        )
    }
}

export default NaturoteraphyCourse;