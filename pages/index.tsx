import type { NextPage } from "next";
import CardFrame from "../components/card-frame";
import FastModernUniqueGroup from "../components/fast-modern-unique-group";
import styles from "./index.module.css";

const Cover: NextPage = () => {
  return (
    <div className={styles.cover}>
      <img className={styles.looperBgIcon} alt="" />
      <CardFrame />
      <FastModernUniqueGroup />
    </div>
  );
};

export default Cover;
