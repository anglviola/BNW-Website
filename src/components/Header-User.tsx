import React from 'react';
import styles from '../styles/design.module.css'; // Import CSS module

const HeaderUser: React.FC = () => {
  return (
    <nav className={styles.navigation}> {/* Apply styles using className and styles from imported CSS module */}
      <div className={styles.header}>
        <a href=""><img src="/assets/images/logo2.png" width="200px" className={styles.logo_name} /></a>
        <a href=""><img src="" alt="" title="" width="" className={styles.logo} style={{ margin: 'auto' }} /></a>
      </div>
      <a href="" className={styles.hamburger} /*onClick={ }*/> {/* Apply styles using className and styles from imported CSS module */}
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>
      <div className={styles.naviBar} id="myTopNav">
        <ul>
          <li><a href="/my-feed">HOME</a></li>
          <li><a href="/gallery">GALLERY</a></li>
          <li><a href="/account">ACCOUNT</a></li>
          <li><a href="/">LOGOUT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderUser;
