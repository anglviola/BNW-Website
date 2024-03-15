import React from 'react';
import styles from '../styles/design.module.css';
import HeaderUser from '../components/Header-User';
import Footer from '../components/Footer';

const Account: React.FC<{ user: string }> = ({ user }) => {
    const userData = {
        profile_pic: 'ek.jpg',
        Firstname: 'John',
        Lastname: 'Doe',
        Email: 'john.doe@example.com',
        user_id: '123', 
    };

    return (
        <>
            <HeaderUser />
            <div className={styles.profile}>
                <p className={styles.bnwb}>Edit Profile</p>
                <form action="" method="POST" encType="multipart/form-data" className={styles.acc}>
                    <img src={`/assets/images/${userData.profile_pic}`} width="150px" style={{ borderRadius: '50%' }} />
                    <p className={styles.name}>{`${userData.Firstname} ${userData.Lastname}`}</p>
                    <p className={styles.email}>{userData.Email}</p>
                    <a
                        className={`${styles.acc_btn} ${styles.edit}`}
                        href={`account.php?edit_id=${userData.user_id}`}
                        title="Click for edit"
                        onClick={() => confirm('Do you want to edit this post?')}
                    >
                        Edit
                    </a>
                    <a
                        className={`${styles.acc_btn} ${styles.del}`}
                        href={`?delete_id=${userData.user_id}`}
                        title="Click for delete"
                        onClick={() => confirm('Are you sure you want to delete this account?')}
                    >
                        Delete
                    </a>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Account;
