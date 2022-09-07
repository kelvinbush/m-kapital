import React, {useState, useRef, useEffect} from 'react';
import styles from './Sidebar.module.scss'
import {VscHome, VscMenu} from "react-icons/vsc";
import {FiChevronDown, FiSearch} from "react-icons/fi";
import {BiBell} from "react-icons/bi";
import {IoMailOutline} from "react-icons/io5";
import {HiOutlineFolder} from "react-icons/hi";
import {FaRegFileArchive} from "react-icons/fa";
import {AiOutlinePieChart} from 'react-icons/ai';
import useOnClickOutside from 'use-onclickoutside'

const Sidebar = () => {
  const wrapperRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  
  function toggleNav() {
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }
  
  const handleClickOutside = (event: any) => {
    // @ts-ignore
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };
  
  useOnClickOutside(wrapperRef, handleClickOutside)
  
  return (
    <section className={styles.topbar}>
      <div className={`${styles.topbar__nav} ${showSidebar ? `${styles.active}` : ""}`}>
        <nav ref={wrapperRef} className={styles.nav_menu}>
          <img src="../assets/logo.png" alt="Melanin Kapital" />
          <ul>
            <li className={styles.nav_item}>
              <VscHome />
              <p>Home</p>
            </li>
            <li className={styles.nav_item}>
              <HiOutlineFolder />
              <p>Business profile</p>
            </li>
            <li className={styles.nav_item}>
              <FaRegFileArchive />
              <p>Risk profile</p>
            </li>
            <li className={styles.nav_item}>
              <AiOutlinePieChart />
              <p>Funding</p>
            </li>
          </ul>
        </nav>
        <VscMenu className={styles.toggle} onClick={toggleNav} />
        <p>Funding</p>
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

export default Sidebar;
