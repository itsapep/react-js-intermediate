import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/reducer/global_action_type";

class NumberTwo extends Component {
    render() {
        return (
            <div>
                {this.props.numb}
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
    handlePlus: () => dispatch({type: ActionType.PLUS}),
    handleMinus: () => dispatch({type: ActionType.MINUS}),
    handleTimes2: () => dispatch({type: ActionType.TIMES2})
}
}

export default connect(mapStateToProps, mapDispatchToProps) (NumberTwo);
  