import { Component } from "react";

class CalculatorControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: 0,
            num2: 0
        }
    }

    changeNumber = (event) => {
        let name = event.target.name;
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type='number' name="num1" onChange={this.changeNumber}/>
                <input type='number' name="num2" onChange={this.changeNumber}/>
                <button onClick={() => this.props.onAddition(Number(this.state.num1), Number(this.state.num2))}>+</button>
                <button onClick={() => this.props.onSubstraction(Number(this.state.num1), Number(this.state.num2))}>-</button>
                <button onClick={() => this.props.onMultiplication(Number(this.state.num1), Number(this.state.num2))}>*</button>
                <button onClick={() => this.props.onDivision(Number(this.state.num1), Number(this.state.num2))}>/</button>
            </div>
        )
    }
}

export default CalculatorControl;