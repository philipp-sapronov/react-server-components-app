import React from "react";
import styles from "./header.module.sass";
import categorySchema from "../../../constants/categorySchema";
import ToggleSidebar from "../../../layout/ToggleSidebar";
import { ReactComponent as Icon } from "../../../layout/ToggleSidebar/views/images/burger.svg";
import DotsMenu from "../../../components/Shared/DotsMenu";

export default function Component(props) {
  return (
    <header className={styles.wrap}>
      <ToggleSidebar icon={Icon} />
      <h2 className={styles.title}>{"Header text"}</h2>
      <DotsMenu module="header" />
    </header>
  );
}
