import type { NextPage } from "next";
import styles from "./sponsor-next-u-i.module.css";

const SponsorNextUI: NextPage = () => {
  return (
    <div className={styles.sponsorNextui}>
      <main className={styles.waveContainer}>
        <img className={styles.waveIcon} alt="" src="/wave.svg" />
        <img
          className={styles.waveContainerChild}
          loading="lazy"
          alt=""
          src="/group-21761.svg"
        />
      </main>
      <div className={styles.supportText}>
        <h1 className={styles.supportNextui}>Support NextUI</h1>
      </div>
      <div className={styles.ifYouRun}>
        If you run a business that intends to use NextUI in a revenue-generating
        product, or if you're a freelancer and NextUI saves you time in your
        work, or you're just using it in a fun project, your contributions will
        help to make NextUI better.
      </div>
      <div className={styles.buttonComponent}>
        <button className={styles.button}>
          <img className={styles.leftIcon} alt="" src="/lefticon.svg" />
          <a
            className={styles.children}
            href="https://opencollective.com/nextui"
            target="_blank"
          >
            Sponsor on OpenCollective
          </a>
          <img className={styles.rightIcon} alt="" src="/righticon.svg" />
        </button>
      </div>
    </div>
  );
};

export default SponsorNextUI;
