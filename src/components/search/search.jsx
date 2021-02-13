import React from "react";
import styles from "./search.module.css";

const Search = ({ onSearch }) => {
  const inputRef = React.createRef();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = inputRef.current.value;
    query && onSearch(query);
  };

  return (
    <header className={styles.header}>
      <a href={window.location.origin} className={styles.container}>
        <img
          className={styles.logo}
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="site logo"
        />
        <h1 className={styles.title}>YouTube</h1>
      </a>

      <form className={styles.bar}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="YouTube 검색"
        />
        <button type="submit" className={styles.button} onClick={handleSearch}>
          <img
            src={process.env.PUBLIC_URL + "/images/search.png"}
            alt="search button"
            className={styles.buttonImg}
          />
        </button>
      </form>
    </header>
  );
};

export default Search;
