import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return(
        <div className={headerStyles.title}>
            <h1>
                <span>Web Dev</span> Articles
            </h1>
            <p className={headerStyles.description}>Articles on web development to stay tuned with new tech</p>
        </div>
    )
};

export default Header;