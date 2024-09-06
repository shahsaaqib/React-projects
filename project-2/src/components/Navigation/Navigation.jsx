import styles from './navigation.module.css';
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <a href="https://www.amazon.in" target="_blank">
          <img src="./images/amazon.png" alt="amazon" />
        </a>
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button className={styles.nav_button}>login</button>
    </nav>
  );
};

export default Navigation;
