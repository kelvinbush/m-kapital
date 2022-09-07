import React from 'react';
import styles from './Topbar.module.scss'
import {VscMenu} from "react-icons/vsc";
import {FiChevronDown} from "react-icons/fi";
import {BiBell} from "react-icons/bi";
import {IoMailOutline} from "react-icons/io5";

// @ts-ignore
const Topbar = ({toggle, showSidebar}) => {
  
  return (
    <section className={styles.topbar}>
      <div className={`${styles.topbar__nav} ${showSidebar ? `${styles.active}` : ""}`}>
        <VscMenu className={styles.toggle} onClick={toggle} />
        <p className={styles.funding_header}>Funding</p>
      </div>
      <div className={styles.topbar__user}>
        <div className={styles.notification}>
          <IoMailOutline /><span>2</span></div>
        <div className={styles.notification}>
          <BiBell /><span>2</span></div>
        <div className={styles.topbar__user}>
          <img className={styles.topbar__user__photo} src="https://avatars.githubusercontent.com/u/45231382?v=4"
               alt="" />
          <div className={styles.topbar__user__profile}>
            <p>Kelvin Wachiye</p>
            <p>Entrepreneur <span><FiChevronDown /></span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
