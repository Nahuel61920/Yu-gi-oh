import { useState, useEffect } from "react";
import styles from '../../styles/Nav.module.css';
import {
  fetchCard,
  searchName
} from "../../redux/reducers/cardReducer";
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
          />
        </div>
      </nav>
    </div>
  )
}

export default Nav