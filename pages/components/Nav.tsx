import { useState, useEffect } from "react";
import styles from "../../styles/Nav.module.css";
import { fetchCard, searchName } from "../../redux/reducers/cardReducer";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const dispatch: any = useDispatch();
  const [name, setName] = useState("");

  function handleSubmit(e: string) {
    dispatch(searchName(e));
  }

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}></div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleSubmit(e.target.value);
            }}
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
