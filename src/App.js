import './App.css';
import ActionType from './redux/reducer/global_action_type';
import { Component } from 'react';
import { connect } from 'react-redux';

class ReduxCalculator extends Component {
  render() {
    return (
      <>
        <div>{this.props.result}</div>
        <div>
          <input
            type="number"
            value={Number(this.props.numb1)}
            onChange={this.props.handleChange1}
          />
          <input
            type="number"
            value={Number(this.props.numb2)}
            onChange={this.props.handleChange2}
          />
          <button onClick={this.props.handlePlus}>+</button>
          <button onClick={this.props.handleMinus}>-</button>
          <button onClick={this.props.handleDivide}>/</button>
          <button onClick={this.props.handleMultiple}>x</button>
        </div>
      </>
    );
  }
}

// this is how we send status
const mapStateToProps = (state) => {
  return {
    numb1: state.globalNumber1,
    numb2: state.globalNumber2,
    result: state.globalResult,
  };
};

// this is how we send action
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange1: (event) =>
      dispatch({ type: ActionType.CHANGENUM1, newValue: event.target.value }),
    handleChange2: (event) =>
      dispatch({ type: ActionType.CHANGENUM2, newValue: event.target.value }),
    handlePlus: () => dispatch({ type: ActionType.PLUS }),
    handleMinus: () => dispatch({ type: ActionType.MINUS }),
    handleDivide: () => dispatch({ type: ActionType.DIVIDE }),
    handleMultiple: () => dispatch({ type: ActionType.MULTIPLE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCalculator);