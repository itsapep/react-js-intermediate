import { Component } from "react";

const UpdateComponent = OriginalComponent => {
    class NewComponent extends Component {
        render() {
            return (
                <OriginalComponent name='This Is HOC'/>
            );
        }
    }
    return NewComponent
}

export default UpdateComponent;