import React, { useState, useEffect } from 'react';
import styles from '../styles/design.module.css';

const Register: React.FC = () => {
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
                <div className={`${styles.signin_popup} ${styles.anyname}`} id="popup_form">
                    <div className={styles.box}>
                        <div className={styles.form}>
                            <div className={styles.close} id="close_btn" onClick={closePopup}>&times;</div>
                            <h1>Registration Form</h1>
                            <div className={styles.form_group}>
                                <form name="register" method="POST" action="/login">
                                    <input type="text" name="Firstname" placeholder="Enter your first name" className={styles.popup_input} autoComplete="off" required />
                                    <input type="text" name="Lastname" placeholder="Enter your last name" className={styles.popup_input} autoComplete="off" required />
                                    <input type="email" name="Email" placeholder="Enter your email" className={styles.popup_input} autoComplete="off" required />
                                    <input type="password" name="Pword" placeholder="Enter your password" className={styles.popup_input} autoComplete="off" required />
                                    <input type="password" name="ConfirmPword" placeholder="Confirm password" className={styles.popup_input} autoComplete="off" required />
                                    <button className={styles.btn} name="signup">Register</button>
                                    <p>Already have an account? <a href="/login">Login.</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;