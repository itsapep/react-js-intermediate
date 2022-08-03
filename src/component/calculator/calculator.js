import { Component } from "react";
import { connect } from "react-redux";
import CalculatorControl from "./calculatorControl";
import CalculatorOutput from "./calculatorOutput";
import ActionType from "./state/CalculatorAction";

class Calculator extends Component {
    render() {
        return (
            <div>
                <CalculatorOutput value={this.props.ctr}/>
                <CalculatorControl onAddition={this.props.onAddition} onSubstraction={this.props.onSubstraction} onMultiplication={this.props.onMultiplication} onDivision={this.props.onDivision}/>
            </div>
        )
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
      onAddition: (num1,num2) => dispatch({type: ActionType.ADDITION, num1:num1,num2:num2}),
      onSubstraction: (num1,num2) => dispatch({type: ActionType.SUBSTRACTION ,num1:num1,num2:num2}),
      onMultiplication: (num1,num2) => dispatch({type: ActionType.MULTIPLICATION, num1:num1,num2:num2}),
      onDivision: (num1,num2) => dispatch({type: ActionType.DIVISION, num1:num1,num2:num2})

    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (Calculator);