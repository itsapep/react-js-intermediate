import './App.css';
import ActionType from './redux/reducer/global_action_type';
import { connect } from 'react-redux';
import { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.numb}</h1>
        <button onClick={this.props.handlePlus}>+</button>
        <button onClick={this.props.handleMinus}>-</button>
        <button onClick={this.props.handleTimes2}>x2</button>
      </div>
    );
  }
}

// this is how we send status
const mapStateToProps = (state) => {
  return {
    numb: state.globalNumber
  }
}

// this is how we send action
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({type: ActionType.PLUS}),
    handleMinus: () => dispatch({type: ActionType.MINUS}),
    handleTimes2: () => dispatch({type: ActionType.TIMES2})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
