import React from 'react';
import styles from './App.module.scss';
import MainLayout from './components/layout/mainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/views//about/About';
import Naturoteraphy from './components/views/naturoteraphy/Naturoteraphy';
import BloodDropCourses from './components/views/bloodDropCourses/BloodDropCourses';
import LightField from './components/views/lightField/LightField';
import DarkField from './components/views/darkField/DarkField';
import BloodStaining from './components/views/bloodStaining/BloodStaining';
import DryBlood from './components/views/dryBlood/DryBlood';
import NaturoteraphyCourse from './components/views/naturoteraphyCourse/NaturoteraphyCourse';
import Nsp from './components/views/nsp/Nsp';
import Analysis from './components/views/analysis/Analysis';
import Contact from './components/views/contact/Contact';
class App extends React.Component {

  render(){

    return(
      <div className={styles.component}>
        <BrowserRouter>
          <Switch>
            <MainLayout>
              <Route path='/' exact component={About}/>
              <Route path='/naturoterapie' exact component={Naturoteraphy}/>
              <Route path='/Szkolenia-Kropli-Krwi' exact component={BloodDropCourses}/>
              <Route path='/jasne-pole' exact component={LightField}/>
              <Route path='/ciemne-pole' exact component={DarkField}/>
              <Route path='/rozmaz-z-barwieniem' exact component={BloodStaining}/>
              <Route path='/sucha-krew' exact component={DryBlood}/>
              <Route path='/naturoterapia-szkolenia' exact component={NaturoteraphyCourse}/>
              <Route path='/nsp' exact component={Nsp}/>
              <Route path='/badania' exact component={Analysis}/>
              <Route path='/kontakt' exact component={Contact}/>
            </MainLayout>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;