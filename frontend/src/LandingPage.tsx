import styles from './Home.module.css';
import Navbar from './Navbar';
function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="row"></div>
      <div>
        <img src="./JoelHiltonHeadshot.jpg" alt="JoelHeadshot" />
      </div>
      <div className="col align-self-center ">
        <h1 className={styles.h1}>Welcome to my movie collection website</h1>
      </div>
    </>
  );
}

export default LandingPage;
