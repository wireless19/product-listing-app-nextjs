"use client";
import styles from "../page.module.css";

export default function Search({ handleChange, searchTerm }) {
    return (
        <input className={styles.search} placeholder='Search product' value={searchTerm} type="text" onChange={handleChange} />

    );
}