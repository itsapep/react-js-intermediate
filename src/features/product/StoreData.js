import { Component } from 'react';
import WithLocalStorage from '../../shared/WithLocalStorage';

class SubmitComponent extends Component {
  state = { userName: '', favoriteFood: '' };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    this.props.addItem('userName', this.state.userName);
    this.props.addItem('favoriteFood', this.state.favoriteFood);
  };

  onClear = () => {
    this.props.deleteItem('userName');
    this.props.deleteItem('favoriteFood');
  };

  render() {
    return (
      <>
        <input
          placeholder="userName"
          name="userName"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <input
          placeholder="favoriteFood"
          name="favoriteFood"
          value={this.state.favoriteFood}
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit}>Submit</button>
        <button onClick={this.onClear}>Clear</button>
      </>
    );
  }
}

export default WithLocalStorage(SubmitComponent);