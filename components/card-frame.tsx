import type { NextPage } from "next";
import styles from "./card-frame.module.css";

const CardFrame: NextPage = () => {
  return (
    <header className={styles.cardFrame}>
      <div className={styles.buttonFrame}>
        <img
          className={styles.buttonFrameChild}
          loading="lazy"
          alt=""
          src="/group-21764.svg"
        />
        <div className={styles.unionFrame}>
          <h1 className={styles.nameFrame}>+</h1>
        </div>
        <img
          className={styles.nextuiCardIcon}
          loading="lazy"
          alt=""
          src="/nextui-card.svg"
        />
      </div>
      <div className={styles.openSourceKitFrame}>
        <button className={styles.button}>
          <img
            className={styles.communityGroupIcon}
            alt=""
            src="/community-group.svg"
          />
          <div className={styles.inputFrame}>
            <div className={styles.nextUI}>Variants</div>
          </div>
        </button>
        <button className={styles.button1}>
          <img className={styles.frameIcon} alt="" src="/community-group.svg" />
          <div className={styles.textWrapper}>
            <div className={styles.text}>Variables</div>
          </div>
        </button>
        <button className={styles.button2}>
          <div className={styles.avatarFrame}>
            <img className={styles.unionIcon} alt="" src="/union.svg" />
          </div>
          <div className={styles.secondCardFrame}>Auto layout</div>
        </button>
      </div>
    </header>
  );
};

export default CardFrame;
