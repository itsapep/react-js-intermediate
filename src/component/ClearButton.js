import { Component } from "react"
import withStorage from "../shared/WithStorage"

class ClearButton extends Component {
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

export default withStorage(ClearButton); 