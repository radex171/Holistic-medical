import React from 'react';
import styles from './BloodDropCourses.module.scss';
import {NavLink} from 'react-router-dom';

class BloodDropCourses extends React.Component {

    render(){
        return(
            <main>
                <h3>Lista kursów szkolenia kropli krwi:</h3><br/>
                <aside>
                    <NavLink className={styles.link} exact to='/jasne-pole'>I stopień - kropla krwi - Jasne Pole</NavLink><br/>
                    <NavLink className={styles.link} exact to='/ciemne-pole'>II stopień - kropla krwi - Ciemne Pole</NavLink><br/>
                    <NavLink className={styles.link} exact to='/Rozmaz-z-barwieniem'>III stopień - kropla krwi - Rozmaz z barwieniem</NavLink><br/>
                    <NavLink className={styles.link} exact to='/sucha-krew'>IV stopień - kropla krwi - NOWOŚĆ! - Sucha kropla krwi</NavLink><br/>
                </aside>
            </main>
        )
    }
}

export default BloodDropCourses;