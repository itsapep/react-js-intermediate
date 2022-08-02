import { Component } from "react";
import Submit from "./submit";

class StoreData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName:'',
            favouriteFood:'',
            result:''
        }
    }

    onChange = (event) => {
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        })
    }

    handleSubmitButton = () => {
        this.setState({
            ...this.state,
            result: <Submit userName={this.state.userName} favouriteFood={this.state.favouriteFood}/>
        })
    }

    handleClearButton = () => {
        localStorage.clear();
        this.setState({
            ...this.state,
            userName:'',
            favouriteFood:''
        })
    }
    render() {
        return (
            <div>
                <input type='text' name='userName' placeholder="Username" value={this.state.userName} onChange={this.onChange}></input>
                <input type='text' name='favouriteFood' placeholder="Favourite food" value={this.state.favouriteFood} onChange={this.onChange}></input>
                <button onClick={this.handleSubmitButton}>Submit</button>
                <button onClick={this.handleClearButton}>Clear</button>
                {this.state.result}
            </div>
        )
    }
}

export default StoreData;