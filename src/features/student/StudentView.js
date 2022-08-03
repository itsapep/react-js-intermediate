import { Component } from 'react';
import { addAgeAction, changeNameAction } from './state/StudentAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class StudentView extends Component{
    constructor(props){
        super(props);
        this.state = {nameValue : ''};
    }

    handleNameChange = (event) => this.setState({
        nameValue : event.target.value
    }) 

    handleSubmit = () => this.props.changeNameAction(this.state.nameValue)
    handleAddAgeClick = () => this.props.addAgeAction();

    render(){
        const {student} = this.props;
        console.log(student);
        return(
            <div>
                <label>Name :
                    <input type='text' value={this.state.nameValue} onChange={this.handleNameChange}/>
                </label>
                <button onClick={this.handleSubmit}>Change Name</button>
                <div>
                    <button onClick={this.handleAddAgeClick}>Add Age</button>
                </div>
                <div>{student.name} {student.age}</div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addAgeAction,
    changeNameAction
}

const mapStateToProps = state => {
    return {student : state.studentReducer}
}

StudentView.propsTypes ={
    student : PropTypes.shape({
        name : PropTypes.string,
        age : PropTypes.number,
    }).isRequired,
    addAgeAction : PropTypes.func,
    changeNameAction : PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps) (StudentView);