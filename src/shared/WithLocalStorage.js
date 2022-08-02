import { Component } from 'react';

const WithLocalStorage = (WrappedComponent) => {
  class NewComponent extends Component {

    addItem = (key, value) => {
      window.localStorage.setItem(key, value);
    };

    deleteItem = (key) => {
      localStorage.removeItem(key);
    };

    render() {
      return (
        <WrappedComponent
          addItem={this.addItem}
          deleteItem={this.deleteItem}
        />
      );
    }
  }
  return NewComponent;
};

export default WithLocalStorage;