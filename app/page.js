"use client";
import styles from "./page.module.css";
import useProducts from "./hooks/useProducts";
import Products from "./components/Products";
import Search from "./components/Search";

export default function Home() {

  const { filteredData, loading, error, searchTerm, handleChange } = useProducts();

  error && <p>{error}</p>;
  
  return (
    <main className={styles.main}>
      <h1>Products</h1>
      <Search handleChange={handleChange} searchTerm={searchTerm}/>   
      <Products filteredData={filteredData} loading={loading}/>
    </main>
  );
}

