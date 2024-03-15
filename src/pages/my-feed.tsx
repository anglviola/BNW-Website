import React from 'react';
import styles from '../styles/design.module.css';
import HeaderUser from '../components/Header-User';
import Footer from '../components/Footer';

const MyFeed: React.FC = () => {
    return (
        <>
            <HeaderUser />
            <div className={styles.account}>
                <p className={styles.bnwb}>Welcome to BNW Buddies Gallery!</p>
                <p className={styles.share}>Share now your favorite photos.</p>
                <form action="" method="POST" encType="multipart/form-data">
                    <input type="text" name="caption" id="caption" className={styles.textt} placeholder="Share your thoughts using a photo!" autoComplete="off" /><br />
                    <input type="file" name="imagee" id="imagee" accept="image/png, image/jpg, image/jpeg" className={styles.image} required />
                    <input type="submit" value="Upload" id="post_btn" name="post_btn" className={styles.submit} />
                </form>
            </div>
            <div className={styles.gallery_container}>
                <section className={styles.gallery_display}>
                    <div className={styles.box_container}>
                        <form action="" method="POST" name="display_form">
                            <center>
                                <div className={styles.gallery_box}>
                                    <p className={styles.umail}>johndoe</p>
                                    <img src="/assets/images/ek.jpg" alt="Image" />
                                    <p>Sample Caption</p>
                                </div>
                            </center>
                        </form>
                        <form action="" method="POST" name="display_form">
                            <center>
                                <div className={styles.gallery_box}>
                                    <p className={styles.umail}>johndoe</p>
                                    <img src="/assets/images/ek.jpg" alt="Image" />
                                    <p>Sample Caption</p>
                                </div>
                            </center>
                        </form>
                        <form action="" method="POST" name="display_form">
                            <center>
                                <div className={styles.gallery_box}>
                                    <p className={styles.umail}>johndoe</p>
                                    <img src="/assets/images/ek.jpg" alt="Image" />
                                    <p>Sample Caption</p>
                                </div>
                            </center>
                        </form>
                        <form action="" method="POST" name="display_form">
                            <center>
                                <div className={styles.gallery_box}>
                                    <p className={styles.umail}>johndoe</p>
                                    <img src="/assets/images/ek.jpg" alt="Image" />
                                    <p>Sample Caption</p>
                                </div>
                            </center>
                        </form>
                        <form action="" method="POST" name="display_form">
                            <center>
                                <div className={styles.gallery_box}>
                                    <p className={styles.umail}>johndoe</p>
                                    <img src="/assets/images/ek.jpg" alt="Image" />
                                    <p>Sample Caption</p>
                                </div>
                            </center>
                        </form>
                        <form action="" method="POST" name="display_form">
                            <center>
                                <div className={styles.gallery_box}>
                                    <p className={styles.umail}>johndoe</p>
                                    <img src="/assets/images/ek.jpg" alt="Image" />
                                    <p>Sample Caption</p>
                                </div>
                            </center>
                        </form>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default MyFeed;
