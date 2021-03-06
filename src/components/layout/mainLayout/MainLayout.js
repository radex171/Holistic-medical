import React from 'react';
import styles from './MainLayout.module.scss';
import Header from '../header/Header';
import PropTypes from 'prop-types';
import Footer from '../footer/Footer';

class MainLayout extends React.Component {

    
  static propTypes = {
    children: PropTypes.any,
  }
    render(){
        const {children} = this.props;
        return(
            <div className={styles.component}>
                <Header />
                {children}
                <Footer/>
            </div>
        )
    }
}

export default MainLayout;