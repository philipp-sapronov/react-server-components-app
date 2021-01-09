import React, { useState } from 'react';
import ImageLoader from '../Shared/ImageLoader.client';
import { ContactField } from '../../constants/contactSchema';

function Form({ data, categories = [] }) {
  const [state, setState] = useState(data || {});

  const base64Convert = (file) => {
    reader.onload = (e) => {
      var binaryData = e.target.result;
      var base64Img = window.btoa(binaryData);

      setState({ avatar: base64Img });
    };

    reader.readAsBinaryString(file);
  };

  const compress = (file) => {
    let newfile = null;

    const fileName = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = (e) => {
        //
        const ratio = img.width / base;
        const x = base;
        const y = img.height / ratio;
        canvas.width = x;
        canvas.height = y;

        ctx.drawImage(img, 0, 0, x, y);
        ctx.canvas.toBlob(
          (blob) => {
            newfile = new File([blob], fileName, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            base64Convert(newfile);
          },
          'image/jpeg',
          1
        );
      };
      reader.onerror = (error) => console.log(error);
    };
  };

  const _getImageFilePath = (file) => {
    const url = window.URL || window.webkitURL;
    const imgPath = url.createObjectURL(file);
    setState({ avatar: imgPath });
  };

  const onSubmit = (ID) => {
    return (e) => {
      e.preventDefault();
      if (!validateForm(state)) {
        return;
      }
      const newItem = {
        data: state,
        ID,
      };
      console.log(newItem, 'newItem');

      // __redux__ props.submit(newItem);

      history.push(`/contacts/${ID}`);
    };
  };

  const onChange = ({ target }) => {
    if (target.name === 'avatar') {
      compress(target.files[0]);
      return;
    }

    if (target.name === 'category') {
      setState({
        [target.name]: target[target.selectedIndex].attributes.dataid.value,
      });
      return;
    }

    setState({ [target.name]: target.value });
  };

  const onCancel = () => {
    // history.goBack();
  };

  return (
    <div className="add-contact__form-wrap">
      <div className="add-contact__form">
        <form className="add-form" onSubmit={onSubmit} onChange={onChange}>
          <div className="flex-1">
            <ImageLoader avatar={state.avatar || null} />
            <div className="add-contact__fullname-wrap">
              <div className="flex-2">
                <div className="input-name-inner">
                  <label className="field-add field-name">Name</label>
                  <input
                    className="input-add input-name"
                    name={ContactField.firstName}
                    type="text"
                    value={state.firstName}
                    // required="required"
                  />
                </div>
                <div className="input-surname-inner">
                  <label className="field-add field-surname">Surname</label>
                  <input
                    className="input-add input-surname"
                    type="text"
                    value={state.lastName}
                    name={ContactField.lastName}
                  />
                </div>
              </div>
              <div className="input-descript-inner">
                <label className="field-add field-descript">Description</label>
                <textarea
                  className="input-add input-descript"
                  value={state.description}
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
                value={state.phone}
                name={ContactField.phone}
              />
            </div>
            <div className="input-email-inner input-inner">
              <label>Email</label>
              <input
                className="input-add input-email"
                type="email"
                value={state.email}
                name={ContactField.email}
              />
            </div>
            <div className="input-bday-inner input-inner">
              <label>Birthday</label>
              <input
                className="input-add input-bday"
                type="date"
                value={state.birthday}
                name={ContactField.birthday}
              />
            </div>

            <div className="input-fb-acc-inner input-inner">
              <label>Facebook</label>
              <input
                className="input-add input-fb-acc"
                type="text"
                value={state.facebook}
                name={ContactField.facebook}
              />
            </div>
            <div className="input-Insta-inner input-inner">
              <label>Instagram</label>
              <input
                className="input-add input-instg-acc"
                type="text"
                value={state.instagram}
                name={ContactField.instagram}
              />
            </div>
            <div className="input-Insta-inner input-inner">
              <label>Category</label>
              {/* FIXME add CategoryField enum */}
              <select className="input-add input-category" name={'category'}>
                {(categories || []).map((category) => {
                  return (
                    <option selected={category.id === state.category}>
                      {category.name}
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
                  type="button">
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

export default Form;
