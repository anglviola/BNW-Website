import React from 'react';
import styles from '../styles/design.module.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <div className={styles.about}>
                <p className={styles.aboutweb}>ABOUT THIS WEBSITE</p>
                <p className={styles.bnw}>"Black and White creates a strange</p>
                <p className={styles.bnw}>dreamscape that color never can"</p>
                <p className={styles.bnw}>- Jack Antonoff</p>
            </div>
            <div className={styles.list_container}>
                <div className={styles.display}>
                    <div className={styles.info + ' ' + styles.art}>
                        <center><img src="/assets/images/bart.png" width="80px" /></center>
                        <p>Lorem ipsum dolor sit amet, non quis proident consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={styles.info + ' ' + styles.cam}>
                        <center><img src="/assets/images/bcamera.png" width="80px" /></center>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={styles.info + ' ' + styles.friends}>
                        <center><img src="/assets/images/bfriends.png" width="80px" /></center>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt exercitation ullamco mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;