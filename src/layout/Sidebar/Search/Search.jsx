import React, { useState } from "react";
import styles from "./search.module.sass";
import { ReactComponent as Icon } from "./images/search.svg";
import { useHistory } from "react-router";

function validation() {}

export default function Search() {
  const [state, setState] = useState({ searchQuery: null });

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validation(state)) return;
    history.push(`/search?search=${state.searchQuery}`);
    setState({ searchQuery: "" });
  };

  const changeHandler = ({ target }) => {
    setState({
      [target.name]: target.value,
    });
  };

  return (
    <form onSubmit={submitHandler} name="search" className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search a contact"
        name="searchQuery"
        autoComplete={false}
        onChange={changeHandler}
        value={state.searchQuery}
      />
      <button type="submit" className={styles.iconWrap}>
        <Icon className={styles.icon} />
      </button>
    </form>
  );
}
