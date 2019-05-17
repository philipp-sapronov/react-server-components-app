import React, { Component } from 'react';
import { contactSchema } from '../../../../domains/contacts/state';
import { history } from './../../../root/reduxState/rootReducer';

// if (window.File && window.FileReader && window.FileList && window.Blob) {
//   document.getElementById('files').addEventListener('change', handleFileSelect, false);
// } else {
//   alert('The File APIs are not fully supported in this browser.');
// }
const reader = new FileReader();
const caontactFormValidatioon = state => {
  let result = true;
  contactSchema.required.forEach(prop => {
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
      //TODO file size check
      const self = this;
      reader.onload = e => {
        var binaryData = e.target.result;
        var base64Img = window.btoa(binaryData);
        console.log(base64Img);
        self.setState({ avatar: base64Img });
      };

      reader.readAsBinaryString(file);
    }

    _getImageFilePath = file => {
      const url = window.URL || window.webkitURL;
      const imgPath = url.createObjectURL(file);
      this.setState({ avatar: imgPath });
    };

    submitHandler = ID => e => {
      e.preventDefault();
      if (!caontactFormValidatioon(this.state)) {
        return;
      }
      const newItem = {
        data: this.state,
        ID,
      };
      console.log(newItem, 'newItem');
      this.props.submit(newItem);

      history.push(`/contacts/${ID}`);
    };

    changeHandler = ({ target }) => {
      if (target.name === 'avatar') {
        this.base64Convert(target.files[0]);
        return;
      }

      if (target.name === 'category') {
        this.setState({ [target.name]: target[target.selectedIndex].attributes.dataid.value });
        return;
      }

      this.setState({ [target.name]: target.value });
    };

    cancelHandler = () => {
      history.goBack();
    };

    render() {
      console.log(this.props, 'FORM PROPS');
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
