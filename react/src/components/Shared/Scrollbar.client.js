import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const Scrollbar = ({ children, classes }) => {
  return (
    <div className={classes.container}>
      <Scrollbars autoHide hideTracksWhenNotNeeded>
        {children}
      </Scrollbars>
    </div>
  );
};

export default Scrollbar;
