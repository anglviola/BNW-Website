import React from 'react';
import styles from '../styles/design.module.css'; 
import Header from '../components/Header';
import Words from '../components/Words';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
        <div className={styles.cover}> 
        <Header />
        <Words />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
