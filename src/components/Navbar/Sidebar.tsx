import React, {useRef} from 'react';
import {VscHome} from "react-icons/vsc";
import {HiOutlineFolder} from "react-icons/hi";
import {FaRegFileArchive} from "react-icons/fa";
import {AiOutlinePieChart} from "react-icons/ai";
import {BsPeople} from "react-icons/bs";
import {BiBookReader} from "react-icons/bi";
import {GoMail} from "react-icons/go";
import useOnClickOutside from "use-onclickoutside";
import styles from './Topbar.module.scss'

// @ts-ignore
const Sidebar = ({setToggle, showSidebar}) => {
  const wrapperRef = useRef(null);
  
  const handleClickOutside = (event: any) => {
    // @ts-ignore
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setToggle();
    }
  }
  
  
  useOnClickOutside(wrapperRef, handleClickOutside)
  return (
    <nav ref={wrapperRef} className={`${styles.nav_menu} ${showSidebar ? `${styles.nav_menu_active}` : ""}`}>
      <div>
        <img src="https://melaninkapital.com/wp-content/uploads/2021/10/hp2-logo.png" alt="Melanin Kapital" />
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
          <li className={`${styles.nav_item} ${styles.nav_item__active}`}>
            <AiOutlinePieChart />
            <p>Funding</p>
          </li>
          <li className={styles.nav_item}>
            <BsPeople />
            <p>Konnect</p>
          </li>
          <li className={styles.nav_item}>
            <BiBookReader />
            <p>Academy</p>
          </li>
          <li className={styles.nav_item}>
            <GoMail />
            <p>Support</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
