import Nav from './Nav';
import styles from '../styles/Layout.module.css';
import Header from './Header';

const Layout = (props) => {
    return(
        <>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header/>
                    {props.children}
                </main>
            </div>
        </>
    )
};

export default Layout;