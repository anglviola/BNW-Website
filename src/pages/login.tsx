import React, { useState, useEffect } from 'react';
import styles from '../styles/design.module.css';

const Login: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPopup(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className={`${styles.login_popup} ${styles.anyname}`} id="popup_form">
                    <div className={styles.box}>
                        <div className={styles.form}>
                            <div className={styles.close} id="close_btn" onClick={closePopup}>&times;</div>
                            <h1>Login Now</h1>
                            <div className={styles.form_group}>
                                <form method="POST" action="verify.php">
                                    <input type="text" placeholder="Enter your email" id="Email" name="Email" className={styles.popup_input} autoComplete="off" required />
                                    <input type="password" name="Pword" placeholder="Enter your password" className={styles.popup_input} required />
                                    <button className={styles.btn} name="login">Login</button>
                                    <p>Don't have an account? <a href="/register">Register.</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
