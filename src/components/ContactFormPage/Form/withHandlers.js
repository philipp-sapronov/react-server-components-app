import React, { Component } from "react";
import { contactSchema } from "../../../../domains/contacts/state";
import { history } from "./../../../root/reduxState/rootReducer";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const base = 150;

const reader = new FileReader();
const caontactFormValidatioon = (state) => {
  let result = true;
  contactSchema.required.forEach((prop) => {
    if (!state[prop] || !state[prop].trim()) result = false;
  });
  return result;
};

function WithHandlers(Wrapped) {
  return class WithHandlers extends Component {
    constructor(props) {
      super(props);
    }

    state = this.props.contact || { ...contactSchema.fields };
    placeholders = this.props.placeholders || {};

    base64Convert(file) {
      const self = this;
      reader.onload = (e) => {
        var binaryData = e.target.result;
        var base64Img = window.btoa(binaryData);
        console.log(file, base64Img, "!!!");
        self.setState({ avatar: base64Img });
      };

      reader.readAsBinaryString(file);
    }

    compress(file) {
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
                type: "image/jpeg",
                lastModified: Date.now(),
              });
              this.base64Convert(newfile);
            },
            "image/jpeg",
            1
          );
        };
        reader.onerror = (error) => console.log(error);
      };
    }

    _getImageFilePath = (file) => {
      const url = window.URL || window.webkitURL;
      const imgPath = url.createObjectURL(file);
      this.setState({ avatar: imgPath });
    };

    submitHandler = (ID) => (e) => {
      e.preventDefault();
      if (!caontactFormValidatioon(this.state)) {
        return;
      }
      const newItem = {
        data: this.state,
        ID,
      };
      console.log(newItem, "newItem");
      this.props.submit(newItem);

      history.push(`/contacts/${ID}`);
    };

    changeHandler = ({ target }) => {
      if (target.name === "avatar") {
        this.compress(target.files[0]);
        return;
      }

      if (target.name === "category") {
        this.setState({
          [target.name]: target[target.selectedIndex].attributes.dataid.value,
        });
        return;
      }

      this.setState({ [target.name]: target.value });
    };

    cancelHandler = () => {
      history.goBack();
    };

    render() {
      console.log(this.props, "FORM PROPS");
      return (
        <Wrapped
          {...this.props}
          values={this.state}
          cancelHandler={this.cancelHandler}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler(this.props.Id)}
        />
      );
    }
  };
}

export default WithHandlers;
