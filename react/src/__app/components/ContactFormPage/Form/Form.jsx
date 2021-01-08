import React from "react";
// import styles from './form.module.sass';
import "./form.css";
import "./form.module.sass";
import ImageLoader from "../../Shared/ImageLoader";
import { ContactField } from "../../../constants/contactSchema";

export default function Contact(props) {
  const { onSubmit, onChange, onCancel, values, categories = [] } = props;
  return (
    <div className="add-contact__form-wrap">
      <div className="add-contact__form">
        <form className="add-form" onSubmit={onSubmit} onChange={onChange}>
          <div className="flex-1">
            <ImageLoader avatar={values.avatar || null} />
            <div className="add-contact__fullname-wrap">
              <div className="flex-2">
                <div className="input-name-inner">
                  <label className="field-add field-name">Name</label>
                  <input
                    className="input-add input-name"
                    name={ContactField.firstname}
                    type="text"
                    value={values.firstname}
                    // required="required"
                  />
                </div>
                <div className="input-surname-inner">
                  <label className="field-add field-surname">Surname</label>
                  <input
                    className="input-add input-surname"
                    type="text"
                    value={values.lastname}
                    name={ContactField.lastname}
                  />
                </div>
              </div>
              <div className="input-descript-inner">
                <label className="field-add field-descript">Description</label>
                <textarea
                  className="input-add input-descript"
                  value={values.description}
                  name={ContactField.description}
                  rows={2}
                />
              </div>
            </div>
          </div>
          <div className="flex-3">
            <div className="input-phone-inner input-inner">
              <label>Phone</label>
              <input
                className="input-add input-phone"
                type="phone"
                value={values.phone}
                name={ContactField.phone}
              />
            </div>
            <div className="input-email-inner input-inner">
              <label>Email</label>
              <input
                className="input-add input-email"
                type="email"
                value={values.email}
                name={ContactField.email}
              />
            </div>
            <div className="input-bday-inner input-inner">
              <label>Birthday</label>
              <input
                className="input-add input-bday"
                type="date"
                value={values.birthday}
                name={ContactField.birthday}
              />
            </div>

            <div className="input-fb-acc-inner input-inner">
              <label>Facebook</label>
              <input
                className="input-add input-fb-acc"
                type="text"
                value={values.facebook}
                name={ContactField.facebook}
              />
            </div>
            <div className="input-Insta-inner input-inner">
              <label>Instagram</label>
              <input
                className="input-add input-instg-acc"
                type="text"
                value={values.instagram}
                name={ContactField.instagram}
              />
            </div>
            <div className="input-Insta-inner input-inner">
              <label>Category</label>
              {/* FIXME add CategoryField enum */}
              <select className="input-add input-category" name={"category"}>
                {(categories || []).map((category) => {
                  return (
                    <option selected={category.id === values.category}>
                      {category.text}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="save-controls-wrap">
            <div className="save-controls-inner">
              <div className="save-controls__btns">
                <button className="btn btn__save btn--theme-f" type="submit">
                  save
                </button>
                <button
                  onClick={onCancel}
                  className="btn btn__cancel btn--theme-e"
                  type="button"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
