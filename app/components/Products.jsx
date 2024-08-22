"use client";
import Image from "next/image";
import styles from "../page.module.css";
import 'aos/dist/aos.css';

export default function Products({ filteredData, loading}) {
    return (
            <div className={styles.grid}>
                {loading ? <p>Loading...</p> : !filteredData?.length ? <p className={styles.norecord}>No product found</p> : filteredData?.map((data, index) => {
                    return <div key={index} className={styles.card}>
                        <Image
                            src={data.thumbnail}
                            alt="product image"
                            className={styles.productImage}
                            width={200}
                            height={200}
                            data-aos="fade-up"
                        />
                        <p className={styles.price}>$ {data.price}</p>
                        <h4>{data.title}</h4>
                        <p data-aos="fade-right" className={styles.description}>{data.description}</p>
                    </div>

                })}
            </div>
        
    );
}