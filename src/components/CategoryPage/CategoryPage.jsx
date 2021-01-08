import React from "react";
import styles from "./category-page.module.sass";

import Header from "../Header";
import { ContactList } from "./ContactList/Contacts";

import scrollStyles from "./scrollbar.module.sass";
import { WithScrollbar } from "../../HOCs/WithScrollbar/WithScrollbar";

const Page = (props) => {
  const { scrollThumb, scrollBar, scrollContainer } = props;

  return (
    <div>
      <Header />
      <div className={scrollStyles.wrap} ref={scrollBar.ref}>
        <div
          className={scrollStyles.bar}
          ref={scrollThumb.ref}
          onMouseDown={scrollThumb.onMouseDown}
        />
      </div>
      <div
        className={styles.container}
        ref={scrollContainer.ref}
        onScroll={scrollContainer.onScroll}
      >
        <div className={styles.inner}>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default WithScrollbar(Page);
