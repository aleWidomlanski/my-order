
import { Link } from "react-router-dom";
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable";
import styles from './Home.module.css'



const Home = () => {
    return (
        <div className={styles.home}>
            <HeaderBrandTable table={table} />
            <div className={styles.container}>
                {call === false ? <p onClick={handleCall} className={styles.call}>Llamar camarera/o</p> :
                    <div className={styles.notCallContainer}>
                        <p className={styles.notCall} >Su camarera/o se acercará a su mesa.</p>
                        <button onClick={handleCancelCall} className={styles.call} >Cancelar llamado</button>
                    </div>
                }
                <Link to={`/table/${table.table_number}/menu`} className={styles.menu}>Menú</Link>
            </div>
        </div>
    )
};

export default Home;
