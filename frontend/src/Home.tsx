import styles from './Home.module.css';

function TopBanner() {
  return (
    <>
      <div className="row"></div>
      <div className="col-3">
        <img src="./JoelHiltonHeadshot.jpg" alt="JoelHeadshot" />
      </div>
      <div className="col align-self-center ">
        <h1 className={styles.h1}>Welcome to my movie collection website</h1>
      </div>
    </>
  );
}

export default TopBanner;
