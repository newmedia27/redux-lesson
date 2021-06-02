import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from "./utils";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">Home</Link>
        {Object.keys(MenuItems).map((item) => (
          <NavLink
            exact
            key={item}
            to={`/categories/${item}`}
            activeClassName={styles.active}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
