import React from 'react';
import styles from '../styles/design.module.css'; // Import CSS module
import HeaderUser from '../components/Header-User';
import Footer from '../components/Footer';

const Gallery: React.FC = () => {
  return (
    <>
        <HeaderUser />
        <div className={styles.account}>
            <p className={styles.bnwb}>My Gallery</p>
            {/* <form action="" className={styles.update} method="POST" encType="multipart/form-data">
                <input type="text" name="update_caption" id="update_caption" className={styles.textt} placeholder="Edit caption" autoComplete="off" /><br />
                <button id="update_btn" name="update_btn" className={styles.submit}>Update</button>
            </form> */}
        </div>

        <div className={styles.gallery_container} style={{ marginTop: '60px', }}>
            <section className={styles.gallery_display}>
                <div className={styles.box_container}>
                    <form action="" method="POST" encType="multipart/form-data" name="display_form">
                        <center>
                            <div className={styles.gallery_box} style={{ height: '340px', }}>
                                <p className={styles.umail}>{}</p>
                                <img src="/assets/images/ek.jpg" alt="Image" />
                                <p>Sample Caption</p>
                                <a className={`${styles.gal_btn} ${styles.edit}`} title="Click for edit" onClick={() => confirm('Do you want to edit this post?')}>Edit</a>
                                <a className={`${styles.gal_btn} ${styles.del}`} title="Click for delete" onClick={() => confirm('Do you want to delete this post?')}>Delete</a>
                            </div>
                        </center>
                    </form>
                    <form action="" method="POST" encType="multipart/form-data" name="display_form">
                        <center>
                            <div className={styles.gallery_box} style={{ height: '340px', }}>
                                <p className={styles.umail}>{}</p>
                                <img src="/assets/images/ek.jpg" alt="Image" />
                                <p>Sample Caption</p>
                                <a className={`${styles.gal_btn} ${styles.edit}`} title="Click for edit" onClick={() => confirm('Do you want to edit this post?')}>Edit</a>
                                <a className={`${styles.gal_btn} ${styles.del}`} title="Click for delete" onClick={() => confirm('Do you want to delete this post?')}>Delete</a>
                            </div>
                        </center>
                    </form>
                    <form action="" method="POST" encType="multipart/form-data" name="display_form">
                        <center>
                            <div className={styles.gallery_box} style={{ height: '340px', }}>
                                <p className={styles.umail}>{}</p>
                                <img src="/assets/images/ek.jpg" alt="Image" />
                                <p>Sample Caption</p>
                                <a className={`${styles.gal_btn} ${styles.edit}`} title="Click for edit" onClick={() => confirm('Do you want to edit this post?')}>Edit</a>
                                <a className={`${styles.gal_btn} ${styles.del}`} title="Click for delete" onClick={() => confirm('Do you want to delete this post?')}>Delete</a>
                            </div>
                        </center>
                    </form>
                    <form action="" method="POST" encType="multipart/form-data" name="display_form">
                        <center>
                            <div className={styles.gallery_box} style={{ height: '340px', }}>
                                <p className={styles.umail}>{}</p>
                                <img src="/assets/images/ek.jpg" alt="Image" />
                                <p>Sample Caption</p>
                                <a className={`${styles.gal_btn} ${styles.edit}`} title="Click for edit" onClick={() => confirm('Do you want to edit this post?')}>Edit</a>
                                <a className={`${styles.gal_btn} ${styles.del}`} title="Click for delete" onClick={() => confirm('Do you want to delete this post?')}>Delete</a>
                            </div>
                        </center>
                    </form>
                    <form action="" method="POST" encType="multipart/form-data" name="display_form">
                        <center>
                            <div className={styles.gallery_box} style={{ height: '340px', }}>
                                <p className={styles.umail}>{}</p>
                                <img src="/assets/images/ek.jpg" alt="Image" />
                                <p>Sample Caption</p>
                                <a className={`${styles.gal_btn} ${styles.edit}`} title="Click for edit" onClick={() => confirm('Do you want to edit this post?')}>Edit</a>
                                <a className={`${styles.gal_btn} ${styles.del}`} title="Click for delete" onClick={() => confirm('Do you want to delete this post?')}>Delete</a>
                            </div>
                        </center>
                    </form>
                    <form action="" method="POST" encType="multipart/form-data" name="display_form">
                        <center>
                            <div className={styles.gallery_box} style={{ height: '340px', }}>
                                <p className={styles.umail}>{}</p>
                                <img src="/assets/images/ek.jpg" alt="Image" />
                                <p>Sample Caption</p>
                                <a className={`${styles.gal_btn} ${styles.edit}`} title="Click for edit" onClick={() => confirm('Do you want to edit this post?')}>Edit</a>
                                <a className={`${styles.gal_btn} ${styles.del}`} title="Click for delete" onClick={() => confirm('Do you want to delete this post?')}>Delete</a>
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

export default Gallery;
