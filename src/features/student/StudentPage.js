import { Component } from 'react';
import { addAgeAction, changeNameAction } from './state/StudentAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class StudentPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameValue : ''
        };
    }

    handleNameChange = (event) => this.setState({
        nameValue : event.target.value
    }) 

    handleSubmit = () => this.props.changeNameAction(this.state.nameValue)
    handleAddAgeClick = () => this.props.addAgeAction();

    render(){
        return(
            this.props.view({
                handleSubmitStudent:this.handleSubmit,
                newStudentValue: this.state.nameValue, 
                handleNewStudentChange: this.handleNameChange, 
                student: this.props.student, // consume from mapStateToProps
                handleAddAgeClick: this.handleAddAgeClick,
                books: this.props.studentBook.books
            })
        )
    }
}

const mapDispatchToProps = {
    addAgeAction,
    changeNameAction
}

const mapStateToProps = state => {
    return {
        student : state.studentReducer,
        studentBook: state.bookReducer,
    }
}

StudentPage.propsTypes ={
    student : PropTypes.shape({
        name : PropTypes.string,
        age : PropTypes.number,
    }).isRequired,
    addAgeAction : PropTypes.func,
    changeNameAction : PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps) (StudentPage);