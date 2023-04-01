import styles from './Home.module.css';

function TopBanner() {
  return (
    <>
      <div className="row"></div>
      <div className="text-center">
        <h1 className={styles.h1}>Welcome to my movie collection website</h1>
      </div>
      <div className="text-center">
        <img src="./JoelHiltonHeadshot.jpg" alt="JoelHeadshot" />
      </div>
    </>
  );
}

export default TopBanner;
