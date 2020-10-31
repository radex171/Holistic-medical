import React from 'react';
import styles from './App.module.scss';
import MainLayout from './components/layout/mainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/views//about/About';

class App extends React.Component {

  render(){

    return(
      <div className={styles.component}>
        <BrowserRouter>
          <Switch>
            <MainLayout>
              <Route path='/' exact component={About}/>
            </MainLayout>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;