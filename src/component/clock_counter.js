import { Component } from "react";
import UpdateComponent from "./with_counter";

class ClickCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h2 onClick={this.incrementCount}>{this.props.name} Click {count} Times</h2>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter); 