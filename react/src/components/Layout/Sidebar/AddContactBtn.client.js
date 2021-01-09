import React from 'react';
import { useHistory } from 'react-router';

const AddContactBtn = () => {
  const history = useHistory();

  const handleCLick = () => {
    history.push(`/add-contact`);
  };

  return (
    <div className="add-contact-btn__wrap">
      <button onClick={handleCLick} className="add-contact-btn">
        <div className="add-contact-btn__icon-wrap">
          <img src="/assets/add-btn.svg" alt="" />
        </div>
        New contact
      </button>
    </div>
  );
};

export default AddContactBtn;
